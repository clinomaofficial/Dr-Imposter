import React, { useState, useEffect } from 'react';
import { MedicalCupView } from './components/views/MedicalCupView';
import { Language, AppUser } from './types';
import { Globe, Heart, LogIn, LogOut, HelpCircle, X, Users, MessageSquare, Award, User, Mail, Trophy, Edit2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { auth, loginWithGoogle, syncUserDoc, db } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';

export default function App() {
  const [language, setLanguage] = useState<Language>('English');
  const [splashDone, setSplashDone] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [appUser, setAppUser] = useState<AppUser | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [currentPhase, setCurrentPhase] = useState<string>('ENTRY');
  const [showHelp, setShowHelp] = useState(false);
  const [activeHelpTab, setActiveHelpTab] = useState<'solo' | 'duo' | 'group'>('solo');
  const [showAccountSettings, setShowAccountSettings] = useState(false);
  const [tempDisplayName, setTempDisplayName] = useState('');
  const [isSavingName, setIsSavingName] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const duration = 3000; // 3 seconds
    
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculated = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setLoadingProgress(calculated);
      
      if (elapsed >= duration) {
        clearInterval(interval);
        setSplashDone(true);
      }
    }, 40); // update every 40ms for very smooth progress
    
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const synced = await syncUserDoc(user);
          setAppUser(synced);
        } catch (error) {
          console.error("Failed to sync user doc", error);
        }
      } else {
        setAppUser(null);
      }
      setAuthLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    setIsLoggingIn(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      console.error("Login action error", err);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setAppUser(null);
    } catch (err) {
      console.error("Logout action error", err);
    }
  };

  const handleSaveName = async () => {
    if (!appUser || !tempDisplayName.trim()) return;
    setIsSavingName(true);
    setSaveSuccess(false);
    try {
      const userRef = doc(db, 'users', appUser.id);
      await updateDoc(userRef, { displayName: tempDisplayName.trim() });
      setAppUser(prev => prev ? { ...prev, displayName: tempDisplayName.trim() } : null);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error("Failed to save name", error);
    } finally {
      setIsSavingName(false);
    }
  };

  const loading = !splashDone || authLoading;

  if (loading) {
    return (
      <div className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center z-[9999] p-4 text-center select-none overflow-hidden">
        {/* Glowing background circles for visual depth */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Floating animated medical and geometric elements in background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              x: [-10, 10, -10],
              rotate: 360 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-10 text-cyan-400/10 text-4xl"
          >
            ✚
          </motion.div>
          <motion.div
            animate={{ 
              y: [20, -20, 20],
              x: [15, -15, 15],
              rotate: -360 
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-12 text-sky-400/15 text-3xl"
          >
            🩺
          </motion.div>
          <motion.div
            animate={{ 
              scale: [0.8, 1.2, 0.8],
              opacity: [0.15, 0.35, 0.15]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-sky-500/10 blur-xl"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 0.8, 1.2],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 left-1/4 w-40 h-40 rounded-full bg-cyan-500/10 blur-xl"
          />
        </div>

        <div className="relative flex flex-col items-center gap-6 max-w-sm z-10">
          {/* Logo Frame with breathing scale animation */}
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              boxShadow: [
                "0 0 20px rgba(14, 165, 233, 0.2)", 
                "0 0 40px rgba(6, 182, 212, 0.45)", 
                "0 0 20px rgba(14, 165, 233, 0.2)"
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="w-32 h-32 rounded-[2rem] border-2 border-sky-400/60 p-1 bg-zinc-900 overflow-hidden"
          >
            <img 
              src="https://i.ibb.co/FqgZdVFj/Dr-Imposter-202606261532.jpg" 
              alt="Dr. Imposter Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-[28px]"
            />
          </motion.div>

          {/* Titles with typewriter text animation */}
          <div className="space-y-2">
            <h1 className="text-4xl font-black tracking-tight text-white italic bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 flex items-center justify-center gap-[1px]">
              {"Dr. Imposter".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.3, ease: 'easeOut' }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Developed by Clinoma Platform Label */}
          <div className="text-[11px] font-black text-white/50 tracking-wide uppercase">
            {language === 'Arabic' ? 'تم تطويرها بواسطة منصة كلينوما' : 'Developed by Clinoma Platform'}
          </div>

          {/* Professional Solid Loading Bar with Percentage */}
          <div className="w-56 space-y-2">
            <div className="flex justify-between items-center text-[10px] font-mono font-black text-sky-400">
              <span>{language === 'Arabic' ? 'جاري التحميل...' : 'LOADING...'}</span>
              <span>{loadingProgress}%</span>
            </div>
            <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden border border-white/5 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full transition-all duration-75 ease-out"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Copyright and designed with love displayed inside loading page */}
        <div className="absolute bottom-8 left-0 right-0 text-center text-zinc-500 text-[10px] font-semibold flex flex-col items-center justify-center gap-1 px-4 z-10">
          <span>&copy; {new Date().getFullYear()} Dr. Imposter.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex flex-col justify-between" dir={language === 'Arabic' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="w-full bg-zinc-900/60 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-6 py-2 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-600/20 flex items-center justify-center border border-sky-500/50 shadow-[0_0_15px_rgba(14,165,233,0.3)] overflow-hidden">
            <img 
              src="https://i.ibb.co/FqgZdVFj/Dr-Imposter-202606261532.jpg" 
              alt="Dr. Imposter Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-sm font-black tracking-[0.15em] text-white flex items-center gap-2 uppercase font-sans">
              DR.IMPOSTER
            </h1>
          </div>
        </div>

        {/* Controls Container */}
        <div className="flex items-center gap-2">
          {/* Help Button (Only on ENTRY phase / Home page) */}
          {currentPhase === 'ENTRY' && (
            <button
              type="button"
              onClick={() => setShowHelp(true)}
              className="flex items-center justify-center p-2 border border-zinc-800 hover:border-sky-500 rounded-xl bg-zinc-900 hover:bg-sky-600/10 text-white transition-all duration-300"
              title={language === 'Arabic' ? 'شرح طريقة اللعب' : 'How to Play'}
              id="help-toggle"
            >
              <HelpCircle size={14} className="text-sky-400" />
            </button>
          )}

          {/* Language Toggler */}
          <button
            onClick={() => setLanguage(prev => prev === 'Arabic' ? 'English' : 'Arabic')}
            className="flex items-center gap-1.5 px-2.5 py-1.5 border border-zinc-800 hover:border-sky-500 rounded-xl bg-zinc-900 hover:bg-sky-600/10 text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-300"
            id="lang-toggle"
          >
            <Globe size={13} className="text-sky-400" />
            <span>{language === 'Arabic' ? 'English' : 'العربية'}</span>
          </button>

          {/* Google Sign In / Out */}
          {appUser ? (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setTempDisplayName(appUser.displayName || appUser.email.split('@')[0]);
                  setShowAccountSettings(true);
                }}
                className="flex items-center gap-1.5 px-2.5 py-1.5 border border-sky-500/30 hover:border-sky-400 rounded-xl bg-gradient-to-r from-sky-950/40 to-zinc-900 hover:from-sky-950/60 hover:to-zinc-800 text-[11px] font-bold text-white transition-all duration-300"
                title={language === 'Arabic' ? 'إعدادات الحساب الشخصي' : 'Account Settings'}
              >
                <User size={13} className="text-sky-400" />
                <span>{language === 'Arabic' ? 'حسابي' : 'My Account'}</span>
              </button>
              
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-2.5 py-1.5 border border-zinc-800 hover:border-rose-500 hover:text-rose-400 rounded-xl bg-zinc-900 hover:bg-rose-600/10 text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-300"
                title={language === 'Arabic' ? 'تسجيل الخروج' : 'Sign Out'}
              >
                <LogOut size={13} className="text-rose-400" />
                <span className="hidden sm:inline">{language === 'Arabic' ? 'خروج' : 'Sign Out'}</span>
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="flex items-center gap-1.5 px-2.5 py-1.5 border border-sky-500/40 hover:border-sky-400 rounded-xl bg-gradient-to-r from-sky-950/50 to-zinc-900 hover:from-sky-950/70 hover:to-zinc-800 text-[11px] font-bold uppercase tracking-wider text-white transition-all duration-300"
            >
              <LogIn size={13} className="text-sky-400" />
              <span>{language === 'Arabic' ? (isLoggingIn ? 'جاري...' : 'دخول') : (isLoggingIn ? 'Signing in...' : 'Login')}</span>
            </button>
          )}
        </div>
      </header>
      
      {appUser?.isOfflineFallback && (
        <div className="bg-amber-500/10 border-b border-amber-500/20 text-amber-400 px-4 py-1 text-center text-[10px] font-semibold flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>
            {language === 'Arabic' 
              ? `قاعدة بيانات Cloud Firestore غير مفعلة أو أوفلاين حالياً. يتم تشغيل اللعبة في "الوضع المحلي المؤقت" بنجاح.`
              : `Cloud Firestore database is offline or not provisioned yet. The game is running in "Local Offline Mode" successfully.`}
          </span>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow w-full max-w-5xl mx-auto flex flex-col items-center justify-center p-1 sm:p-3">
        <div className="w-full">
          <MedicalCupView
            language={language}
            onSetView={() => {}}
            onGoBack={() => {
              window.location.reload();
            }}
            appUser={appUser}
            onLogin={handleLogin}
            onPhaseChange={setCurrentPhase}
          />
        </div>
      </main>

      {/* Minimal Footer padding to replace copyright/love footnotes */}
      <div className="py-2" />

      {/* Premium Help Modal */}
      <AnimatePresence>
        {showHelp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHelp(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Content Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 26, stiffness: 340 }}
              className="relative w-full max-w-sm sm:max-w-md bg-zinc-900 border border-zinc-800/90 rounded-2xl sm:rounded-[24px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.85)] z-10 flex flex-col max-h-[85vh]"
              dir={language === 'Arabic' ? 'rtl' : 'ltr'}
            >
              {/* Premium Top Thin Accent Glow Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-500 to-teal-400" />

              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-850">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <HelpCircle size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                      {language === 'Arabic' ? 'شرح طريقة اللعب 🩺' : 'How to Play 🩺'}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowHelp(false)}
                  className="p-1.5 rounded-lg hover:bg-zinc-800/80 text-zinc-400 hover:text-white transition-all active:scale-90"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Tabs Selector Header (1, 2, 3-10 players) */}
              <div className="p-3 bg-zinc-950/40 border-b border-zinc-850 flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveHelpTab('solo')}
                  className={`flex-1 py-2 px-2.5 rounded-xl font-bold text-[10px] sm:text-[11px] transition-all border flex flex-col items-center gap-1 active:scale-95 ${
                    activeHelpTab === 'solo'
                      ? 'bg-sky-600 text-white border-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.25)]'
                      : 'bg-zinc-900/60 text-zinc-400 border-zinc-800/60 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-mono">1</span>
                  <span>{language === 'Arabic' ? 'لاعب واحد' : '1 Player'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveHelpTab('duo')}
                  className={`flex-1 py-2 px-2.5 rounded-xl font-bold text-[10px] sm:text-[11px] transition-all border flex flex-col items-center gap-1 active:scale-95 ${
                    activeHelpTab === 'duo'
                      ? 'bg-sky-600 text-white border-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.25)]'
                      : 'bg-zinc-900/60 text-zinc-400 border-zinc-800/60 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-mono">2</span>
                  <span>{language === 'Arabic' ? 'لاعبان' : '2 Players'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveHelpTab('group')}
                  className={`flex-1 py-2 px-2.5 rounded-xl font-bold text-[10px] sm:text-[11px] transition-all border flex flex-col items-center gap-1 active:scale-95 ${
                    activeHelpTab === 'group'
                      ? 'bg-sky-600 text-white border-sky-500 shadow-[0_0_12px_rgba(14,165,233,0.25)]'
                      : 'bg-zinc-900/60 text-zinc-400 border-zinc-800/60 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <span className="text-xs sm:text-sm font-mono">3 - 10</span>
                  <span>{language === 'Arabic' ? 'من 3 إلى 10 لاعبين' : '3 - 10 Players'}</span>
                </button>
              </div>

              {/* Dynamic Modal Content Body */}
              <div className="p-4 sm:p-5 overflow-y-auto flex-grow space-y-4">
                <AnimatePresence mode="wait">
                  {activeHelpTab === 'solo' && (
                    <motion.div
                      key="solo"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-3.5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                          <Users size={15} />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-[11px] sm:text-xs font-black text-white uppercase tracking-wider">
                            {language === 'Arabic' ? 'اللعب المنفرد (Solo Mode)' : 'Solo Play Mode'}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-relaxed">
                            {language === 'Arabic'
                              ? 'اختبر معلوماتك ومهاراتك السريرية بمفردك لتخمن المصطلح الطبي.'
                              : 'Test your clinical diagnostics solo and match wits against the system.'}
                          </p>
                        </div>
                      </div>

                      {/* Main explanation box */}
                      <div className="p-3.5 bg-zinc-950/50 border border-zinc-850 rounded-xl space-y-2.5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                          <span className="text-[10px] sm:text-[11px] font-bold text-zinc-200">
                            {language === 'Arabic' ? 'شرح طريقة اللعب:' : 'How to Play:'}
                          </span>
                        </div>
                        <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-relaxed">
                          {language === 'Arabic'
                            ? 'تقوم اللعبة بالكامل على اللعب منفرداً لتخمين مصطلح طبي سري ومميز. تظهر أمامك مجموعة من التوقعات والتلميحات الطبية المشوقة والسريرية واحدة تلو الأخرى تدريجياً.'
                            : 'The entire game is played solo where you guess a secret medical term. A set of progressive clinical/academic clues appears to you one by one.'}
                        </p>
                        <p className="text-[10px] sm:text-[11px] text-sky-300 font-bold leading-relaxed bg-sky-950/20 p-2.5 rounded-lg border border-sky-900/40">
                          {language === 'Arabic'
                            ? '💡 كل ما خمنت اسم المصطلح مبكراً تحصل على عدد نقاط أكبر! (الحد الأقصى 50 نقطة ويقل بمقدار 10 نقاط مع كل تلميح تكشفه).'
                            : '💡 The earlier you guess the name of the medical term, the more points you get! (Maximum 50 points, decreasing by 10 points for each revealed hint).'}
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {activeHelpTab === 'duo' && (
                    <motion.div
                      key="duo"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-3.5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                          <MessageSquare size={15} />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-[11px] sm:text-xs font-black text-white uppercase tracking-wider">
                            {language === 'Arabic' ? 'لاعبان (مواجهة ثنائية وجهاً لوجه)' : '2-Player Head-to-Head'}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-relaxed">
                            {language === 'Arabic'
                              ? 'مبارزة ذكاء وتحدي مباشر لمعرفة من هو الـ Imposter المستخبي!'
                              : 'A direct duel of wits to expose who is the secret Imposter!'}
                          </p>
                        </div>
                      </div>

                      {/* Main explanation box */}
                      <div className="p-3.5 bg-zinc-950/50 border border-zinc-850 rounded-xl space-y-2.5 text-[10px] sm:text-[11px] leading-relaxed text-zinc-400">
                        <div className="flex gap-2">
                          <span className="text-sky-400 font-bold">1.</span>
                          <p>
                            {language === 'Arabic'
                              ? 'يتم سحب مصطلح طبي سري عشوائي وتحديد دوريكما السريين.'
                              : 'A random secret medical term is selected and your roles are assigned.'}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-sky-400 font-bold">2.</span>
                          <p>
                            {language === 'Arabic'
                              ? 'أحدكما يكون "الطبيب الحقيقي" (يرى المصطلح الطبي كاملاً)، والآخر هو الـ "Imposter" (يرى تخصصاً مقارباً للمصطلح دون معرفة المصطلح نفسه!).'
                              : 'One is the "Real Doctor" (sees the complete term), the other is the "Imposter" (sees a close specialty category without knowing the term itself!).'}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <span className="text-sky-400 font-bold">3.</span>
                          <p>
                            {language === 'Arabic'
                              ? 'تبدأ المناقشة الشفوية والأسئلة! على الطبيب كشف الـ Imposter، وعلى الـ Imposter تمثيل دور الطبيب بذكاء وتخمين المصطلح للفوز.'
                              : 'Let the clinical discussions and questions begin! The Doctor must expose the Imposter, while the Imposter tries to bluff as a Doctor and guess the term to win.'}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeHelpTab === 'group' && (
                    <motion.div
                      key="group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.18 }}
                      className="space-y-3.5"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                          <Award size={15} />
                        </div>
                        <div className="space-y-0.5">
                          <h4 className="text-[11px] sm:text-xs font-black text-white uppercase tracking-wider">
                            {language === 'Arabic' ? 'من 3 إلى 10 لاعبين (الجروب الطبي)' : 'Group Game (3 to 10 Players)'}
                          </h4>
                          <p className="text-[10px] sm:text-[11px] text-zinc-400 leading-relaxed">
                            {language === 'Arabic'
                              ? 'الوضع الحماسي الكلاسيكي الأفضل لتجمعات الزملاء والجروبات الطبية.'
                              : 'The ultimate medical group mode perfect for parties and classes.'}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {/* Role boxes */}
                        <div className="p-3 bg-zinc-950/50 border border-zinc-850 rounded-xl space-y-2 text-[10px] sm:text-[11px] text-zinc-350 leading-relaxed">
                          <div className="flex gap-1.5 text-zinc-300">
                            <span className="font-bold text-sky-400 shrink-0">• {language === 'Arabic' ? 'الأطباء:' : 'Doctors:'}</span>
                            <p>
                              {language === 'Arabic'
                                ? 'يعرفون الكلمة السحرية ويحاولون كشف الـ Imposter بطرح أسئلة طبية غامضة وذكية دون إفشاء الكلمة.'
                                : 'They know the secret term and ask clever, coded questions to spot the Imposter without revealing the word.'}
                            </p>
                          </div>
                          <div className="flex gap-1.5 text-zinc-300">
                            <span className="font-bold text-teal-400 shrink-0">• {language === 'Arabic' ? 'الـ Imposter:' : 'Imposter:'}</span>
                            <p>
                              {language === 'Arabic'
                                ? 'لا يعرف الكلمة السحرية بل تخصصها العام فقط؛ ويحاول الخداع ليفوز ويتجنب الشكوك.'
                                : 'Does not know the term, but only its category; tries to blend in, bluff, and guess the word.'}
                            </p>
                          </div>
                        </div>

                        {/* Gameplay rules */}
                        <div className="p-3 bg-teal-950/10 border border-teal-500/10 rounded-xl space-y-1.5 text-[10px] sm:text-[11px] text-zinc-450 leading-relaxed">
                          <span className="font-bold text-teal-400 block">
                            {language === 'Arabic' ? 'التصويت وفرصة العودة السوبر:' : 'Voting & The Final Comeback Guess:'}
                          </span>
                          <p>
                            {language === 'Arabic'
                              ? 'بعد المناقشة، يصوت الجميع لكشف الـ Imposter. إذا كشفتموه بنجاح، يحصل الـ Imposter على فرصة أخيرة لتخمين المصطلح السري! إذا نجح بالتخمين، يسرق الفوز بالكامل!'
                              : 'After discussing, everyone votes on the Imposter. If caught, the Imposter gets a final attempt to guess the secret term; guessing correctly steals a dramatic win!'}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-zinc-950/60 border-t border-zinc-850 flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowHelp(false)}
                  className="px-4.5 py-2 bg-sky-600 hover:bg-sky-500 active:scale-95 text-white rounded-xl text-[10px] sm:text-xs font-black tracking-wider uppercase transition-all duration-300 shadow-md shadow-sky-600/10"
                >
                  {language === 'Arabic' ? 'جاهز ومستعد! 🩺' : 'Ready to Play! 🩺'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Personal Account Settings Modal */}
      <AnimatePresence>
        {showAccountSettings && appUser && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAccountSettings(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Content Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 26, stiffness: 340 }}
              className="relative w-full max-w-sm sm:max-w-md bg-zinc-900 border border-zinc-800/90 rounded-2xl sm:rounded-[24px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.85)] z-10 flex flex-col max-h-[85vh]"
              dir={language === 'Arabic' ? 'rtl' : 'ltr'}
            >
              {/* Premium Top Thin Accent Glow Line */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500 via-sky-500 to-purple-500" />

              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-850">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                    <User size={16} />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-white">
                      {language === 'Arabic' ? 'إعدادات الحساب الشخصي 🩺' : 'Personal Account Settings 🩺'}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAccountSettings(false)}
                  className="p-1.5 rounded-lg hover:bg-zinc-800/80 text-zinc-400 hover:text-white transition-all active:scale-90"
                >
                  <X size={15} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 overflow-y-auto space-y-4">
                
                {/* Points Card */}
                <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-4 flex items-center justify-between gap-4 relative overflow-hidden">
                  <div className="space-y-1 z-10">
                    <span className="text-[10px] font-black uppercase text-zinc-500 tracking-wider block">
                      {language === 'Arabic' ? 'إجمالي النقاط' : 'TOTAL SCORE / POINTS'}
                    </span>
                    <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300 font-mono">
                      {appUser.detectiveScore ?? 0}
                    </span>
                    <span className="text-[10px] text-zinc-400 font-medium block">
                      {language === 'Arabic' ? 'استمر في اللعب والتخمين لزيادة نقاطك!' : 'Keep playing to increase your score!'}
                    </span>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Trophy size={28} className="animate-pulse" />
                  </div>
                </div>

                {/* Name / Display Name Input Field */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-zinc-500 tracking-wider block">
                    {language === 'Arabic' ? 'الاسم الحالي' : 'DISPLAY NAME'}
                  </label>
                  <div className="flex gap-2">
                    <div className="relative flex-grow">
                      <input
                        type="text"
                        value={tempDisplayName}
                        onChange={(e) => setTempDisplayName(e.target.value)}
                        placeholder={language === 'Arabic' ? 'أدخل اسمك هنا' : 'Enter your name'}
                        className="w-full bg-zinc-950/80 border border-zinc-800 focus:border-sky-500 rounded-xl px-3.5 py-2 text-xs font-bold text-white placeholder-zinc-600 outline-none transition-all"
                      />
                    </div>
                    <button
                      type="button"
                      disabled={isSavingName || !tempDisplayName.trim() || tempDisplayName.trim() === (appUser.displayName || appUser.email.split('@')[0])}
                      onClick={handleSaveName}
                      className="px-4 py-2 bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl text-xs font-bold transition-all shrink-0 active:scale-95"
                    >
                      {isSavingName ? (language === 'Arabic' ? 'جاري...' : 'Saving...') : (language === 'Arabic' ? 'حفظ' : 'Save')}
                    </button>
                  </div>
                  {saveSuccess && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[10px] text-emerald-400 font-semibold"
                    >
                      {language === 'Arabic' ? '✓ تم تحديث الاسم بنجاح!' : '✓ Name updated successfully!'}
                    </motion.p>
                  )}
                </div>

                {/* Email Address Read-only field */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black uppercase text-zinc-500 tracking-wider block">
                    {language === 'Arabic' ? 'البريد الإلكتروني' : 'EMAIL ADDRESS'}
                  </label>
                  <div className="flex items-center gap-2 px-3 py-2 border border-zinc-800/60 rounded-xl bg-zinc-950/40 text-zinc-400 text-xs font-semibold">
                    <Mail size={13} className="text-zinc-500 shrink-0" />
                    <span className="truncate">{appUser.email}</span>
                  </div>
                </div>

                {/* Account Details & Role */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="p-3 bg-zinc-950/30 border border-zinc-850/60 rounded-xl flex flex-col gap-0.5">
                    <span className="text-[9px] font-black uppercase text-zinc-500 tracking-wider">
                      {language === 'Arabic' ? 'نوع الحساب' : 'ACCOUNT TYPE'}
                    </span>
                    <span className="text-xs font-bold text-zinc-200 capitalize">
                      {appUser.role === 'super_admin' ? (language === 'Arabic' ? 'مشرف عام' : 'Super Admin') : (language === 'Arabic' ? 'طبيب لاعب' : 'Medical Player')}
                    </span>
                  </div>
                  <div className="p-3 bg-zinc-950/30 border border-zinc-850/60 rounded-xl flex flex-col gap-0.5">
                    <span className="text-[9px] font-black uppercase text-zinc-500 tracking-wider">
                      {language === 'Arabic' ? 'حالة الاشتراك' : 'SUBSCRIPTION'}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {appUser.subscriptionActive ? (language === 'Arabic' ? 'نشط مدى الحياة' : 'Active Lifetime') : (language === 'Arabic' ? 'مجاني' : 'Free tier')}
                    </span>
                  </div>
                </div>

              </div>

              {/* Modal Footer */}
              <div className="px-5 py-4 border-t border-zinc-850 bg-zinc-950/20 flex gap-2">
                <button
                  type="button"
                  onClick={() => setShowAccountSettings(false)}
                  className="flex-grow py-2.5 bg-zinc-800 hover:bg-zinc-750 text-zinc-300 hover:text-white rounded-xl text-xs font-bold transition-all text-center active:scale-95"
                >
                  {language === 'Arabic' ? 'إغلاق' : 'Close'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAccountSettings(false);
                    handleLogout();
                  }}
                  className="px-4 py-2.5 border border-rose-500/30 hover:bg-rose-500/10 text-rose-400 rounded-xl text-xs font-bold transition-all shrink-0 active:scale-95 flex items-center gap-1.5"
                >
                  <LogOut size={13} />
                  <span>{language === 'Arabic' ? 'خروج' : 'Sign Out'}</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

