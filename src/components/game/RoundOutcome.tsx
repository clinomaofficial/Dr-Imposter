import React from 'react';
import type { Language } from '../../types';

export function RoundOutcome({ players, initialScores, duel, language }: {
  players: { id: string; name: string; score: number }[];
  initialScores: Record<string, number>;
  duel: boolean;
  language: Language;
}) {
  const ar = language === 'Arabic';
  const earned = players.filter(p => p.score > (initialScores[p.id] ?? p.score));
  const headline = duel
    ? earned.length === 1 ? (ar ? `${earned[0].name} فاز بالجولة` : `${earned[0].name} wins this round`)
      : earned.length === 2 ? (ar ? 'تعادل · كلا التشخيصين صحيحان' : 'Tie · both diagnoses correct')
        : (ar ? 'لا يوجد تشخيص صحيح في هذه الجولة' : 'No correct diagnoses this round')
    : earned.length ? (ar ? 'حصلوا على نقاط الجولة' : 'Round points earned') : (ar ? 'انتهت الجولة دون نقاط' : 'No points this round');
  return <section className="panel p-4 space-y-2 text-center border-gold/30" aria-label={ar ? 'ملخص الجولة' : 'Round summary'}>
    <h3 className="font-display font-bold text-xl text-gold">{headline}</h3>
    {!duel && earned.length > 0 && <p className="text-base">{earned.map(p => p.name).join(ar ? '، ' : ', ')}</p>}
    <p className="text-sm text-white/75">{ar ? 'الترتيب أدناه حسب مجموع النقاط' : 'Standings below show total scores'}</p>
  </section>;
}
