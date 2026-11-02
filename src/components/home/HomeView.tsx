import React from 'react';
import type { Language } from '../../types';
import { Screen, ModeCard, IconBtn } from '../game/ui';
import { Camera, Smartphone, Globe, HelpCircle } from 'lucide-react';
import { HomeBannerAd } from '../ads/HomeBannerAd';
export type HomeAction = 'solo' | 'visual' | 'offline' | 'online' | 'ranking';
interface HomeViewProps {
  language: Language; level: number; score: number; onChoose: (a: HomeAction) => void;
  onBackToHub?: () => void; onShowHelp?: () => void;
}
export function HomeView({ language, onChoose, onBackToHub, onShowHelp }: HomeViewProps) {
  const t = (ar: string, en: string) => language === 'Arabic' ? ar : en;
  return <Screen title="Dr. Imposter" onBack={onBackToHub} backLabel={t('رجوع للألعاب', 'Back to games')}
    right={onShowHelp && <IconBtn onClick={onShowHelp} label={t('طريقة اللعب', 'How to play')}><HelpCircle size={22} /></IconBtn>}>
    <div className="px-4 space-y-3 max-w-md mx-auto">
      <p className="text-sm text-white/75 pb-1">{t('3–10 لاعبين · اكشف المنتحل', '3–10 players · Find the imposter')}</p>
      <ModeCard icon={<Smartphone size={24} />} title={t('على جهاز واحد', 'Pass & play')}
        subtitle={t('تناوبوا على هاتف واحد', 'Take turns on one phone')} accent="gold" onClick={() => onChoose('offline')} />
      <ModeCard icon={<Camera size={24} />} title={t('تحدي الصور', 'Clinical images')}
        subtitle={t('الأطباء يرون الصورة، والمنتَحل يموّه', 'Doctors see the image. The imposter bluffs.')} accent="pop" onClick={() => onChoose('visual')} />
      <ModeCard icon={<Globe size={24} />} title={t('غرفة أونلاين', 'Online room')}
        subtitle={t('العبوا من أجهزة مختلفة', 'Play on separate devices')} accent="lilac" onClick={() => onChoose('online')} />
      <HomeBannerAd language={language} />
    </div>
  </Screen>;
}
