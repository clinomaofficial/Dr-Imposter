import React from 'react';
import type { Language } from '../../types';
import { Screen, ModeCard } from '../game/ui';
import { Smartphone, Globe } from 'lucide-react';
import { HomeBannerAd } from '../ads/HomeBannerAd';
export type BattleAction = 'offline_duel' | 'online_duel';
interface Battle1v1ViewProps {
  language: Language; level: number; score: number;
  onChoose: (action: BattleAction) => void; onBackToHub: () => void;
}
export function Battle1v1View({ language, onChoose, onBackToHub }: Battle1v1ViewProps) {
  const t = (ar: string, en: string) => language === 'Arabic' ? ar : en;
  return <Screen title="1 vs 1 Battle" onBack={onBackToHub} backLabel={t('رجوع للألعاب', 'Back to games')}>
    <div className="px-4 space-y-3 max-w-md mx-auto">
      <p className="text-sm text-white/75 pb-1">{t('لاعبان · اكتشف كرت خصمك أولًا', '2 players · Deduce your opponent’s card')}</p>
      <ModeCard icon={<Smartphone size={24} />} title={t('على جهاز واحد', 'Pass & play')}
        subtitle={t('تناوبا على هاتف واحد', 'Take turns on one phone')} accent="gold" onClick={() => onChoose('offline_duel')} />
      <ModeCard icon={<Globe size={24} />} title={t('مبارزة أونلاين', 'Online duel')}
        subtitle={t('كل لاعب على جهازه', 'Each player on their own device')} accent="lilac" onClick={() => onChoose('online_duel')} />
      <HomeBannerAd language={language} />
    </div>
  </Screen>;
}
