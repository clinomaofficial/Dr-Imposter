import React, { useState, useEffect, useMemo } from 'react';
import {
  ShieldCheck, LayoutDashboard, Users, Sliders, Megaphone,
  Gamepad2, ArrowLeft, RefreshCw, Search, CheckCircle2,
  AlertCircle, Lock, Crown, UserCheck, UserX, Award,
  Sparkles, Trash2, Clock, Globe, Zap, Timer, Flame, ChevronRight, Activity, Plus, Minus,
  Tv, Mail, ExternalLink, MousePointerClick, Eye, Send, Check, Copy, ToggleLeft, ToggleRight
} from 'lucide-react';
import { db } from '../../firebase';
import {
  collection, doc, getDocs, setDoc, updateDoc,
  deleteDoc, onSnapshot, query, orderBy, limit, where
} from 'firebase/firestore';
import { AppUser } from '../../types';
import { AdCampaign, AdPlacement } from '../../types/ads';
import { AdminGuard } from './AdminGuard';

interface AdminPlatformHubProps {
  user: AppUser | null;
  onGoogleLogin?: () => void;
  onBackToApp: () => void;
}

type AdminTab = 'overview' | 'users' | 'ads' | 'game_config' | 'announcements' | 'rooms';

export function AdminPlatformHub({ user, onGoogleLogin, onBackToApp }: AdminPlatformHubProps) {
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');
  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Data states
  const [usersList, setUsersList] = useState<any[]>([]);
  const [roomsList, setRoomsList] = useState<any[]>([]);
  const [announcementsList, setAnnouncementsList] = useState<any[]>([]);
  const [adsList, setAdsList] = useState<AdCampaign[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<string>('all');

  // Email modal state
  const [emailModalUser, setEmailModalUser] = useState<any | null>(null);
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');
  const [sendingEmail, setSendingEmail] = useState(false);

  // Ad creation state
  const [showAdModal, setShowAdModal] = useState(false);
  const [adForm, setAdForm] = useState({
    title: '',
    sponsorName: '',
    mediaUrl: '',
    ctaLink: '',
    ctaText: 'معرفة المزيد ↗',
    placement: 'pre_round' as AdPlacement,
    durationSeconds: 5,
    frequencyGames: 1,
    priority: 10,
    isActive: true
  });
  const [savingAd, setSavingAd] = useState(false);

  // Game config live state
  const [gameConfig, setGameConfig] = useState({
    turnTimeLimit: 45,
    questionsPerPlayer: 1,
    maxPlayers: 10,
    speedBonusThreshold: 30,
    speedBonusPoints: 10,
    dailyFeaturedSpecialty: 'All',
    maintenanceMode: false,
    enforceAttemptLimits: false // Free & open play by default
  });
  const [savingConfig, setSavingConfig] = useState(false);

  // New announcement form
  const [newAnnTitle, setNewAnnTitle] = useState('');
  const [newAnnMessage, setNewAnnMessage] = useState('');
  const [newAnnHours, setNewAnnHours] = useState(48);
  const [newAnnImageUrl, setNewAnnImageUrl] = useState('logo.jpg');
  const [sendingAnn, setSendingAnn] = useState(false);

  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setNotice({ text, type });
    setTimeout(() => setNotice(null), 4000);
  };

  // 1. Fetch Users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const q = query(collection(db, 'users'), limit(200));
      const snap = await getDocs(q);
      const list: any[] = [];
      snap.forEach(d => list.push({ id: d.id, ...d.data() }));
      setUsersList(list);
    } catch (err: any) {
      console.error("Error fetching users:", err);
      showToast("تعذر جلب المستخدمين: " + (err.message || 'خطأ غير معروف'), 'error');
    } finally {
      setLoading(false);
    }
  };

  // 2. Real-time Rooms Listener
  useEffect(() => {
    const q = query(collection(db, 'rooms'), limit(50));
    const unsub = onSnapshot(q, (snap) => {
      const list: any[] = [];
      snap.forEach(d => list.push({ id: d.id, ...d.data() }));
      setRoomsList(list);
    }, (err) => console.warn("Rooms listener warning:", err));

    return () => unsub();
  }, []);

  // 3. Real-time Announcements Listener
  useEffect(() => {
    const q = query(collection(db, 'announcements'), orderBy('createdAt', 'desc'), limit(20));
    const unsub = onSnapshot(q, (snap) => {
      const list: any[] = [];
      snap.forEach(d => list.push({ id: d.id, ...d.data() }));
      setAnnouncementsList(list);
    }, (err) => console.warn("Announcements listener warning:", err));

    return () => unsub();
  }, []);

  // 4. Real-time Ads Listener
  useEffect(() => {
    const q = query(collection(db, 'ads'));
    const unsub = onSnapshot(q, (snap) => {
      const list: AdCampaign[] = [];
      snap.forEach(d => list.push({ id: d.id, ...d.data() } as AdCampaign));
      setAdsList(list);
    }, (err) => console.warn("Ads listener warning:", err));

    return () => unsub();
  }, []);

  // 5. Real-time Game Config Listener
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'settings', 'gameConfig'), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setGameConfig(prev => ({ ...prev, ...data }));
      }
    }, (err) => console.warn("Game config listener warning:", err));

    return () => unsub();
  }, []);

  // Initial load
  useEffect(() => {
    fetchUsers();
  }, []);

  // Filtered users list
  const filteredUsers = useMemo(() => {
    return usersList.filter(u => {
      const q = searchQuery.trim().toLowerCase();
      const matchQuery = !q ||
        (u.email && u.email.toLowerCase().includes(q)) ||
        (u.displayName && u.displayName.toLowerCase().includes(q)) ||
        (u.university && u.university.toLowerCase().includes(q));

      if (!matchQuery) return false;

      if (roleFilter === 'all') return true;
      if (roleFilter === 'admin') return u.role === 'admin' || u.role === 'super_admin';
      if (roleFilter === 'subscribed') return u.subscriptionActive === true;
      if (roleFilter === 'blocked') return u.status === 'blocked';
      return true;
    });
  }, [usersList, searchQuery, roleFilter]);

  // Ads Analytics Aggregates
  const totalAdViews = useMemo(() => adsList.reduce((acc, ad) => acc + (ad.impressionsCount || 0), 0), [adsList]);
  const totalAdClicks = useMemo(() => adsList.reduce((acc, ad) => acc + (ad.clicksCount || 0), 0), [adsList]);
  const overallCTR = totalAdViews > 0 ? ((totalAdClicks / totalAdViews) * 100).toFixed(1) : '0.0';

  // Actions on Users
  const handleUpdateUserAttempts = async (userId: string, newAttempts: number) => {
    try {
      await updateDoc(doc(db, 'users', userId), {
        remainingAttempts: newAttempts,
        remainingDetectiveAttempts: newAttempts,
        totalAttempts: Math.max(newAttempts, 100)
      });
      showToast(`تم تعديل محاولات المستخدم بنجاح (${newAttempts})`, 'success');
      fetchUsers();
    } catch (err: any) {
      showToast("فشل التعديل: " + err.message, 'error');
    }
  };

  const handleToggleSubscription = async (userId: string, current: boolean) => {
    try {
      await updateDoc(doc(db, 'users', userId), {
        subscriptionActive: !current
      });
      showToast(!current ? "تم تفعيل الاشتراك الذهبي للمستخدم!" : "تم إلغاء الاشتراك", 'success');
      fetchUsers();
    } catch (err: any) {
      showToast("فشل التعديل: " + err.message, 'error');
    }
  };

  const handleToggleBlock = async (userId: string, currentStatus: string) => {
    try {
      const next = currentStatus === 'blocked' ? 'active' : 'blocked';
      await updateDoc(doc(db, 'users', userId), { status: next });
      showToast(next === 'blocked' ? "تم حظر المستخدم" : "تم إلغاء الحظر", 'info');
      fetchUsers();
    } catch (err: any) {
      showToast("فشل التعديل: " + err.message, 'error');
    }
  };

  const handlePromoteRole = async (userId: string, currentRole: string) => {
    try {
      const nextRole = currentRole === 'admin' ? 'user' : 'admin';
      await updateDoc(doc(db, 'users', userId), { role: nextRole });
      showToast(`تم تغيير الرتبة إلى: ${nextRole}`, 'success');
      fetchUsers();
    } catch (err: any) {
      showToast("فشل التعديل: " + err.message, 'error');
    }
  };

  // Email Dispatcher Handlers
  const openEmailModal = (u: any) => {
    setEmailModalUser(u);
    setEmailSubject(`رسالة من إدارة د. إمبوستر | مرحباً د. ${u.displayName || 'الزميل العزيز'}`);
    setEmailBody(`مرحباً دكتور ${u.displayName || ''}،\n\nنتمنى لك وقتاً ممتعاً وتفوقاً مستمراً في تحديات د. إمبوستر الطبية.\n\nمع تحيات إدارة كلينوما.`);
  };

  const applyEmailTemplate = (templateType: 'welcome' | 'challenge' | 'gift') => {
    if (!emailModalUser) return;
    const name = emailModalUser.displayName || 'دكتور';
    if (templateType === 'welcome') {
      setEmailSubject(`أهلاً بك يا د. ${name} في Clinoma Games`);
      setEmailBody(`عزيزي دكتور ${name}،\n\nيسعدنا انضمامك لألعاب Clinoma Games الطبية! نتمنى لك منافسات ممتعة وتشخيصات دقيقة مع زملائك الأطباء.\n\nفريق كلينوما`);
    } else if (templateType === 'challenge') {
      setEmailSubject(`تحدي الأسبوع الطبي بدأ الآن`);
      setEmailBody(`د. ${name}،\n\nتحدي الحالات السريرية لهذا الأسبوع متاح الآن بنقاط مضاعفة! ادخل الآن واكتشف المنتحل ونافس على المركز الأول.\n\nرابط اللعبة: https://clinoma-games.web.app`);
    } else if (templateType === 'gift') {
      setEmailSubject(`إشعار خاص من إدارة Clinoma Games`);
      setEmailBody(`د. ${name}،\n\nتقديراً لتفاعلك وتفوقك الطبي، تم منح حسابك مزايا إضافية!\n\nبالتوفيق دائماً.`);
    }
  };

  const handleSendEmail = async () => {
    if (!emailModalUser || !emailSubject.trim() || !emailBody.trim()) return;
    setSendingEmail(true);

    try {
      // 1. Log in Firestore /mail collection
      await setDoc(doc(collection(db, 'mail')), {
        to: emailModalUser.email,
        userName: emailModalUser.displayName || '',
        subject: emailSubject.trim(),
        message: emailBody.trim(),
        sentBy: user?.email,
        timestamp: Date.now()
      });

      // 2. Launch mailto link to open Gmail or device email client prefilled
      const mailtoUrl = `mailto:${encodeURIComponent(emailModalUser.email)}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      window.open(mailtoUrl, '_blank');

      showToast(`تم فتح الإيميل وإرسال الرسالة إلى ${emailModalUser.email}`, 'success');
      setEmailModalUser(null);
    } catch (err: any) {
      showToast("تعذر إرسال الإيميل: " + err.message, 'error');
    } finally {
      setSendingEmail(false);
    }
  };

  // Ads Management Handlers
  const handleCreateAd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!adForm.title.trim() || !adForm.mediaUrl.trim()) return;
    setSavingAd(true);
    try {
      const newId = 'ad_' + Date.now();
      await setDoc(doc(db, 'ads', newId), {
        id: newId,
        title: adForm.title.trim(),
        sponsorName: adForm.sponsorName.trim() || 'Clinoma Sponsor',
        mediaType: 'image',
        mediaUrl: adForm.mediaUrl.trim(),
        ctaLink: adForm.ctaLink.trim() || 'https://clinoma.com',
        ctaText: adForm.ctaText.trim() || 'تصفح العرض ↗',
        placement: adForm.placement,
        durationSeconds: Number(adForm.durationSeconds) || 5,
        frequencyGames: Number(adForm.frequencyGames) || 2,
        priority: Number(adForm.priority) || 10,
        isActive: adForm.isActive,
        impressionsCount: 0,
        clicksCount: 0,
        createdAt: Date.now()
      });
      setShowAdModal(false);
      showToast("✅ تم نشر الحملة الإعلانية بنجاح!", 'success');
    } catch (err: any) {
      showToast("فشل إنشاء الإعلان: " + err.message, 'error');
    } finally {
      setSavingAd(false);
    }
  };

  const handleToggleAdStatus = async (ad: AdCampaign) => {
    try {
      await updateDoc(doc(db, 'ads', ad.id), {
        isActive: !ad.isActive
      });
      showToast(!ad.isActive ? "تم تفعيل الإعلان" : "تم إيقاف الإعلان مؤقتاً", 'info');
    } catch (err: any) {
      showToast("فشل التعديل: " + err.message, 'error');
    }
  };

  const handleDeleteAd = async (adId: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا الإعلان نهائياً؟")) return;
    try {
      await deleteDoc(doc(db, 'ads', adId));
      showToast("تم حذف الإعلان", 'info');
    } catch (err: any) {
      showToast("فشل الحذف: " + err.message, 'error');
    }
  };

  // Game Settings Save Handler
  const handleSaveGameConfig = async () => {
    setSavingConfig(true);
    try {
      await setDoc(doc(db, 'settings', 'gameConfig'), {
        ...gameConfig,
        updatedAt: Date.now()
      }, { merge: true });
      showToast("تم حفظ وتطبيق الإعدادات السحابية الحية بنجاح.", 'success');
    } catch (err: any) {
      showToast("فشل حفظ الإعدادات: " + err.message, 'error');
    } finally {
      setSavingConfig(false);
    }
  };

  // Announcement Handlers
  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAnnTitle.trim() || !newAnnMessage.trim()) return;
    setSendingAnn(true);
    try {
      const now = Date.now();
      await setDoc(doc(collection(db, 'announcements')), {
        title: newAnnTitle.trim(),
        message: newAnnMessage.trim(),
        imageUrl: newAnnImageUrl.trim() || 'logo.jpg',
        createdAt: now,
        expiresAt: now + (newAnnHours * 60 * 60 * 1000),
        type: 'info'
      });
      setNewAnnTitle('');
      setNewAnnMessage('');
      showToast("✅ تم بث الإعلان لجميع أجهزة اللاعبين بنجاح!", 'success');
    } catch (err: any) {
      showToast("فشل البث: " + err.message, 'error');
    } finally {
      setSendingAnn(false);
    }
  };

  const handleDeleteAnnouncement = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا الإعلان من شاشات المستخدمين؟")) return;
    try {
      await deleteDoc(doc(db, 'announcements', id));
      showToast("تم حذف الإعلان", 'info');
    } catch (err: any) {
      showToast("فشل الحذف: " + err.message, 'error');
    }
  };

  const handlePurgeStaleRooms = async () => {
    if (!confirm("هل تريد حذف الغرف التي مر عليها أكثر من ساعتين لتنظيف السيرفر؟")) return;
    try {
      const twoHoursAgo = Date.now() - 2 * 60 * 60 * 1000;
      let count = 0;
      for (const r of roomsList) {
        if (!r.createdAt || r.createdAt < twoHoursAgo) {
          await deleteDoc(doc(db, 'rooms', r.id));
          count++;
        }
      }
      showToast(`تم تنظيف وحذف ${count} غرفة قديمة من قاعدة البيانات`, 'success');
    } catch (err: any) {
      showToast("فشل تنظيف الغرف: " + err.message, 'error');
    }
  };

  return (
    <AdminGuard user={user} onGoogleLogin={onGoogleLogin} onBackToApp={onBackToApp}>
      <div className="min-h-screen bg-ink-1 text-white flex flex-col font-sans" dir="rtl">
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-ink-2/95 backdrop-blur-md border-b border-ink-4 px-4 py-3 flex items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToApp}
              className="p-2.5 rounded-xl bg-ink-3 border border-ink-4 text-white/70 hover:text-white active:scale-95 transition-transform"
              title="العودة للتطبيق"
            >
              <ArrowLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-xl bg-gold/15 border border-gold/40 flex items-center justify-center text-gold">
                <Crown size={20} />
              </span>
              <div>
                <h1 className="font-display font-bold text-base sm:text-lg leading-tight flex items-center gap-2">
                  إدارة منصة د. إمبوستر
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30">
                    Clinoma Admin
                  </span>
                </h1>
                <p className="text-[11px] font-bold text-white/40 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                  السيرفر الإنتاجي: Firebase eur3 (Default)
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { fetchUsers(); showToast("تم تحديث البيانات", 'info'); }}
              disabled={loading}
              className="p-2.5 rounded-xl bg-ink-3 border border-ink-4 text-mint hover:bg-mint/10 active:scale-95 transition-transform"
              title="تحديث البيانات"
            >
              <RefreshCw size={17} className={loading ? "animate-spin" : ""} />
            </button>
            <div className="hidden sm:flex flex-col text-left px-3 py-1 bg-ink-3/60 border border-ink-4 rounded-xl">
              <span className="text-[11px] font-bold text-white/90">{user?.displayName || 'المدير العام'}</span>
              <span className="text-[10px] font-mono text-gold truncate max-w-[150px]">Clinoma Owner 👑</span>
            </div>
          </div>
        </header>

        {/* Global Toast Notification */}
        {notice && (
          <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 px-4 py-2.5 rounded-2xl bg-ink-3 border border-gold/40 text-gold shadow-2xl flex items-center gap-2 text-sm font-bold animate-bounce">
            <Sparkles size={16} />
            <span>{notice.text}</span>
          </div>
        )}

        {/* Navigation Tabs Bar */}
        <div className="bg-ink-2/60 border-b border-ink-4 px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 py-2 min-w-max">
            {[
              { id: 'overview', label: 'الرادار ونظرة عامة', icon: LayoutDashboard },
              { id: 'users', label: `الأطباء والمستخدمين (${usersList.length})`, icon: Users },
              { id: 'ads', label: `شبكة الإعلانات (${adsList.length})`, icon: Tv },
              { id: 'game_config', label: 'الإعدادات السحابية الحية', icon: Sliders },
              { id: 'announcements', label: `بث الإعلانات (${announcementsList.length})`, icon: Megaphone },
              { id: 'rooms', label: `غرف اللعب المباشرة (${roomsList.length})`, icon: Gamepad2 },
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as AdminTab)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-display font-bold transition-all active:scale-95 ${
                    isActive
                      ? 'bg-gold/15 text-gold border border-gold/40 shadow-sm'
                      : 'bg-ink-3/50 text-white/50 border border-transparent hover:text-white/80'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content Area */}
        <main className="flex-1 p-4 max-w-6xl w-full mx-auto space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Radar Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-4 rounded-2xl bg-ink-2 border border-ink-4 space-y-1">
                  <div className="flex items-center justify-between text-white/40">
                    <span className="text-xs font-bold">إجمالي الأطباء</span>
                    <Users size={16} className="text-mint" />
                  </div>
                  <p className="font-display font-bold text-2xl text-white">{usersList.length}</p>
                  <span className="text-[10px] font-bold text-mint">مسجلين في المنصة</span>
                </div>

                <div className="p-4 rounded-2xl bg-ink-2 border border-ink-4 space-y-1">
                  <div className="flex items-center justify-between text-white/40">
                    <span className="text-xs font-bold">مشاهدات الإعلانات</span>
                    <Eye size={16} className="text-sky-400" />
                  </div>
                  <p className="font-display font-bold text-2xl text-white">{totalAdViews}</p>
                  <span className="text-[10px] font-bold text-sky-400">نقرات: {totalAdClicks} (CTR: {overallCTR}%)</span>
                </div>

                <div className="p-4 rounded-2xl bg-ink-2 border border-ink-4 space-y-1">
                  <div className="flex items-center justify-between text-white/40">
                    <span className="text-xs font-bold">الغرف النشطة</span>
                    <Gamepad2 size={16} className="text-gold" />
                  </div>
                  <p className="font-display font-bold text-2xl text-white">{roomsList.length}</p>
                  <span className="text-[10px] font-bold text-gold">غرف جماعية مفتوحة</span>
                </div>

                <div className="p-4 rounded-2xl bg-ink-2 border border-ink-4 space-y-1">
                  <div className="flex items-center justify-between text-white/40">
                    <span className="text-xs font-bold">نظام اللعب</span>
                    <Sparkles size={16} className="text-mint" />
                  </div>
                  <p className="font-display font-bold text-2xl text-mint">مجاني 100%</p>
                  <span className="text-[10px] font-bold text-white/40">لعب مفتوح بدون قيود</span>
                </div>
              </div>

              {/* Quick Actions Panel */}
              <div className="p-5 rounded-3xl bg-ink-2 border border-ink-4 space-y-4">
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <Zap size={18} className="text-gold" />
                  إجراءات التحكم السريع بالمنصة
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    onClick={() => setActiveTab('ads')}
                    className="p-4 rounded-2xl bg-ink-3 border border-ink-4 hover:border-gold/40 text-right space-y-1.5 active:scale-95 transition-transform"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold/15 text-gold flex items-center justify-center">
                      <Tv size={18} />
                    </div>
                    <p className="font-display font-bold text-sm text-white">إضافة إعلان راعي جديد</p>
                    <p className="text-[11px] text-white/40">نشر بنر أو إعلان ما بعد اللعبة</p>
                  </button>

                  <button
                    onClick={() => setActiveTab('game_config')}
                    className="p-4 rounded-2xl bg-ink-3 border border-ink-4 hover:border-mint/40 text-right space-y-1.5 active:scale-95 transition-transform"
                  >
                    <div className="w-8 h-8 rounded-lg bg-mint/15 text-mint flex items-center justify-center">
                      <Sliders size={18} />
                    </div>
                    <p className="font-display font-bold text-sm text-white">تعديل مؤقتات اللعب</p>
                    <p className="text-[11px] text-white/40">تغيير وقت الجولة فوراً على كل الأجهزة</p>
                  </button>

                  <button
                    onClick={handlePurgeStaleRooms}
                    className="p-4 rounded-2xl bg-ink-3 border border-ink-4 hover:border-coral/40 text-right space-y-1.5 active:scale-95 transition-transform"
                  >
                    <div className="w-8 h-8 rounded-lg bg-coral/15 text-coral flex items-center justify-center">
                      <Trash2 size={18} />
                    </div>
                    <p className="font-display font-bold text-sm text-white">تنظيف الغرف المهجورة</p>
                    <p className="text-[11px] text-white/40">مسح الغرف القديمة لتفريغ السيرفر</p>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: USERS MANAGER */}
          {activeTab === 'users' && (
            <div className="space-y-4">
              {/* Search and Filters */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search size={18} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/30" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث بالاسم، الإيميل، أو الجامعة..."
                    className="w-full h-11 bg-ink-2 border border-ink-4 rounded-2xl pr-10 pl-4 text-sm font-bold text-white placeholder-white/30 outline-none focus:border-gold/50"
                  />
                </div>
                <div className="flex items-center gap-1.5 bg-ink-2 border border-ink-4 p-1 rounded-2xl">
                  {[
                    { id: 'all', label: 'الكل' },
                    { id: 'admin', label: 'المشرفين' },
                    { id: 'subscribed', label: 'المشتركين' },
                    { id: 'blocked', label: 'المحظورين' }
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setRoleFilter(f.id)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        roleFilter === f.id ? 'bg-gold/15 text-gold border border-gold/30' : 'text-white/50 hover:text-white'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Users List */}
              <div className="space-y-2.5">
                {filteredUsers.length === 0 ? (
                  <div className="p-8 text-center bg-ink-2 border border-ink-4 rounded-2xl text-white/40 font-bold text-sm">
                    لا يوجد أطباء مطابقين لمعايير البحث
                  </div>
                ) : (
                  filteredUsers.map((u: any) => (
                    <div
                      key={u.id}
                      className="p-4 rounded-2xl bg-ink-2 border border-ink-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-ink-3 border border-ink-4 flex items-center justify-center text-lg font-display font-bold text-gold">
                          {u.displayName ? u.displayName.charAt(0).toUpperCase() : 'Dr'}
                        </div>
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-display font-bold text-sm text-white">
                              {u.displayName || 'طبيب مستخدم'}
                            </span>
                            {u.role === 'super_admin' && (
                              <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-gold/15 text-gold border border-gold/30">
                                مالك المنصة
                              </span>
                            )}
                            {u.role === 'admin' && (
                              <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-sky-500/15 text-sky-400 border border-sky-500/30">
                                مشرف
                              </span>
                            )}
                            {u.subscriptionActive && (
                              <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-mint/15 text-mint border border-mint/30">
                                ذهبي مدى الحياة
                              </span>
                            )}
                            {u.status === 'blocked' && (
                              <span className="text-[10px] font-black px-2 py-0.5 rounded-md bg-coral/15 text-coral border border-coral/30">
                                محظور
                              </span>
                            )}
                          </div>
                          <p className="text-xs font-mono text-white/50">{u.email}</p>
                          <div className="flex items-center gap-3 text-[11px] text-white/40 pt-1 font-bold">
                            <span>النقاط: <strong className="text-gold">{u.detectiveScore || 0}</strong></span>
                            <span>المحاولات: <strong className="text-mint">{u.remainingAttempts ?? 99999}</strong></span>
                            {u.university && <span>الجامعة: {u.university}</span>}
                          </div>
                        </div>
                      </div>

                      {/* Quick Action Controls */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <button
                          onClick={() => openEmailModal(u)}
                          className="px-2.5 py-1.5 rounded-xl bg-gold/15 border border-gold/30 text-gold text-xs font-bold hover:bg-gold/25 active:scale-95 transition-all flex items-center gap-1"
                          title="إرسال رسالة بريد إلكتروني"
                        >
                          <Mail size={13} />
                          <span>إرسال إيميل</span>
                        </button>
                        <button
                          onClick={() => handleUpdateUserAttempts(u.id, 99999)}
                          className="px-2.5 py-1.5 rounded-xl bg-mint/10 border border-mint/20 text-mint text-xs font-bold hover:bg-mint/20 active:scale-95 transition-all"
                          title="منح محاولات غير محدودة"
                        >
                          +99k محاولات
                        </button>
                        <button
                          onClick={() => handleToggleSubscription(u.id, u.subscriptionActive)}
                          className={`px-2.5 py-1.5 rounded-xl text-xs font-bold active:scale-95 transition-all ${
                            u.subscriptionActive
                              ? 'bg-ink-3 border border-ink-4 text-white/50'
                              : 'bg-gold/15 border border-gold/30 text-gold'
                          }`}
                        >
                          {u.subscriptionActive ? 'إلغاء الاشتراك' : 'تفعيل اشتراك ذهبي'}
                        </button>
                        <button
                          onClick={() => handlePromoteRole(u.id, u.role)}
                          className="px-2.5 py-1.5 rounded-xl bg-ink-3 border border-ink-4 text-sky-400 text-xs font-bold hover:bg-sky-500/10 active:scale-95 transition-all"
                        >
                          {u.role === 'admin' ? 'تنزيل لمستخدم' : 'ترقية لمشرف'}
                        </button>
                        <button
                          onClick={() => handleToggleBlock(u.id, u.status)}
                          className={`px-2.5 py-1.5 rounded-xl text-xs font-bold active:scale-95 transition-all ${
                            u.status === 'blocked'
                              ? 'bg-mint/15 text-mint border border-mint/30'
                              : 'bg-coral/15 text-coral border border-coral/30'
                          }`}
                        >
                          {u.status === 'blocked' ? 'فك الحظر' : 'حظر'}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 3: ADS HUB (In-App Ad Network) */}
          {activeTab === 'ads' && (
            <div className="space-y-6">
              {/* Top Banner & Stats */}
              <div className="p-5 rounded-3xl bg-ink-2 border border-ink-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                    <Tv size={20} className="text-gold" />
                    شبكة إعلانات الرعاة والمراكز الطبية
                  </h3>
                  <p className="text-xs text-white/50">
                    مصدر دخل اللعبة الأساسي: التحكم في البانرات وشاشات ما بعد اللعبة وروابط الواتساب والمواقع الطبية.
                  </p>
                </div>
                <button
                  onClick={() => setShowAdModal(true)}
                  className="px-4 py-2.5 rounded-2xl bg-gold text-amber-950 font-display font-bold text-xs flex items-center gap-1.5 active:scale-95 transition-all shadow-md self-start sm:self-auto shrink-0"
                >
                  <Plus size={16} />
                  <span>إنشاء حملة إعلانية جديدة</span>
                </button>
              </div>

              {/* Ads Metrics Summary */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-ink-2 border border-ink-4 text-center space-y-1">
                  <span className="text-xs text-white/40 font-bold">إجمالي المشاهدات</span>
                  <p className="font-display font-bold text-2xl text-sky-400">{totalAdViews}</p>
                </div>
                <div className="p-4 rounded-2xl bg-ink-2 border border-ink-4 text-center space-y-1">
                  <span className="text-xs text-white/40 font-bold">إجمالي النقرات</span>
                  <p className="font-display font-bold text-2xl text-mint">{totalAdClicks}</p>
                </div>
                <div className="p-4 rounded-2xl bg-ink-2 border border-ink-4 text-center space-y-1">
                  <span className="text-xs text-white/40 font-bold">معدل التحويل (CTR)</span>
                  <p className="font-display font-bold text-2xl text-gold">{overallCTR}%</p>
                </div>
              </div>

              {/* Campaigns List */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-sm text-white/70">الحملات الإعلانية الحالية ({adsList.length})</h4>
                {adsList.length === 0 ? (
                  <p className="text-xs text-white/40">لا توجد إعلانات بعد</p>
                ) : (
                  adsList.map(ad => (
                    <div
                      key={ad.id}
                      className="p-4 rounded-2xl bg-ink-2 border border-ink-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3.5 min-w-0">
                        <div className="w-16 h-16 rounded-2xl bg-ink-3 border border-white/10 overflow-hidden shrink-0">
                          <img
                            src={ad.mediaUrl}
                            alt="ad-art"
                            className="w-full h-full object-cover"
                            onError={(e) => { (e.target as HTMLImageElement).src = 'logo.jpg'; }}
                          />
                        </div>
                        <div className="space-y-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <h5 className="font-display font-bold text-sm text-white truncate">{ad.title}</h5>
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                              ad.isActive
                                ? 'bg-mint/15 text-mint border-mint/30'
                                : 'bg-white/10 text-white/40 border-white/20'
                            }`}>
                              {ad.isActive ? 'نشط' : 'متوقف'}
                            </span>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
                              {ad.placement === 'pre_round' ? 'قبل بداية الجولة' :
                               ad.placement === 'pre_reveal' ? 'قبل كشف الكلمة السرية' :
                               ad.placement === 'home_banner' ? 'بانر بالرئيسية' : 'شاشة بعد اللعبة'}
                            </span>
                          </div>
                          <p className="text-xs text-gold/80 font-bold">الراعي: {ad.sponsorName}</p>
                          <div className="flex items-center gap-4 text-[11px] text-white/40 font-bold pt-0.5">
                            <span className="flex items-center gap-1"><Eye size={12} /> {ad.impressionsCount || 0} مشاهدة</span>
                            <span className="flex items-center gap-1"><MousePointerClick size={12} /> {ad.clicksCount || 0} نقرة</span>
                            <span className="text-mint font-mono">CTR: {ad.impressionsCount ? (((ad.clicksCount || 0) / ad.impressionsCount) * 100).toFixed(1) : 0}%</span>
                          </div>
                        </div>
                      </div>

                      {/* Ad Action Controls */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => window.open(ad.ctaLink, '_blank')}
                          className="p-2 rounded-xl bg-ink-3 border border-ink-4 text-white/70 hover:text-white"
                          title="تجربة فتح الرابط"
                        >
                          <ExternalLink size={16} />
                        </button>
                        <button
                          onClick={() => handleToggleAdStatus(ad)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold active:scale-95 transition-all ${
                            ad.isActive
                              ? 'bg-ink-3 border border-ink-4 text-white/50'
                              : 'bg-mint/15 border border-mint/30 text-mint'
                          }`}
                        >
                          {ad.isActive ? 'إيقاف مؤقت' : 'تفعيل الحملة'}
                        </button>
                        <button
                          onClick={() => handleDeleteAd(ad.id)}
                          className="p-2 rounded-xl bg-ink-3 border border-ink-4 text-coral hover:bg-coral/10 active:scale-95 transition-transform"
                          title="حذف الإعلان"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 4: LIVE GAME CONFIG */}
          {activeTab === 'game_config' && (
            <div className="p-6 rounded-3xl bg-ink-2 border border-ink-4 space-y-6 max-w-2xl mx-auto">
              <div>
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <Sliders size={20} className="text-gold" />
                  التحكم السحابي الحي بإعدادات اللعبة (Remote Config)
                </h3>
                <p className="text-xs text-white/50 pt-1">
                  تعديل هذه القيم هنا يُحدث قواعد اللعبة لحظياً على كافة هواتف اللاعبين دون الحاجة لإعادة رفع التطبيق.
                </p>
              </div>

              {/* Free & Open Gameplay Strategy Banner */}
              <div className="p-4 rounded-2xl bg-mint/10 border border-mint/30 flex items-center justify-between gap-3">
                <div className="space-y-0.5">
                  <h4 className="font-display font-bold text-sm text-mint">نظام اللعب المفتوح والمجاني للجميع</h4>
                  <p className="text-xs text-white/60">
                    اللعبة مجانية وتعتمد على شبكة إعلانات الرعاة. قفل المحاولات معطل افتراضياً.
                  </p>
                </div>
                <button
                  onClick={() => setGameConfig({ ...gameConfig, enforceAttemptLimits: !gameConfig.enforceAttemptLimits })}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    gameConfig.enforceAttemptLimits
                      ? 'bg-coral/20 text-coral border border-coral/40'
                      : 'bg-mint text-emerald-950 font-black'
                  }`}
                >
                  {gameConfig.enforceAttemptLimits ? 'حصر المحاولات (مفعل)' : 'لعب مفتوح مجاني (نشط 🟢)'}
                </button>
              </div>

              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/70 flex items-center justify-between">
                    <span>مؤقت الإجابة والسؤال (بالثواني)</span>
                    <span className="font-mono text-gold">{gameConfig.turnTimeLimit} ثانية</span>
                  </label>
                  <input
                    type="range"
                    min="15"
                    max="120"
                    step="5"
                    value={gameConfig.turnTimeLimit}
                    onChange={(e) => setGameConfig({ ...gameConfig, turnTimeLimit: Number(e.target.value) })}
                    className="w-full accent-gold cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/70 flex items-center justify-between">
                    <span>عدد أسئلة الاستجواب لكل لاعب في الجولة</span>
                    <span className="font-mono text-gold">{gameConfig.questionsPerPlayer} أسئلة</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={gameConfig.questionsPerPlayer}
                    onChange={(e) => setGameConfig({ ...gameConfig, questionsPerPlayer: Number(e.target.value) })}
                    className="w-full accent-gold cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/70">حد بونص السرعة (ثواني متبقية)</label>
                    <input
                      type="number"
                      value={gameConfig.speedBonusThreshold}
                      onChange={(e) => setGameConfig({ ...gameConfig, speedBonusThreshold: Number(e.target.value) })}
                      className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/70">نقاط بونص السرعة</label>
                    <input
                      type="number"
                      value={gameConfig.speedBonusPoints}
                      onChange={(e) => setGameConfig({ ...gameConfig, speedBonusPoints: Number(e.target.value) })}
                      className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/70">التخصص المميز اليومي</label>
                  <select
                    value={gameConfig.dailyFeaturedSpecialty}
                    onChange={(e) => setGameConfig({ ...gameConfig, dailyFeaturedSpecialty: e.target.value })}
                    className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                  >
                    <option value="All">جميع التخصصات (شامل)</option>
                    <option value="Cardiology">أمراض القلب (Cardiology)</option>
                    <option value="Endocrine">الغدد والصماء (Endocrine)</option>
                    <option value="Neurology">المخ والأعصاب (Neurology)</option>
                    <option value="Toxicology">السموم والطب الشرعي (Forensic/Toxicology)</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleSaveGameConfig}
                disabled={savingConfig}
                className="w-full h-12 rounded-2xl bg-gold text-amber-950 font-display font-bold text-sm flex items-center justify-center gap-2 hover:bg-gold/90 active:scale-95 transition-all shadow-lg"
              >
                <Zap size={18} />
                {savingConfig ? 'جاري التطبيق السحابي...' : 'حفظ وتطبيق فوراً على كافة الهواتف'}
              </button>
            </div>
          )}

          {/* TAB 5: ANNOUNCEMENTS */}
          {activeTab === 'announcements' && (
            <div className="space-y-6">
              {/* Send Announcement Form */}
              <form onSubmit={handleCreateAnnouncement} className="p-6 rounded-3xl bg-ink-2 border border-ink-4 space-y-4 max-w-xl mx-auto">
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                  <Megaphone size={20} className="text-gold" />
                  بث إعلان جديد لجميع اللاعبين
                </h3>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/70">عنوان الإعلان</label>
                  <input
                    type="text"
                    required
                    value={newAnnTitle}
                    onChange={(e) => setNewAnnTitle(e.target.value)}
                    placeholder="مثال: بطولة د. إمبوستر الأسبوعية بدأت الآن!"
                    className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/70">نص الرسالة</label>
                  <textarea
                    required
                    rows={3}
                    value={newAnnMessage}
                    onChange={(e) => setNewAnnMessage(e.target.value)}
                    placeholder="اكتب التنبيه الذي سيظهر في أعلى شاشة جميع الأطباء..."
                    className="w-full bg-ink-3 border border-ink-4 rounded-xl p-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/70">مدة الظهور (بالساعات)</label>
                    <input
                      type="number"
                      min="1"
                      max="168"
                      value={newAnnHours}
                      onChange={(e) => setNewAnnHours(Number(e.target.value))}
                      className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-white/70">رابط صورة البانر (اختياري)</label>
                    <input
                      type="text"
                      value={newAnnImageUrl}
                      onChange={(e) => setNewAnnImageUrl(e.target.value)}
                      placeholder="logo.jpg"
                      className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={sendingAnn}
                  className="w-full h-11 rounded-xl bg-gold text-amber-950 font-display font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-md"
                >
                  <Sparkles size={16} />
                  {sendingAnn ? 'جاري البث...' : 'بث الإعلان الآن'}
                </button>
              </form>

              {/* Announcements History */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-sm text-white/70">الإعلانات السابقة والنشطة</h4>
                {announcementsList.length === 0 ? (
                  <p className="text-xs text-white/40">لا توجد إعلانات سابقة</p>
                ) : (
                  announcementsList.map(ann => (
                    <div
                      key={ann.id}
                      className="p-4 rounded-2xl bg-ink-2 border border-ink-4 flex items-center justify-between gap-3"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h5 className="font-display font-bold text-sm text-white">{ann.title}</h5>
                          {ann.expiresAt && ann.expiresAt > Date.now() ? (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-mint/15 text-mint border border-mint/30">
                              نشط حالياً
                            </span>
                          ) : (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-white/10 text-white/40">
                              منتهي
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-white/60 line-clamp-2">{ann.message}</p>
                      </div>

                      <button
                        onClick={() => handleDeleteAnnouncement(ann.id)}
                        className="p-2 rounded-xl bg-ink-3 border border-ink-4 text-coral hover:bg-coral/10 active:scale-95 transition-transform"
                        title="حذف الإعلان"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}

          {/* TAB 6: ROOMS MONITOR */}
          {activeTab === 'rooms' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white">
                    مراقبة غرف اللعب الجماعي المباشرة ({roomsList.length})
                  </h3>
                  <p className="text-xs text-white/40">قائمة لحظية بجميع الغرف المفتوحة وقيد التشغيل في Firestore</p>
                </div>
                <button
                  onClick={handlePurgeStaleRooms}
                  className="px-3 py-2 rounded-xl bg-coral/15 border border-coral/30 text-coral text-xs font-bold flex items-center gap-1.5 active:scale-95 transition-all"
                >
                  <Trash2 size={15} />
                  تنظيف الغرف المهجورة
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {roomsList.length === 0 ? (
                  <div className="col-span-full p-8 text-center bg-ink-2 border border-ink-4 rounded-2xl text-white/40 font-bold text-sm">
                    لا توجد غرف مفتوحة حالياً
                  </div>
                ) : (
                  roomsList.map(r => (
                    <div key={r.id} className="p-4 rounded-2xl bg-ink-2 border border-ink-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono font-bold text-xl text-gold tracking-widest">{r.id}</span>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-full border ${
                          r.status === 'LOBBY'
                            ? 'bg-sky-500/15 text-sky-400 border-sky-500/30'
                            : 'bg-mint/15 text-mint border-mint/30'
                        }`}>
                          {r.status}
                        </span>
                      </div>

                      <div className="text-xs text-white/60 space-y-1">
                        <p>اللاعبين: <strong>{r.players?.length || 0} / {r.maxPlayers || 4}</strong></p>
                        <p>التخصص: <strong>{r.specialty || 'All'}</strong></p>
                        <p className="text-[11px] text-white/40">
                          {r.createdAt ? new Date(r.createdAt).toLocaleTimeString('ar-EG') : 'بدون وقت'}
                        </p>
                      </div>

                      <button
                        onClick={async () => {
                          if (confirm(`هل تريد إغلاق وحذف الغرفة ${r.id}؟`)) {
                            await deleteDoc(doc(db, 'rooms', r.id));
                            showToast(`تم حذف الغرفة ${r.id}`, 'info');
                          }
                        }}
                        className="w-full py-1.5 rounded-xl bg-ink-3 border border-ink-4 hover:border-coral/40 text-coral text-xs font-bold flex items-center justify-center gap-1 active:scale-95 transition-transform"
                      >
                        <Trash2 size={13} />
                        إغلاق الغرفة قسراً
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </main>

        {/* ================= EMAIL DISPATCHER MODAL ================= */}
        {emailModalUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" dir="rtl">
            <div className="w-full max-w-lg bg-ink-2 border border-gold/40 rounded-3xl p-6 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-gold/15 text-gold flex items-center justify-center">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">إرسال بريد إلكتروني لطبيب</h4>
                    <p className="text-xs text-white/50">{emailModalUser.displayName || 'طبيب'} ({emailModalUser.email})</p>
                  </div>
                </div>
                <button
                  onClick={() => setEmailModalUser(null)}
                  className="p-1.5 rounded-xl bg-ink-3 border border-ink-4 text-white/50 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Quick Template Buttons */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white/60">قوالب سريعة بنقرة واحدة:</label>
                <div className="flex items-center gap-2 flex-wrap">
                  <button
                    type="button"
                    onClick={() => applyEmailTemplate('welcome')}
                    className="px-2.5 py-1 rounded-xl bg-ink-3 border border-ink-4 text-xs font-bold text-mint hover:bg-mint/10"
                  >
                    ترحيب بالطبيب
                  </button>
                  <button
                    type="button"
                    onClick={() => applyEmailTemplate('challenge')}
                    className="px-2.5 py-1 rounded-xl bg-ink-3 border border-ink-4 text-xs font-bold text-gold hover:bg-gold/10"
                  >
                    دعوة لتحدي الأسبوع
                  </button>
                  <button
                    type="button"
                    onClick={() => applyEmailTemplate('gift')}
                    className="px-2.5 py-1 rounded-xl bg-ink-3 border border-ink-4 text-xs font-bold text-sky-400 hover:bg-sky-500/10"
                  >
                    هدية نقاط ومحاولات
                  </button>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-white/70">عنوان الرسالة (Subject):</label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                />
              </div>

              {/* Message Body */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-white/70">نص الرسالة:</label>
                <textarea
                  rows={5}
                  value={emailBody}
                  onChange={(e) => setEmailBody(e.target.value)}
                  className="w-full bg-ink-3 border border-ink-4 rounded-xl p-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                />
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendEmail}
                  disabled={sendingEmail}
                  className="flex-1 h-12 rounded-2xl bg-gold text-amber-950 font-display font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg"
                >
                  <Send size={16} />
                  <span>فتح في تطبيق الإيميل والإرسال</span>
                </button>
                <button
                  type="button"
                  onClick={() => setEmailModalUser(null)}
                  className="px-5 h-12 rounded-2xl bg-ink-3 border border-ink-4 text-white/60 font-bold text-sm"
                >
                  إلغاء
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= CREATE AD CAMPAIGN MODAL ================= */}
        {showAdModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" dir="rtl">
            <form onSubmit={handleCreateAd} className="w-full max-w-lg bg-ink-2 border border-gold/40 rounded-3xl p-6 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-gold/15 text-gold flex items-center justify-center">
                    <Tv size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">إنشاء حملة إعلانية جديدة للراعي</h4>
                    <p className="text-xs text-white/50">تظهر للاعبين المجانيين لدعم تشغيل المنصة</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAdModal(false)}
                  className="p-1.5 rounded-xl bg-ink-3 border border-ink-4 text-white/50 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-white/70">عنوان الإعلان:</label>
                <input
                  type="text"
                  required
                  value={adForm.title}
                  onChange={(e) => setAdForm({ ...adForm, title: e.target.value })}
                  placeholder="مثال: خصم 40% على مراجع التحاليل والطب الشرعي 📚"
                  className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/70">اسم الراعي / المعلن:</label>
                  <input
                    type="text"
                    required
                    value={adForm.sponsorName}
                    onChange={(e) => setAdForm({ ...adForm, sponsorName: e.target.value })}
                    placeholder="مثال: أكاديمية كلينوما الطبية"
                    className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/70">مكان الظهور:</label>
                  <select
                    value={adForm.placement}
                    onChange={(e) => setAdForm({ ...adForm, placement: e.target.value as AdPlacement })}
                    className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                  >
                    <option value="pre_round">قبل بداية الجولة (Pre-Round Sponsor)</option>
                    <option value="pre_reveal">قبل كشف الكلمة السرية (Secret Word Climax)</option>
                    <option value="post_game">شاشة كاملة بعد اللعبة (Post-Game)</option>
                    <option value="home_banner">بانر أسفل الصفحة الرئيسية</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-white/70">رابط صورة الإعلان أو البانر:</label>
                <input
                  type="url"
                  required
                  value={adForm.mediaUrl}
                  onChange={(e) => setAdForm({ ...adForm, mediaUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/70">رابط التوجيه (واتساب أو موقع):</label>
                  <input
                    type="url"
                    required
                    value={adForm.ctaLink}
                    onChange={(e) => setAdForm({ ...adForm, ctaLink: e.target.value })}
                    placeholder="https://wa.me/..."
                    className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/70">نص الزر التفاعلي:</label>
                  <input
                    type="text"
                    value={adForm.ctaText}
                    onChange={(e) => setAdForm({ ...adForm, ctaText: e.target.value })}
                    placeholder="تواصل عبر واتساب ↗"
                    className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/70">عداد التخطي (ثوانٍ):</label>
                  <input
                    type="number"
                    min="3"
                    max="15"
                    value={adForm.durationSeconds}
                    onChange={(e) => setAdForm({ ...adForm, durationSeconds: Number(e.target.value) })}
                    className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-white/70">التكرار (بعد كل كم جيم):</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={adForm.frequencyGames}
                    onChange={(e) => setAdForm({ ...adForm, frequencyGames: Number(e.target.value) })}
                    className="w-full h-11 bg-ink-3 border border-ink-4 rounded-xl px-3 text-sm font-bold text-white outline-none focus:border-gold/50"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={savingAd}
                  className="flex-1 h-12 rounded-2xl bg-gold text-amber-950 font-display font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg"
                >
                  <Sparkles size={16} />
                  <span>{savingAd ? 'جاري النشر...' : 'نشر الحملة الإعلانية فوراً'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowAdModal(false)}
                  className="px-5 h-12 rounded-2xl bg-ink-3 border border-ink-4 text-white/60 font-bold text-sm"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </AdminGuard>
  );
}
