import React from 'react';
import { Plus } from 'lucide-react';
import { Disclosure } from './ui';

export function SoloClues({ hints, unlocked, reward, arabic, onUnlock }: {
  hints: string[]; unlocked: number; reward: number; arabic: boolean; onUnlock: () => void;
}) {
  return <section aria-label={arabic ? 'التلميحات' : 'Clues'} className="panel p-4 space-y-3">
    <div className="flex flex-wrap items-center justify-between gap-2 font-display font-bold text-sm">
      <span>{arabic ? `التلميح ${unlocked} من 3` : `Clue ${unlocked} of 3`}</span>
      <span className="text-gold">{arabic ? `${reward} نقطة` : `${reward} pts`}</span>
    </div>
    <p key={unlocked} className="text-base leading-relaxed font-semibold text-white" aria-live="polite">{hints[unlocked - 1]}</p>
    {unlocked > 1 && <Disclosure title={arabic ? 'التلميحات السابقة' : 'Earlier clues'}>
      {hints.slice(0, unlocked - 1).map((hint, index) => <p key={index} className="text-base leading-relaxed text-white/80">{index + 1}. {hint}</p>)}
    </Disclosure>}
    {unlocked < 3 && <button type="button" onClick={onUnlock} className="w-full min-h-[48px] px-3 py-2 rounded-2xl border border-mint/40 text-mint bg-mint/5 font-display font-bold flex items-center justify-center gap-2">
      <Plus size={18} />{arabic ? `تلميح إضافي · المكافأة ${unlocked === 1 ? 30 : 15}` : `Next clue · reward ${unlocked === 1 ? 30 : 15}`}
    </button>}
  </section>;
}
