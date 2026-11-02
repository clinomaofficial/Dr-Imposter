import React from 'react';
import type { Language } from '../../types';
import { ShieldAlert, Swords, Brain, Trophy, ChevronRight, Star } from 'lucide-react';
import { HomeBannerAd } from '../ads/HomeBannerAd';
import { sfx } from '../../lib/sfx';
export type SelectedGameId = 'dr_imposter' | 'battle_1v1' | 'guess';
interface ClinomaGamesHubProps {
  language: Language; level: number; score: number;
  onSelectGame: (gameId: SelectedGameId) => void; onOpenRanking: () => void;
}
export function ClinomaGamesHub({ language, score, onSelectGame, onOpenRanking }: ClinomaGamesHubProps) {
  const t = (ar: string, en: string) => language === 'Arabic' ? ar : en;
  const games = [
    { id: 'dr_imposter' as const, title: 'Dr. Imposter', players: t('من 3 إلى 10 لاعبين', '3–10 players'),
      description: t('اكتشف المنتحل بين الأطباء', 'Find the undercover doctor'), icon: ShieldAlert, tone: 'text-coral border-coral/30 bg-coral/10' },
    { id: 'battle_1v1' as const, title: '1 vs 1 Battle', players: t('لاعبان', '2 players'),
      description: t('اسأل خصمك واكتشف كرتَه', 'Ask questions. Deduce their card.'), icon: Swords, tone: 'text-gold border-gold/30 bg-gold/10' },
    { id: 'guess' as const, title: 'Guess', players: t('لاعب واحد', 'Solo'),
      description: t('خَمّن الحالة من التلميحات', 'Diagnose the case from its clues'), icon: Brain, tone: 'text-mint border-mint/30 bg-mint/10' },
  ];
  return <div className="flex flex-col h-full min-h-0">
    <div className="flex-1 min-h-0 overflow-y-auto px-4 pt-4 pb-3">
      <div className="max-w-md mx-auto space-y-3">
        <div className="flex flex-wrap gap-3 items-center justify-between pb-1">
          <h2 className="font-display text-2xl font-bold">{t('اختر لعبتك', 'Choose your game')}</h2>
          {score > 0 && <span aria-label={t('رصيد النقاط', 'Total score')} className="inline-flex items-center gap-1.5 text-gold font-bold"><Star size={18} />{score}</span>}
        </div>
        {games.map(game => <button key={game.id} type="button" aria-label={game.title}
          onClick={() => { sfx.tap(); onSelectGame(game.id); }}
          className="game-choice w-full min-h-[112px] p-4 rounded-3xl border border-ink-4 bg-ink-2 text-start flex items-center gap-3 active:scale-[0.98] transition-transform">
          <span aria-hidden className={`w-12 h-12 shrink-0 rounded-2xl border flex items-center justify-center ${game.tone}`}><game.icon size={26} /></span>
          <span className="flex-1 min-w-0 space-y-1">
            <bdi dir="ltr" className="block font-display text-xl font-bold text-white">{game.title}</bdi>
            <span className="block text-sm text-white/75">{game.description}</span>
            <span className={`block text-sm font-bold ${game.tone.split(' ')[0]}`}>{game.players}</span>
          </span>
          <ChevronRight aria-hidden size={20} className="shrink-0 rtl:rotate-180 text-white/70" />
        </button>)}
        <HomeBannerAd language={language} />
      </div>
    </div>
    <div className="shrink-0 px-4 pt-2 pb-safe border-t border-white/10">
      <button type="button" onClick={onOpenRanking} className="w-full max-w-md mx-auto min-h-[52px] rounded-2xl bg-ink-3 flex items-center justify-center gap-2 font-display font-bold text-base">
        <Trophy size={20} className="text-gold" />{t('لوحة الصدارة', 'Leaderboard')}
      </button>
    </div>
  </div>;
}
