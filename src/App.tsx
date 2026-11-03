import React, { useState, useEffect } from 'react';
import { HomeView, type HomeAction } from './components/home/HomeView';
import { ClinomaGamesHub, type SelectedGameId } from './components/hub/ClinomaGamesHub';
import { Battle1v1View } from './components/battle/Battle1v1View';
import { GameLoadBoundary } from './components/game/GameLoadBoundary';
const OnboardingView = React.lazy(() => import('./components/views/OnboardingView').then(m => ({ default: m.OnboardingView })));
import { Sheet, IconBtn, BigBtn, Label, isAr } from './components/game/ui';
import { sfx } from './lib/sfx';
import { Language, AppUser } from './types';
import { Globe, LogIn, LogOut, HelpCircle, Volume2, VolumeX, Mail, Send, Trash2, ShieldAlert, Sparkles, Check, Timer, Image as ImageIcon, Search, Brain, Zap, AlertTriangle, FileText, EyeOff, MessagesSquare, Trophy, Vote, Users, Swords, Stethoscope, History, Pencil, Crown, UserX, Flame, MoreVertical, ChevronRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { auth, loginWithGoogle, syncUserDoc, db, acquireCloudAccess, withCloudAccess } from './firebase';
import { subscribePublicData, refreshPublicData } from './lib/publicData';
import { syncAccount } from './lib/accountSync';
import { writeLocal, readLocal } from './lib/localStore';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, updateDoc, collection, query, orderBy, limit, onSnapshot, addDoc, getDocs, deleteDoc } from 'firebase/firestore';
import { isOwnerAdmin } from './lib/ownerAdminIdentity';
import { AdminPlatformHub } from './components/admin/AdminPlatformHub';
import { initAdsListener } from './lib/adsEngine';
import { ModalFrame } from './components/game/ModalFrame';
import { AccountDetails } from './components/game/AccountDetails';

