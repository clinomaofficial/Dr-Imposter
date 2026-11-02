import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Check, AlertCircle, ArrowRight, BookOpen, GraduationCap, Stethoscope, Crown, Cross, Hand } from 'lucide-react';
import { Screen, BigBtn, Label, Sheet, isAr } from '../game/ui';
import { Language, AppUser } from '../../types';

interface OnboardingProps {
  language: Language;
  appUser: AppUser;
  onSave: (data: { academicLevel: string; academicYear?: string; university: string }) => Promise<void>;
  onLogout: () => void;
}

const EGYPTIAN_UNIVERSITIES = [
  { ar:"جامعة القاهرة (قصر العيني)", en:"Cairo University (Kasr Al-Ainy)" },
  { ar:"جامعة عين شمس", en:"Ain Shams University" },
  { ar:"جامعة الإسكندرية", en:"Alexandria University" },
  { ar:"جامعة المنصورة", en:"Mansoura University" },
  { ar:"جامعة أسيوط", en:"Assiut University" },
  { ar:"جامعة طنطا", en:"Tanta University" },
  { ar:"جامعة الزقازيق", en:"Zagazig University" },
  { ar:"جامعة قناة السويس", en:"Suez Canal University" },
  { ar:"جامعة المنوفية", en:"Menoufia University" },
  { ar:"جامعة بنها", en:"Benha University" },
  { ar:"جامعة الفيوم", en:"Fayoum University" },
  { ar:"جامعة المنيا", en:"Minia University" },
  { ar:"جامعة بني سويف", en:"Beni Suef University" },
  { ar:"جامعة سوهاج", en:"Sohag University" },
  { ar:"جامعة كفر الشيخ", en:"Kafr El-Sheikh University" },
  { ar:"جامعة بورسعيد", en:"Port Said University" },
  { ar:"جامعة أسوان", en:"Aswan University" },
  { ar:"جامعة دمياط", en:"Damietta University" },
  { ar:"جامعة السويس", en:"Suez University" },
  { ar:"جامعة حلوان", en:"Helwan University" },
  { ar:"جامعة الأزهر بالقاهرة (بنين)", en:"Al-Azhar University, Cairo (Male)" },
  { ar:"جامعة الأزهر بالقاهرة (بنات)", en:"Al-Azhar University, Cairo (Female)" },
  { ar:"جامعة الأزهر بدمياط (بنين)", en:"Al-Azhar University, Damietta (Male)" },
  { ar:"جامعة الأزهر بأسيوط (بنين)", en:"Al-Azhar University, Assiut (Male)" },
  { ar:"كلية الطب بالقوات المسلحة (AFCM)", en:"Armed Forces College of Medicine (AFCM)" },
  { ar:"جامعة نيو جيزة (NGU)", en:"Newgiza University (NGU)" },
  { ar:"جامعة السادس من أكتوبر", en:"6th of October University" },
  { ar:"جامعة مصر للعلوم والتكنولوجيا (MUST)", en:"MUST University" },
  { ar:"جامعة أكتوبر للعلوم الحديثة (MSA)", en:"MSA University" },
  { ar:"جامعة بدر بالقاهرة (BUC)", en:"Badr University in Cairo" },
  { ar:"جامعة النهضة (NUB)", en:"Nahda University" },
  { ar:"جامعة هليوبوليس", en:"Heliopolis University" },
  { ar:"جامعة الدلتا للعلوم والتكنولوجيا", en:"Delta University" },
  { ar:"جامعة الجلالة", en:"Galala University" },
  { ar:"جامعة الملك سلمان الدولية", en:"King Salman International University" },
  { ar:"جامعة المنصورة الجديدة", en:"New Mansoura University" },
  { ar:"جامعة ميريت", en:"Merit University" },
  { ar:"الأكاديمية الطبية العسكرية", en:"Military Medical Academy" },
  { ar:"جامعة أخرى / خارج مصر", en:"Other University / Outside Egypt" }
];

const LEVELS = [
  { id:'Student', ar:'طالب طب', en:'Student', icon: BookOpen },
  { id:'Intern', ar:'طبيب امتياز', en:'Intern', icon: GraduationCap },
  { id:'Resident', ar:'طبيب مقيم', en:'Resident', icon: Stethoscope },
  { id:'Specialist', ar:'أخصائي / استشاري', en:'Specialist', icon: Crown },
  { id:'GP', ar:'ممارس عام', en:'GP', icon: Cross },
];

const YEARS = [
  { id:'Year 1', ar:'سنة 1', en:'Year 1' },
  { id:'Year 2', ar:'سنة 2', en:'Year 2' },
  { id:'Year 3', ar:'سنة 3', en:'Year 3' },
  { id:'Year 4', ar:'سنة 4', en:'Year 4' },
  { id:'Year 5', ar:'سنة 5', en:'Year 5' },
  { id:'Year 6', ar:'سنة 6', en:'Year 6' },
];

export const OnboardingView: React.FC<OnboardingProps> = ({ language, onSave, onLogout }) => {
  const ar = isAr(language);
  const t = (arText: string, enText: string) => ar ? arText : enText;
  const [level, setLevel] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [university, setUniversity] = useState<string>('');
  const [showUniDropdown, setShowUniDropdown] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const filteredUnis = EGYPTIAN_UNIVERSITIES.filter(u =>
    u.ar.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!level) {
      setError(t('اختار مستواك الأول!','Pick your level first!'));
      return;
    }
    if (level ==='Student' && !year) {
      setError(t('اختار سنتك الدراسية!','Pick your academic year!'));
      return;
    }
    if (!university) {
      setError(t('اختار جامعتك!','Pick your university!'));
      return;
    }

    setIsSubmitting(true);
    setError('');
    try {
      await onSave({
        academicLevel: level,
        academicYear: level ==='Student' ? year : undefined,
        university: university
      });
    } catch (err) {
      console.error(err);
      setError(t('فشل الحفظ، جرّب تاني.','Failed to save. Try again.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const uniLabel = university
    ? (ar ? EGYPTIAN_UNIVERSITIES.find(u => u.ar === university)?.ar : EGYPTIAN_UNIVERSITIES.find(u => u.ar === university)?.en)
    :'';

  return (
    <div className="h-full min-h-0 flex flex-col" dir={ar ?'rtl' :'ltr'}>
      <Screen title={t('ملفك الطبي','Your Profile')} footer={<div className="shrink-0 px-4 pt-2 pb-safe space-y-2">
            <BigBtn
              onClick={handleSubmit}
              disabled={isSubmitting || !level || (level ==='Student' && !year) || !university}
            >
              {isSubmitting ? t('جاري الحفظ...','Saving...') : t('يلا نبدأ',"Let's start")}
              <ArrowRight size={18} className={ar ?'rotate-180' :''} />
            </BigBtn>
            <button
              type="button"
              onClick={onLogout}
              className="w-full min-h-[48px] text-white/70 font-bold text-sm active:scale-95 transition-transform"
            >
              {t('تسجيل خروج','Sign out')}
            </button>
          </div>}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-4 pb-4 space-y-5">
            {/* welcome strip */}
            <div className="panel p-4 flex items-center gap-3">
              <span className="w-11 h-11 rounded-2xl bg-pop/15 border border-pop/30 flex items-center justify-center shrink-0"><Hand size={22} className="text-pop" /></span>
              <p className="text-sm font-bold text-white/70 leading-relaxed">
                {t('أهلاً يا دكتور! جهّز ملفك عشان نظبطلك اللعبة',"Welcome, Doctor! Set up your profile to tailor the game")}
              </p>
            </div>

            {/* 1. Level */}
            <div className="space-y-2">
              <Label icon={<span>1</span>}>{t('مستواك الحالي','Current level')}</Label>
              <div className="grid grid-cols-2 gap-2">
                {LEVELS.map(item => {
                  const selected = level === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setLevel(item.id);
                        if (item.id !=='Student') setYear('');
                        setError('');
                      }}
                      className={`min-h-[60px] px-3 rounded-2xl border flex items-center gap-2.5 transition-all active:scale-[0.97] ${
                        selected
                          ?'bg-mint/15 border-mint shadow-[0_0_18px_rgba(47,230,167,0.15)]'
                          :'bg-ink-3/60 border-ink-4'
                      }`}
                    >
                      <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-white/5 border border-white/10"><item.icon size={17} /></span>
                      <span className={`font-display font-bold text-base leading-snug text-start ${selected ?'text-mint' :'text-white/70'}`}>
                        {ar ? item.ar : item.en}
                      </span>
                      {selected && <Check size={16} className="text-mint shrink-0 ms-auto" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 1.5 Year (students only) */}
            <AnimatePresence>
              {level ==='Student' && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height:'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden space-y-2"
                >
                  <Label icon={<span>🎓</span>}>{t('سنتك الدراسية','Academic year')}</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {YEARS.map(item => {
                      const selected = year === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => { setYear(item.id); setError(''); }}
                          className={`min-h-[52px] rounded-2xl border font-display font-bold transition-all active:scale-95 ${
                            selected ?'bg-mint/15 border-mint text-mint' :'bg-ink-3/60 border-ink-4 text-white/60'
                          }`}
                        >
                          {ar ? item.ar : item.en}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-2">
              <Label>{t('الجامعة', 'University')}</Label>
              <button type="button" onClick={() => { setSearchQuery(''); setShowUniDropdown(true); }}
                className="w-full min-h-[56px] px-4 py-3 rounded-2xl border border-ink-4 bg-ink-3 text-start text-base font-bold">
                {uniLabel || t('اختر جامعتك', 'Choose your university')}
              </button>
              <Sheet open={showUniDropdown} onClose={() => setShowUniDropdown(false)} title={t('اختر جامعتك', 'Choose your university')} dir={ar ? 'rtl' : 'ltr'}>
                <input aria-label={t('بحث الجامعات', 'Search universities')} type="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)}
                  placeholder={t('ابحث عن الجامعة…', 'Search universities…')} className="w-full min-h-[52px] px-4 bg-ink-3 border border-ink-4 rounded-2xl mb-3" />
                <div className="space-y-2">
                  {filteredUnis.map(uni => <button key={uni.ar} type="button" aria-pressed={university === uni.ar}
                    onClick={() => { setUniversity(uni.ar); setShowUniDropdown(false); setError(''); }}
                    className="w-full min-h-[52px] px-4 py-3 rounded-2xl bg-ink-3 border border-ink-4 text-start text-base">
                    {ar ? uni.ar : uni.en}
                  </button>)}
                  {!filteredUnis.length && <p role="status" className="py-4 text-white/75">{t('لا توجد نتائج', 'No matches')}</p>}
                </div>
              </Sheet>
            </div>

            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="p-3.5 bg-coral/10 border border-coral/30 rounded-2xl text-coral text-sm font-bold flex items-center gap-2.5"
                >
                  <AlertCircle size={16} className="shrink-0" />
                  <span role="alert">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </form>
      </Screen>
    </div>
  );
};