export default function App() {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('app_language');
      if (saved === 'Arabic' || saved === 'English') return saved;
    } catch {}
    return 'English';
  });

  useEffect(() => {
    try {
      localStorage.setItem('app_language', language);
    } catch {}
  }, [language]);

  useEffect(() => {
    initAdsListener();
  }, []);
  const [splashDone, setSplashDone] = useState(false);
  const [appUser, setAppUser] = useState<AppUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<string>('ENTRY');
  const [showHelp, setShowHelp] = useState(false);
  const [appNotice, setAppNotice] = useState('');
  const [largeText, setLargeText] = useState(() => {
    try { return localStorage.getItem('clinoma_large_text') === 'true'; } catch { return false; }
  });
  useEffect(() => {
    document.documentElement.lang = language === 'Arabic' ? 'ar' : 'en';
    document.documentElement.dir = language === 'Arabic' ? 'rtl' : 'ltr';
  }, [language]);
  useEffect(() => {
    document.documentElement.style.fontSize = largeText ? '112.5%' : '100%';
    try { localStorage.setItem('clinoma_large_text', String(largeText)); } catch { /* optional preference */ }
  }, [largeText]);
  useEffect(() => {
    const viewport = window.visualViewport;
    const resize = () => {
      // Preserve pinch zoom; resize the game only for the software keyboard.
      const height = viewport && viewport.scale === 1 ? viewport.height : window.innerHeight;
      document.documentElement.style.setProperty('--app-height', `${height}px`);
    };
    resize();
    viewport?.addEventListener('resize', resize);
    window.addEventListener('resize', resize);
    return () => { viewport?.removeEventListener('resize', resize); window.removeEventListener('resize', resize); };
  }, []);

  const [showOptionsMenu, setShowOptionsMenu] = useState(false);
  const [activeHelpTab, setActiveHelpTab] = useState<'guess' | 'battle' | 'imposter'>('guess');
  const [showAccountSettings, setShowAccountSettings] = useState(false);
  const [tempDisplayName, setTempDisplayName] = useState('');
  const [isSavingName, setIsSavingName] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [initialRoomCode, setInitialRoomCode] = useState<string>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return (params.get('room') || params.get('join') || '').trim().toUpperCase();
    } catch {
      return '';
    }
  });

  const [activeGamePlatform, setActiveGamePlatform] = useState<'HUB' | 'DR_IMPOSTER' | 'BATTLE_1V1' | 'GUESS'>(() => {
    if (initialRoomCode) return 'DR_IMPOSTER';
    let retryAction: string | null = null;
    try {
      retryAction = sessionStorage.getItem('dr_imposter_retry_action');
    } catch {
      retryAction = null;
    }
    if (retryAction === 'solo') return 'GUESS';
    if (retryAction === 'offline' || retryAction === 'online' || retryAction === 'visual') return 'DR_IMPOSTER';
    return 'HUB';
  });

  const [pendingHomeAction, setPendingHomeAction] = useState<HomeAction | null>(() => {
    let retryAction: string | null = null;
    try {
      retryAction = sessionStorage.getItem('dr_imposter_retry_action');
    } catch {
      retryAction = null;
    }
    if (initialRoomCode) return 'online';
    if (retryAction === 'solo' || retryAction === 'visual' || retryAction === 'offline' || retryAction === 'online' || retryAction === 'ranking') {
      return retryAction;
    }
    return null;
  });
  useEffect(() => {
    try {
      sessionStorage.removeItem('dr_imposter_retry_action');
    } catch {
      // ignore
    }
  }, []);
  const [gameRetry, setGameRetry] = useState(0);
  const LazyMedicalCupView = React.useMemo(() => React.lazy(() => import('./components/views/MedicalCupView').then(m => ({ default: m.MedicalCupView }))), [gameRetry]);
  const [guestScore, setGuestScore] = useState(() => {
    try { return Number(localStorage.getItem('dr_imposter_guest_score') || '0') || 0; } catch { return 0; }
  });

  // Admin & Announcements states
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  useEffect(() => {
    if (!showAdminPanel) return;
    let release: (() => void) | undefined;
    let disposed = false;
    acquireCloudAccess().then(close => { if (disposed) close(); else release = close; });
    return () => { disposed = true; release?.(); };
  }, [showAdminPanel]);
  const [activeAnnouncement, setActiveAnnouncement] = useState<any>(null);
  const [dismissedAnnouncementId, setDismissedAnnouncementId] = useState<string | null>(() => {
    try {
      return sessionStorage.getItem('dismissed_announcement_id');
    } catch {
      return null;
    }
  });
  const [remainingTime, setRemainingTime] = useState<number>(0);

  // Form states for Admin message
  const [adminTitle, setAdminTitle] = useState('');
  const [adminMessage, setAdminMessage] = useState('');
  const [adminImageUrl, setAdminImageUrl] = useState('logo.jpg');
  const [adminDurationVal, setAdminDurationVal] = useState('5');
  const [adminDurationUnit, setAdminDurationUnit] = useState<'minutes' |'seconds'>('minutes');
  const [isSendingMessage, setIsSendingMessage] = useState(false);
  const [recentAnnouncements, setRecentAnnouncements] = useState<any[]>([]);
  const [adminTab, setAdminTab] = useState<'send' |'history'>('send');
  const [soundOn, setSoundOn] = useState<boolean>(() => sfx.isOn());

  useEffect(() => {
    const timer = setTimeout(() => setSplashDone(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let unblocked = false;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && !user.isAnonymous) {
        syncUserDoc(user)
          .then((synced) => {
            if (synced) {
              try {
                const stored = localStorage.getItem(`offline_onboarding_${synced.id}`);
                if (stored) {
                  const parsed = JSON.parse(stored);
                  if (!synced.academicLevel) synced.academicLevel = parsed.academicLevel;
                  if (!synced.academicYear) synced.academicYear = parsed.academicYear;
                  if (!synced.university) synced.university = parsed.university;
                }
              } catch (e) {
                console.warn("Local storage parse error:", e);
              }
              setAppUser(synced);
            }
          })
          .catch((error) => {
            console.error("Failed to sync user doc", error);
          })
          .finally(() => {
            if (!unblocked) {
              setAuthLoading(false);
              unblocked = true;
            }
          });

        const unblockTimeout = setTimeout(() => {
          if (!unblocked) {
            setAuthLoading(false);
            unblocked = true;
          }
        }, 600);
      } else {
        setAppUser(null);
        setAuthLoading(false);
        unblocked = true;
      }
    });

    const authTimeout = setTimeout(() => {
      if (!unblocked) {
        setAuthLoading(false);
        unblocked = true;
      }
    }, 1500);

    return () => {
      unsubscribe();
      clearTimeout(authTimeout);
    };
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await loginWithGoogle();
      const profile = await syncAccount();
      if (profile) setAppUser(profile);
    } catch (err) {
      console.error("Login action error", err);
      setAppNotice(language === 'Arabic' ? 'تعذر تسجيل الدخول. تحقق من الاتصال وحاول مجددًا.' : 'Could not sign in. Check your connection and try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setAppUser(null);
      setShowAccountSettings(false);
    } catch (err) {
      console.error("Logout action error", err);
    }
  };

  // Display optional announcements from disk. Refresh only on user request.
  useEffect(() => {
    return subscribePublicData(({ announcement: docData }) => {
      if (docData) {
        const id = docData.id;
        const now = Date.now();

        if (now < docData.expiresAt && id !== dismissedAnnouncementId) {
          setActiveAnnouncement({ id, ...docData });
        } else {
          setActiveAnnouncement(null);
        }
      } else {
        setActiveAnnouncement(null);
      }
    });
  }, [dismissedAnnouncementId]);

  const handleSync = async () => {
    if (isSyncing) return;
    setIsSyncing(true);
    try {
      if ('serviceWorker' in navigator && navigator.onLine) {
        void navigator.serviceWorker.getRegistration().then(reg => reg?.update()).catch(() => {});
      }
      await refreshPublicData();
      const profile = await syncAccount();
      if (profile) setAppUser(profile);
      setAppNotice(language === 'Arabic' ? 'تم تحديث البيانات ومزامنة النقاط. اللعب المحلي لا يحتاج إنترنت.' : 'Data updated and scores synced. Local play needs no internet.');
    } catch {
      setAppNotice(language === 'Arabic' ? 'تعذرت المزامنة. نقاطك محفوظة على الجهاز؛ حاول عند توفر الإنترنت.' : 'Could not sync. Your scores are saved on this device; try again when online.');
    } finally { setIsSyncing(false); }
  };

  // Countdown timer for active announcement
  useEffect(() => {
    if (!activeAnnouncement) return;

    const calculateTime = () => {
      const now = Date.now();
      const diff = Math.max(0, Math.floor((activeAnnouncement.expiresAt - now) / 1000));
      setRemainingTime(diff);
      if (diff <= 0) {
        setActiveAnnouncement(null);
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [activeAnnouncement]);

  // Fetch announcements history (Admins only)
  useEffect(() => {
    if (!showAdminPanel || adminTab !=='history') return;

    const fetchHistory = async () => {
      try {
        const q = query(collection(db,'announcements'), orderBy('createdAt','desc'), limit(15));
        const snap = await getDocs(q);
        const list = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRecentAnnouncements(list);
      } catch (error) {
        console.error("Failed to fetch history", error);
      }
    };

    fetchHistory();
  }, [showAdminPanel, adminTab]);

  const handleSendAdminMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adminMessage.trim()) return;

    setIsSendingMessage(true);
    try {
      const durationNum = parseInt(adminDurationVal) || 5;
      const durationSec = adminDurationUnit ==='minutes' ? durationNum * 60 : durationNum;

      const now = Date.now();
      const expiresAt = now + durationSec * 1000;

      const newAnnouncement = {
        title: adminTitle.trim() || (language ==='Arabic' ?'إعلان هام من كلينوما' :'Important Clinoma Announcement'),
        message: adminMessage.trim(),
        type:'app',
        imageUrl: adminImageUrl.trim() ||'logo.jpg',
        duration: durationSec,
        createdAt: now,
        expiresAt: expiresAt
      };

      await addDoc(collection(db,'announcements'), newAnnouncement);

      setAdminTitle('');
      setAdminMessage('');
      setAdminImageUrl('logo.jpg');
      setAdminDurationVal('5');
      setAdminDurationUnit('minutes');

      alert(language ==='Arabic' ?'✓ تم إرسال وبث الرسالة بنجاح لجميع اللاعبين!' :'✓ Message sent and broadcasted to all players successfully!');

      setAdminTab('history');
      const q = query(collection(db,'announcements'), orderBy('createdAt','desc'), limit(15));
      const snap = await getDocs(q);
      setRecentAnnouncements(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));

    } catch (error) {
      console.error("Failed to broadcast message", error);
      alert(language ==='Arabic' ?' فشل إرسال الرسالة، يرجى التحقق من الصلاحيات والاتصال.' :' Failed to broadcast message. Please check permissions and connection.');
    } finally {
      setIsSendingMessage(false);
    }
  };

  const handleDeleteAnnouncement = async (id: string) => {
    if (!window.confirm(language ==='Arabic' ?'هل أنت متأكد من حذف هذا الإعلان؟ سيختفي فوراً عند الجميع.' :'Are you sure you want to delete this announcement? It will disappear immediately for everyone.')) {
      return;
    }

    try {
      await deleteDoc(doc(db,'announcements', id));
      setRecentAnnouncements(prev => prev.filter(item => item.id !== id));
      if (activeAnnouncement?.id === id) {
        setActiveAnnouncement(null);
      }
    } catch (error) {
      console.error("Failed to delete announcement", error);
      alert(language ==='Arabic' ?' فشل الحذف.' :' Failed to delete.');
    }
  };

  const handleDismissAnnouncement = () => {
    if (activeAnnouncement) {
      try {
        sessionStorage.setItem('dismissed_announcement_id', activeAnnouncement.id);
      } catch {}
      setDismissedAnnouncementId(activeAnnouncement.id);
      setActiveAnnouncement(null);
    }
  };

  const handleSaveOnboarding = async (onboardingData: { academicLevel: string; academicYear?: string; university: string }) => {
    if (!appUser) return;
    try {
      {
        const edits = { ...onboardingData, academicYear: onboardingData.academicYear || '' };
        writeLocal(`clinoma-profile-edits:${appUser.id}`, { ...readLocal(`clinoma-profile-edits:${appUser.id}`, {}), ...edits });
        writeLocal(`clinoma-profile:${appUser.id}`, { ...appUser, ...edits });
        try {
          localStorage.setItem(`offline_onboarding_${appUser.id}`, JSON.stringify(onboardingData));
        } catch (e) {
          console.warn("Offline storage save error:", e);
        }
      }

      setAppUser(prev => prev ? {
        ...prev,
        academicLevel: onboardingData.academicLevel,
        academicYear: onboardingData.academicYear ||'',
        university: onboardingData.university
      } : null);
    } catch (error) {
      console.error("Failed to save onboarding details", error);
      throw error;
    }
  };

  const handleSaveName = async () => {
    if (!appUser || !tempDisplayName.trim()) return;
    setIsSavingName(true);
    setSaveSuccess(false);
    try {
      writeLocal(`clinoma-profile:${appUser.id}`, { ...appUser, displayName: tempDisplayName.trim() });
      writeLocal(`clinoma-profile-edits:${appUser.id}`, { ...readLocal(`clinoma-profile-edits:${appUser.id}`, {}), displayName: tempDisplayName.trim() });
      setAppUser(prev => prev ? { ...prev, displayName: tempDisplayName.trim() } : null);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error("Failed to save name", error);
    } finally {
      setIsSavingName(false);
    }
  };

  const ar = isAr(language);
  const isAdmin = isOwnerAdmin(appUser);

  const loading = !splashDone || authLoading;

  /* ================= SPLASH ================= */
  if (loading) {
    return (
      <div className="fixed inset-0 bg-ink flex flex-col items-center justify-center z-[9999] p-6 text-center select-none overflow-hidden tap-none">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-mint/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-coral/10 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease:'easeInOut' }}
          className="relative w-32 h-32 rounded-[2.2rem] overflow-hidden border-2 border-mint/50 shadow-[0_0_50px_rgba(47,230,167,0.35)]"
        >
          <img src="/logo.jpg" alt="Dr. Imposter Logo" className="w-full h-full object-cover" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-display font-bold text-4xl sm:text-5xl text-white mt-6 tracking-wide"
        >
          Clinoma <span className="text-mint">Games</span>
        </motion.h1>
        <p className="font-display text-mint text-sm font-bold tracking-[0.25em] uppercase mt-1">
          {ar ? 'منصة الألعاب الطبية السريرية' : 'Clinical Medical Games Platform'}
        </p>

        <p role="status" className="mt-8 text-white/75">{ar ? 'جاري التحضير…' : 'Getting ready…'}</p>

        <div className="absolute bottom-8 inset-x-0 text-center text-white/70 text-xs font-semibold">
          © {new Date().getFullYear()} Clinoma Games
        </div>
      </div>
    );
  }

  const needsOnboarding = appUser && (!appUser.academicLevel || !appUser.university);

  return (
    <div
      dir={ar ?'rtl' :'ltr'}
      className="game-shell h-[100dvh] flex flex-col bg-ink text-white tap-none relative"
    >
      {/* ambient decor */}
      <div className="absolute -top-24 start-1/4 w-80 h-80 bg-mint/[0.07] rounded-full blur-[110px] pointer-events-none z-0" />
      <div className="absolute -bottom-24 end-1/4 w-96 h-96 bg-pop/[0.06] rounded-full blur-[130px] pointer-events-none z-0" />

      {/* ================= HEADER ================= */}
      <header className="shrink-0 relative z-40 px-3 pt-safe pb-2 flex items-center justify-between border-b border-white/[0.06] bg-ink/90 backdrop-blur-md">
        <div className="flex items-center gap-2.5 min-w-0 min-h-12">


          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/15 shadow-[0_0_14px_rgba(47,230,167,0.25)] shrink-0">
            <img src="/logo.jpg" alt="Clinoma Games" className="w-full h-full object-cover" />
          </div>

          <div className="leading-none min-w-0">
            <h1 className="font-display font-bold text-base sm:text-lg text-white truncate">
              {activeGamePlatform === 'HUB' ? (
                  <>Clinoma <span className="text-mint max-[359px]:hidden">Games</span></>
              ) : activeGamePlatform === 'DR_IMPOSTER' ? (
                <>Dr. <span className="text-coral">Imposter</span></>
              ) : activeGamePlatform === 'BATTLE_1V1' ? (
                <>1 vs 1 <span className="text-gold">Battle</span></>
              ) : (
                <>Guess <span className="text-mint">· خَمّن</span></>
              )}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 min-h-12 shrink-0">
          {appUser ? (
            <button
              type="button"
              onClick={() => {
                setTempDisplayName(appUser.displayName || appUser.email.split('@')[0]);
                setShowAccountSettings(true);
              }}
              aria-label={ar ? 'حسابي' : 'My account'}
              className="h-12 w-12 rounded-2xl bg-gradient-to-br from-mint/30 to-mint/10 border border-mint/40 flex items-center justify-center active:scale-90 transition-transform shrink-0"
            >
              <span className="font-display font-bold text-base text-mint">
                {(appUser.displayName || appUser.email)[0]?.toUpperCase()}
              </span>
            </button>
          ) : currentPhase === 'ENTRY' && !pendingHomeAction ? (
            <button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="min-h-12 px-3.5 rounded-2xl bg-gold border border-amber-600/60 text-amber-950 font-display font-bold text-xs flex items-center gap-1.5 shrink-0 whitespace-nowrap active:scale-90 transition-transform"
            >
              <LogIn size={15} />
              {isLoggingIn ? '...' : (ar ? 'دخول' : 'Login')}
            </button>
          ) : null}

          <button
            type="button"
            onClick={() => setShowOptionsMenu(true)}
            aria-label={ar ? 'خيارات إضافية' : 'More options'}
            className="h-12 w-12 rounded-2xl bg-ink-3/90 hover:bg-ink-3 border border-ink-4 flex items-center justify-center text-white/80 hover:text-white active:scale-90 transition-all shrink-0"
          >
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      {appUser?.isOfflineFallback && (
        <div className="shrink-0 bg-gold/10 border-b border-gold/20 text-gold px-4 py-1.5 text-center text-[0.8125rem] font-bold">
          {ar ?'وضع محلي مؤقت — قاعدة البيانات غير متصلة' :'Local offline mode — database not connected'}
        </div>
      )}

      {/* ================= MAIN ================= */}
      <main className="flex-1 min-h-0 relative z-10 w-full max-w-lg mx-auto">
        {needsOnboarding ? (
          <React.Suspense fallback={null}>
            <OnboardingView
              language={language}
              appUser={appUser}
              onSave={handleSaveOnboarding}
              onLogout={handleLogout}
            />
          </React.Suspense>
        ) : pendingHomeAction ? (
          <GameLoadBoundary
            key={gameRetry}
            language={language}
            onRetry={() => {
              if (pendingHomeAction) {
                try {
                  sessionStorage.setItem('dr_imposter_retry_action', pendingHomeAction);
                } catch {
                  /* ignore */
                }
              }
              window.location.reload();
            }}
            onHome={() => {
              setPendingHomeAction(null);
              setCurrentPhase('ENTRY');
              setActiveGamePlatform('HUB');
            }}
          >
            <React.Suspense fallback={<div role="status" className="h-full flex items-center justify-center text-white/80">{ar ? 'جاري تحميل اللعبة…' : 'Loading game…'}</div>}>
              <LazyMedicalCupView
                overlayOpen={showHelp || showOptionsMenu || showAccountSettings || !!activeAnnouncement || !!appNotice}
                onUpdateScore={(score) => {
                  setGuestScore(score);
                  if (appUser) setAppUser(previous => previous ? { ...previous, detectiveScore: score } : previous);
                }}
                initialAction={pendingHomeAction}
                gameModeLock={
                  activeGamePlatform === 'GUESS'
                    ? 'GUESS'
                    : activeGamePlatform === 'BATTLE_1V1'
                    ? 'BATTLE_1V1'
                    : 'DR_IMPOSTER'
                }
                language={language}
                onSetView={() => {}}
                onGoBack={() => {
                  setPendingHomeAction(null);
                  setCurrentPhase('ENTRY');
                  setActiveGamePlatform('HUB');
                }}
                appUser={appUser}
                onLogin={handleLogin}
                onPhaseChange={setCurrentPhase}
                onShowHelp={() => {
                  if (activeGamePlatform === 'GUESS') setActiveHelpTab('guess');
                  else if (activeGamePlatform === 'BATTLE_1V1') setActiveHelpTab('battle');
                  else setActiveHelpTab('imposter');
                  setShowHelp(true);
                }}
                initialRoomCode={initialRoomCode}
              />
            </React.Suspense>
          </GameLoadBoundary>
        ) : activeGamePlatform === 'DR_IMPOSTER' ? (
          <HomeView
            language={language}
            level={1}
            score={appUser?.detectiveScore ?? guestScore}
            onChoose={(action) => setPendingHomeAction(action)}
            onBackToHub={() => setActiveGamePlatform('HUB')}
            onShowHelp={() => {
              setActiveHelpTab('imposter');
              setShowHelp(true);
            }}
          />
        ) : activeGamePlatform === 'BATTLE_1V1' ? (
          <Battle1v1View
            language={language}
            level={1}
            score={appUser?.detectiveScore ?? guestScore}
            onChoose={(action) => {
              setPendingHomeAction(action === 'offline_duel' ? 'offline' : 'online');
            }}
            onBackToHub={() => setActiveGamePlatform('HUB')}
          />
        ) : (
          <ClinomaGamesHub
            language={language}
            level={1}
            score={appUser?.detectiveScore ?? guestScore}
            onSelectGame={(gameId: SelectedGameId) => {
              if (gameId === 'dr_imposter') {
                setActiveGamePlatform('DR_IMPOSTER');
              } else if (gameId === 'battle_1v1') {
                setActiveGamePlatform('BATTLE_1V1');
              } else if (gameId === 'guess') {
                setActiveGamePlatform('GUESS');
                setPendingHomeAction('solo');
              }
            }}
            onOpenRanking={() => {
              setPendingHomeAction('ranking');
            }}
          />
        )}
      </main>

      {/* ================= OPTIONS OVERFLOW MENU SHEET ================= */}
      <Sheet open={!!appNotice} onClose={() => setAppNotice('')} title={ar ? 'تعذر إكمال العملية' : 'Could not complete the action'} dir={ar ? 'rtl' : 'ltr'}
        footer={<BigBtn onClick={() => setAppNotice('')}>{ar ? 'حسنًا' : 'OK'}</BigBtn>}>
        <p role="alert" className="text-base leading-relaxed">{appNotice}</p>
      </Sheet>
      <Sheet
        open={showOptionsMenu}
        onClose={() => setShowOptionsMenu(false)}
        title={ar ? 'إعدادات وخيارات' : 'Options & Settings'}
        dir={ar ? 'rtl' : 'ltr'}
      >
        <div className="space-y-2.5 py-1">
          <button type="button" onClick={handleSync} disabled={isSyncing}
            className="w-full min-h-[54px] px-4 py-3 rounded-2xl bg-ink-3 border border-ink-4 text-start flex items-center gap-3 font-display font-bold">
            <Globe size={20} className="text-mint" />
            <span>{isSyncing ? (ar ? 'جارٍ التحديث...' : 'Syncing...') : (ar ? 'تحديث البيانات ومزامنة النقاط' : 'Update data & sync scores')}
              <small className="block text-white/70 font-normal">{ar ? 'اللعب مجاني ومحلي؛ الاتصال عند الطلب' : 'Free local play; connect only when needed'}</small>
            </span>
          </button>
          {/* Sound & Haptics toggle */}
          <button
            type="button"
            onClick={() => {
              const next = !soundOn;
              setSoundOn(next);
              sfx.setOn(next);
            }}
            className="w-full min-h-[54px] px-4 rounded-2xl bg-ink-3/80 hover:bg-ink-3 border border-ink-4 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-3">
              <span className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${soundOn ? 'bg-mint/15 text-mint' : 'bg-white/10 text-white/70'}`}>
                {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
              </span>
              <div className="text-start">
                <span className="font-display font-bold text-sm sm:text-base text-white block leading-tight">
                  {ar ? 'المؤثرات الصوتية والاهتزاز' : 'Sound & Vibration'}
                </span>
                <span className="text-[0.8125rem] font-semibold text-white/70 block">
                  {soundOn ? (ar ? 'مفعلة ✓' : 'Enabled ✓') : (ar ? 'مكتومة' : 'Muted')}
                </span>
              </div>
            </div>
            <div className={`w-11 h-6 rounded-full relative transition-colors ${soundOn ? 'bg-mint' : 'bg-white/20'}`}>
              <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${soundOn ? 'start-5.5' : 'start-0.5'}`} />
            </div>
          </button>

          {/* Language Switch */}
          <button
            type="button"
            onClick={() => setLanguage(prev => prev === 'Arabic' ? 'English' : 'Arabic')}
            className="w-full min-h-[54px] px-4 rounded-2xl bg-ink-3/80 hover:bg-ink-3 border border-ink-4 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                <Globe size={18} />
              </span>
              <div className="text-start">
                <span className="font-display font-bold text-sm sm:text-base text-white block leading-tight">
                  {ar ? 'لغة التطبيق' : 'Language'}
                </span>
                <span className="text-[0.8125rem] font-semibold text-white/70 block">
                  {language === 'Arabic' ? 'العربية' : 'English'}
                </span>
              </div>
            </div>
            <span className="px-3 py-1 rounded-xl bg-white/10 text-white/90 text-xs font-bold font-display border border-white/10">
              {language === 'Arabic' ? 'English' : 'العربية'}
            </span>
          </button>

          {/* How to Play & Rules */}
          <button
            type="button"
            onClick={() => {
              setShowOptionsMenu(false);
              setActiveHelpTab(activeGamePlatform === 'BATTLE_1V1' ? 'battle' : activeGamePlatform === 'DR_IMPOSTER' ? 'imposter' : 'guess');
              setShowHelp(true);
            }}
            className="w-full min-h-[54px] px-4 rounded-2xl bg-ink-3/80 hover:bg-ink-3 border border-ink-4 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-pop/15 text-pop flex items-center justify-center shrink-0">
                <HelpCircle size={18} />
              </span>
              <div className="text-start">
                <span className="font-display font-bold text-sm sm:text-base text-white block leading-tight">
                  {ar ? 'طريقة وقواعد اللعب' : 'How to Play & Rules'}
                </span>
                <span className="text-[0.8125rem] font-semibold text-white/70 block">
                  {ar ? 'دليل الأنماط الفردية والجماعية' : 'Solo & party mode guide'}
                </span>
              </div>
            </div>
            <ChevronRight size={18} className="text-white/70 rtl:rotate-180 shrink-0" />
          </button>

          {/* Verified Platform Admin (Owner only) */}
          {isOwnerAdmin(appUser) && (
            <button
              type="button"
                onClick={() => {
                setShowOptionsMenu(false);
                setShowAdminPanel(true);
              }}
              className="w-full min-h-[54px] px-4 rounded-2xl bg-gradient-to-r from-gold/15 to-amber-500/10 hover:from-gold/20 hover:to-amber-500/15 border border-gold/45 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all shadow-[0_0_15px_rgba(255,197,61,0.15)]"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-gold/20 text-gold flex items-center justify-center shrink-0">
                  <Crown size={18} />
                </span>
                <div className="text-start">
                  <span className="font-display font-bold text-sm sm:text-base text-gold block leading-tight">
                    {ar ? 'إدارة المنصة (Clinoma Admin)' : 'Platform Management'}
                  </span>
                  <span className="text-[0.8125rem] font-semibold text-gold block">
                    {ar ? 'الإعلانات والتحكم والحسابات' : 'Ads, campaigns & users'}
                  </span>
                </div>
              </div>
              <span className="text-[0.8125rem] font-black text-gold bg-gold/20 px-2.5 py-0.5 rounded-full border border-gold/40">
                OWNER 👑
              </span>
            </button>
          )}

          {!appUser && <button type="button" onClick={handleLogin} disabled={isLoggingIn}
            className="w-full min-h-[54px] px-4 py-3 rounded-2xl bg-ink-3 border border-ink-4 text-start flex items-center gap-3 font-display font-bold">
            <LogIn size={20} className="text-gold" />{ar ? 'دخول وحفظ النقاط' : 'Sign in & save scores'}
          </button>}
          {/* Account Settings Shortcut (if logged in) */}
          {appUser && (
            <button
              type="button"
                onClick={() => {
                setShowOptionsMenu(false);
                setTempDisplayName(appUser.displayName || appUser.email.split('@')[0]);
                setShowAccountSettings(true);
              }}
              className="w-full min-h-[54px] px-4 rounded-2xl bg-ink-3/80 hover:bg-ink-3 border border-ink-4 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-mint/15 text-mint flex items-center justify-center shrink-0 font-display font-bold text-base">
                  {(appUser.displayName || appUser.email)[0]?.toUpperCase()}
                </span>
                <div className="text-start">
                  <span className="font-display font-bold text-sm sm:text-base text-white block leading-tight truncate">
                    {appUser.displayName || (ar ? 'طبيب لاعب' : 'Doctor')}
                  </span>
                  <span className="text-[0.8125rem] font-semibold text-mint block">
                    {ar ? 'الملف الطبي والرتبة' : 'Medical Profile & Rank'}
                  </span>
                </div>
              </div>
              <ChevronRight size={18} className="text-white/70 rtl:rotate-180 shrink-0" />
            </button>
          )}

          <button type="button" role="switch" aria-checked={largeText} onClick={() => setLargeText(v => !v)}
            className="w-full min-h-[54px] px-4 py-3 rounded-2xl bg-ink-3 border border-ink-4 flex items-center justify-between gap-3 text-start">
            <span className="font-display font-bold">{ar ? 'نص أكبر' : 'Larger text'}</span>
            <span className="text-mint font-bold">{largeText ? (ar ? 'مفعّل' : 'On') : (ar ? 'متوقف' : 'Off')}</span>
          </button>
          {/* App Version / Brand Footer */}
          <div className="pt-2 pb-1 text-center">
            <p className="text-[0.8125rem] font-semibold text-white/70">
              Clinoma Games · ألعاب كلينوما السريرية
            </p>
          </div>
        </div>
      </Sheet>

      {/* ================= HELP SHEET ================= */}
      <Sheet open={showHelp} onClose={() => setShowHelp(false)} title={ar ?'طريقة وقواعد اللعب' :'How to Play & Rules'} dir={ar ?'rtl' :'ltr'}>
        <div className="grid grid-cols-3 gap-2 pb-3">
          {([
            { id:'guess', ar:'خَمّن', en:'Guess', icon: <Brain size={18} /> },
            { id:'battle', ar:'مبارزة', en:'1 vs 1', icon: <Swords size={18} /> },
            { id:'imposter', ar:'المنتحل', en:'Imposter', icon: <ShieldAlert size={18} /> },
          ] as const).map(t => (
            <button
              key={t.id}
              type="button"
              aria-pressed={activeHelpTab === t.id}
              onClick={() => setActiveHelpTab(t.id)}
              className={`min-h-[56px] rounded-2xl border flex flex-col items-center justify-center transition-all active:scale-95 px-1 ${
                activeHelpTab === t.id
                  ?'bg-mint/15 border-mint text-mint'
                  :'bg-ink-3/60 border-ink-4 text-white/70'
              }`}
            >
              <span className="leading-none">{t.icon}</span>
              <span className={`text-[0.8125rem] font-display font-bold mt-1 text-center break-words w-full ${activeHelpTab === t.id ? 'underline underline-offset-4' : ''}`}>{ar ? t.ar : t.en}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeHelpTab}
            initial={{ opacity: 0, x: ar ? -14 : 14 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: ar ? 14 : -14 }}
            transition={{ duration: 0.16 }}
            className="space-y-2.5"
          >
            {activeHelpTab === 'guess' && (
              <>
                <HelpRule icon={<Check size={20} className="text-mint" />} ar="اقرأ التلميح واختر التشخيص من 5 إجابات." en="Read the clue and choose one of 5 diagnoses." arLang={ar} />
                <HelpRule icon={<Check size={20} className="text-mint" />} ar="اطلب تلميحًا إضافيًا مقابل مكافأة أقل." en="More clues reduce the round reward." arLang={ar} />
                <HelpRule icon={<Check size={20} className="text-mint" />} ar="راجع بطاقة الحالة بعد الإجابة." en="Review the case after answering." arLang={ar} />
</>
            )}
            {activeHelpTab === 'battle' && (
              <>
                <HelpRule icon={<Check size={20} className="text-mint" />} ar="كل لاعب له كرت سري مختلف." en="Each player has a different secret card." arLang={ar} />
                <HelpRule icon={<Check size={20} className="text-mint" />} ar="تبادلا الأسئلة لتحديد كرت الخصم." en="Take turns asking about your opponent’s card." arLang={ar} />
                <HelpRule icon={<Check size={20} className="text-mint" />} ar="خمّن التشخيص عندما تكون مستعدًا." en="Guess their diagnosis when you’re ready." arLang={ar} />
</>
            )}
            {activeHelpTab === 'imposter' && (
              <>
                <HelpRule icon={<Check size={20} className="text-mint" />} ar="اكشف كرتك ثم أخفِه وسلّم الهاتف." en="Reveal your card, then hide it and pass the phone." arLang={ar} />
                <HelpRule icon={<Check size={20} className="text-mint" />} ar="اسأل دون أن تكشف الكلمة السرية." en="Ask questions without revealing the secret word." arLang={ar} />
                <HelpRule icon={<Check size={20} className="text-mint" />} ar="صوّت للمنتَحل، ثم اترك له فرصته الأخيرة." en="Vote for the imposter, then allow their final guess." arLang={ar} />
</>
            )}
          </motion.div>
        </AnimatePresence>

        {/* sound toggle */}
        <button
          type="button"
          onClick={() => {
            const next = !soundOn;
            setSoundOn(next);
            sfx.setOn(next);
          }}
          className="w-full min-h-[52px] mt-4 mb-2 rounded-2xl bg-ink-3/70 border border-ink-4 flex items-center justify-between px-4 active:scale-[0.98] transition-transform"
        >
          <span className="flex items-center gap-2.5 font-display font-bold text-white/80 text-sm">
            <span className="flex items-center">{soundOn ? <Volume2 size={20} className="text-mint" /> : <VolumeX size={20} className="text-white/70" />}</span>
            {ar ?'المؤثرات الصوتية والاهتزاز' :'Sound & vibration'}
          </span>
          <span className={`w-12 h-7 rounded-full relative transition-colors ${soundOn ?'bg-mint' :'bg-white/15'}`}>
            <span className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all ${soundOn ?'start-6' :'start-1'}`} />
          </span>
        </button>

        <div className="pt-1 pb-2">
          <BigBtn onClick={() => setShowHelp(false)}>{ar ?'يلا نلعب!' :"Let's play!"}</BigBtn>
        </div>
      </Sheet>

      {/* ================= ACCOUNT SHEET ================= */}
      <Sheet
        open={showAccountSettings && !!appUser}
        onClose={() => setShowAccountSettings(false)}
        title={ar ?'حسابي' :'My Account'}
        dir={ar ?'rtl' :'ltr'}
        footer={
          <div className="flex gap-2 py-3">
            <button
              type="button"
              onClick={() => setShowAccountSettings(false)}
              className="flex-1 min-h-[48px] rounded-2xl bg-ink-3 border border-ink-4 text-white/80 font-display font-bold active:scale-95 transition-transform"
            >
              {ar ?'إغلاق' :'Close'}
            </button>
            <button
              type="button"
              onClick={handleLogout}
              className="px-5 min-h-[48px] rounded-2xl bg-coral/10 border border-coral/30 text-coral font-display font-bold flex items-center gap-1.5 active:scale-95 transition-transform"
            >
              <LogOut size={16} />
              {ar ?'خروج' :'Sign Out'}
            </button>
          </div>
        }
      >
        {appUser && <AccountDetails user={appUser} language={language} name={tempDisplayName} onNameChange={setTempDisplayName}
          saving={isSavingName} saved={saveSuccess} onSave={handleSaveName}
          onEditProfile={() => {
            const updated = { ...appUser };
            delete updated.academicLevel;
            delete updated.university;
            delete updated.academicYear;
            setAppUser(updated);
            setShowAccountSettings(false);
          }}
          onAdmin={isOwnerAdmin(appUser) ? () => { setShowAdminPanel(true); setShowAccountSettings(false); } : undefined}
        />}
      </Sheet>

      {/* ================= ANNOUNCEMENT OVERLAY ================= */}
      <AnimatePresence>
        {activeAnnouncement && (
          <ModalFrame open={!!activeAnnouncement} onClose={handleDismissAnnouncement} title={activeAnnouncement.title} dir={ar ? 'rtl' : 'ltr'} className="flex items-center justify-center p-5">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={handleDismissAnnouncement}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ type:'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-sm bg-ink-2 border border-gold/40 rounded-3xl max-h-[90dvh] overflow-y-auto shadow-[0_0_50px_rgba(255,197,61,0.2)] flex flex-col gap-4 text-center"
              dir={ar ?'rtl' :'ltr'}
            >
              <div className="h-1.5 bg-gradient-to-r from-gold via-amber-300 to-gold animate-pulse" />
              <div className="px-5 pt-2 space-y-1">
                <div className="flex items-center gap-2 justify-center text-gold">
                  <Sparkles size={16} />
                  <span className="text-[0.8125rem] font-black uppercase tracking-widest">{ar ?'بث من كلينوما' :'CLINOMA BROADCAST'}</span>
                </div>
                <h3 className="font-display font-bold text-xl text-white">{activeAnnouncement.title}</h3>
              </div>

              <div className="mx-5 flex flex-col items-center gap-3 bg-ink-3/60 p-3.5 rounded-2xl border border-white/5">
                {activeAnnouncement.imageUrl && (
                  <img
                    src={activeAnnouncement.imageUrl}
                    referrerPolicy="no-referrer"
                    alt="broadcast-art"
                    className="w-20 h-20 rounded-2xl object-cover border border-white/10"
                    onError={(e) => { (e.target as HTMLImageElement).src ='logo.jpg'; }}
                  />
                )}
                <p className="text-white/90 text-sm font-bold leading-relaxed whitespace-pre-line">{activeAnnouncement.message}</p>
              </div>

              <div className="px-5 pb-5 flex items-center justify-between gap-3">
                <span className="flex items-center gap-1.5 px-3 h-8 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-display font-bold">
                  <Timer size={13} />
                  {(() => {
                    const m = Math.floor(remainingTime / 60);
                    const s = remainingTime % 60;
                    return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
                  })()}
                </span>
                <button
                  type="button"
                  onClick={handleDismissAnnouncement}
                  className="px-6 h-11 rounded-2xl bg-gold text-amber-950 font-display font-bold active:scale-95 transition-transform"
                >
                  {ar ?'تمام' :'Got it'}
                </button>
              </div>
            </motion.div>
          </ModalFrame>
        )}
      </AnimatePresence>

      {/* ================= FULL PLATFORM MANAGEMENT HUB (CLINOMA ADMIN) ================= */}
      {showAdminPanel && isOwnerAdmin(appUser) && (
        <div className="fixed inset-0 z-[200] bg-ink-1 overflow-y-auto">
          <AdminPlatformHub
            user={appUser}
            onGoogleLogin={handleLogin}
            onBackToApp={() => setShowAdminPanel(false)}
          />
        </div>
      )}
    </div>
  );
}

/* ---------- small helpers ---------- */

const HelpRule: React.FC<{ icon: React.ReactNode; ar: string; en: string; arLang: boolean }> = ({ icon, ar, en, arLang }) => (
  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-ink-3/70 border border-ink-4">
    <span className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">{icon}</span>
    <p className="text-sm font-semibold text-white/90 leading-relaxed">{arLang ? ar : en}</p>
  </div>
);


