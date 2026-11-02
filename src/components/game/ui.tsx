import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { sfx } from '../../lib/sfx';
import { ModalFrame } from './ModalFrame';

/* ----------------------------------------------------------------
   Shared mobile-first game UI primitives for Dr. Imposter.
   Rules baked in: touch targets >= 48px, bottom sheets on mobile,
   thumb-zone CTAs, minimal text, RTL-friendly (logical spacing).
   ---------------------------------------------------------------- */

export const isAr = (language: string) => language === 'Arabic';

/* ---------- Icon button (48px touch target) ---------- */
export const IconBtn: React.FC<{
  onClick?: () => void;
  label?: string;
  children: React.ReactNode;
  className?: string;
}> = ({ onClick, label, children, className = '' }) => (
  <button
    type="button"
    aria-label={label}
    title={label}
    onClick={onClick}
    className={`h-12 w-12 min-w-[48px] shrink-0 rounded-2xl bg-ink-3 border border-ink-4 text-white
                flex items-center justify-center transition-all active:scale-90 ${className}`}
  >
    {children}
  </button>
);

/* ---------- Big primary action button ---------- */
export const BigBtn: React.FC<{
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'coral' | 'gold' | 'dark';
  children: React.ReactNode;
  className?: string;
}> = ({ onClick, disabled, variant = 'primary', children, className = '' }) => {
  const v =
    variant === 'primary' ? 'btn-game-primary' :
    variant === 'coral' ? 'btn-game-coral' :
    variant === 'gold' ? 'btn-game-gold' : 'btn-game-dark';
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => { sfx.tap(); onClick?.(); }}
      className={`btn-game ${v} ${disabled ? 'opacity-40 pointer-events-none' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

/* ---------- Screen scaffold: header + scrollable body + docked footer ---------- */
export const Screen: React.FC<{
  title: string;
  onBack?: () => void;
  backLabel?: string;
  right?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
}> = ({ title, onBack, backLabel, right, children, footer }) => {
  const heading = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (!document.querySelector('.game-modal')) heading.current?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(frame);
  }, [title]);
  return (
  <div className="flex flex-col h-full min-h-0">
    <div className="shrink-0 flex items-center gap-3 py-3 px-4">
      {onBack && (
        <IconBtn onClick={onBack} label={backLabel || 'Back'}>
          <ChevronLeft className="rtl:rotate-180" size={22} />
        </IconBtn>
      )}
      <h2 ref={heading} tabIndex={-1} className="font-display font-bold text-xl sm:text-2xl text-white leading-snug flex-1 min-w-0 break-words outline-none">{title}</h2>
      {right}
    </div>
    <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar pb-4">
      {children}
    </div>
    {footer && (
      <div className="shrink-0 pt-3 pb-safe bg-gradient-to-t from-ink via-ink/90 to-transparent">
        {footer}
      </div>
    )}
  </div>
  );
};

/* ---------- Mode card for home screen ---------- */
export const ModeCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accent: 'mint' | 'gold' | 'pop' | 'lilac' | 'coral';
  onClick: () => void;
  badge?: string;
  actionLabel?: string;
  highlighted?: boolean;
}> = ({ icon, title, subtitle, accent, onClick, badge, actionLabel, highlighted }) => {
  const accents: Record<string, { iconBg: string; borderHover: string; badge: string }> = {
    mint: {
      iconBg: 'bg-mint/10 border-mint/25 text-mint',
      borderHover: 'hover:border-mint/40 active:border-mint/55',
      badge: 'bg-mint/10 border-mint/30 text-mint',
    },
    gold: {
      iconBg: 'bg-gold/10 border-gold/25 text-gold',
      borderHover: 'hover:border-gold/40 active:border-gold/55',
      badge: 'bg-gold/10 border-gold/30 text-gold',
    },
    pop: {
      iconBg: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-400',
      borderHover: 'hover:border-cyan-500/40 active:border-cyan-55',
      badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
    },
    lilac: {
      iconBg: 'bg-lilac/10 border-lilac/25 text-lilac',
      borderHover: 'hover:border-lilac/40 active:border-lilac/55',
      badge: 'bg-lilac/10 border-lilac/30 text-lilac',
    },
    coral: {
      iconBg: 'bg-coral/10 border-coral/25 text-coral',
      borderHover: 'hover:border-coral/40 active:border-coral/55',
      badge: 'bg-coral/10 border-coral/30 text-coral',
    },
  };
  const a = accents[accent];
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={() => { sfx.tap(); onClick(); }}
      className={`w-full min-h-[60px] p-3.5 sm:p-4 rounded-2xl border text-start transition-all duration-150 relative overflow-hidden group
                  flex items-center gap-3 cursor-pointer
                  focus-visible:ring-2 focus-visible:ring-mint focus-visible:outline-none ${
                    highlighted
                      ? 'border-mint/45 bg-ink-2/95 ring-1 ring-mint/25 shadow-[0_2px_14px_rgba(47,230,167,0.08)] ' + a.borderHover
                      : 'border-white/10 bg-ink-2/90 hover:bg-ink-2 ' + a.borderHover
                  }`}
    >
      <span className={`shrink-0 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl border ${a.iconBg}`}>
        {icon}
      </span>
      <span className="flex-1 min-w-0">
        <span className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
          <span className="font-display font-bold text-base text-white leading-tight">{title}</span>
          {badge && (
            <span className={`text-[0.8125rem] font-bold px-2 py-0.5 rounded-md border ${a.badge} whitespace-nowrap shrink-0`}>
              {badge}
            </span>
          )}
        </span>
        <span className="block text-[0.8125rem] text-white/75 font-medium mt-0.5 leading-snug">
          {subtitle}
        </span>
        {actionLabel && (
          <span className="block mt-1.5 text-[0.8125rem] font-bold text-mint bg-mint/15 border border-mint/30 px-2.5 py-1 rounded-lg w-fit flex items-center gap-1.5">
            <span>{actionLabel}</span>
            <ChevronRight size={13} className="rtl:rotate-180" />
          </span>
        )}
      </span>
      {!actionLabel && (
        <ChevronRight size={18} className="text-white/70 shrink-0 rtl:rotate-180 group-hover:text-white/80 transition-colors" />
      )}
    </motion.button>
  );
};

/* ---------- Segmented options (48px chips) ---------- */
export function SegOptions<T extends string | number>({
  options, value, onChange, cols,
}: {
  options: { id: T; label: string; emoji?: string }[];
  value: T;
  onChange: (v: T) => void;
  cols?: number;
}) {
  return (
    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols || options.length}, minmax(0,1fr))` }}>
      {options.map(o => {
        const active = o.id === value;
        return (
          <button
            key={String(o.id)}
            type="button"
            aria-pressed={active}
            onClick={() => { sfx.tick(); onChange(o.id); }}
            className={`opt-chip relative ${active
              ? 'bg-mint/15 border-mint text-mint shadow-[0_0_18px_rgba(47,230,167,0.18)]'
              : 'bg-ink-3/60 border-ink-4 text-white/60'}`}
          >
            {active && <span aria-hidden className="absolute top-0.5 end-1 text-[0.625rem] leading-none">✓</span>}
            {o.emoji && <span className="me-1">{o.emoji}</span>}{o.label}
          </button>
        );
      })}
    </div>
  );
}

/* ---------- Section label ---------- */
export const Label: React.FC<{ children: React.ReactNode; icon?: React.ReactNode }> = ({ children, icon }) => (
  <span className="flex items-center gap-1.5 text-sm font-semibold text-white/80 tracking-wide">
    {icon}{children}
  </span>
);

/* ---------- Bottom sheet (mobile-native pattern) ---------- */
export const Sheet: React.FC<{
  open: boolean;
  onClose: () => void;
  title: string;
  dir?: 'rtl' | 'ltr';
  children: React.ReactNode;
  footer?: React.ReactNode;
}> = ({ open, onClose, title, dir, children, footer }) => (
      <ModalFrame open={open} onClose={onClose} title={title} dir={dir} className="flex items-end sm:items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 320 }}
          className="relative w-full sm:max-w-md bg-ink-2 border-t border-x border-ink-4
                     rounded-t-[2rem] sm:rounded-3xl flex flex-col max-h-[92dvh] shadow-[0_-10px_60px_rgba(0,0,0,0.6)]"
        >
          <div className="shrink-0 pt-3 pb-1 flex justify-center">
            <span className="w-12 h-1.5 rounded-full bg-white/20" />
          </div>
          <div className="shrink-0 flex items-center justify-between px-5 pb-2">
            <h3 className="font-display font-bold text-xl text-white min-w-0 break-words">{title}</h3>
            <IconBtn onClick={onClose} label={dir === 'rtl' ? 'إغلاق' : 'Close'}>
              <X size={18} />
            </IconBtn>
          </div>
          <div className="flex-1 min-h-0 overflow-y-auto px-5 pb-4 custom-scrollbar">{children}</div>
          {footer && <div className="shrink-0 px-5 pt-2 pb-safe border-t border-white/5 bg-ink-2/95">{footer}</div>}
        </motion.div>
      </ModalFrame>
);

export function Disclosure({ title, children, summary, className = '' }: {
  title: string; children: React.ReactNode; summary?: React.ReactNode; className?: string;
}) {
  return <details className={`disclosure panel ${className}`}>
    <summary className="flex items-center gap-2 px-4 py-3 cursor-pointer font-display font-bold text-base">
      <span className="flex-1 min-w-0">{title}</span>
      {summary && <span className="text-sm text-white/70">{summary}</span>}
      <ChevronRight aria-hidden size={18} className="disclosure-chevron shrink-0 rtl:rotate-180" />
    </summary>
    <div className="px-4 pb-4 space-y-3">{children}</div>
  </details>;
}

/* ---------- Small stat pill ---------- */
export const StatPill: React.FC<{ icon: React.ReactNode; value: React.ReactNode; tone?: 'mint' | 'gold' | 'pop'; label?: string }> = ({ icon, value, tone = 'mint', label }) => {
  const tones = {
    mint: 'text-mint border-mint/30 bg-mint/10',
    gold: 'text-gold border-gold/30 bg-gold/10',
    pop: 'text-pop border-pop/30 bg-pop/10',
  } as const;
  return (
    <span aria-label={label} className={`inline-flex items-center gap-1.5 px-3 h-9 rounded-full border text-base font-display font-bold ${tones[tone]}`}>
      {icon}{value}
    </span>
  );
};

/* ---------- Dots progress (hints etc.) ---------- */
export const Dots: React.FC<{ total: number; done: number; tone?: string }> = ({ total, done, tone = 'bg-mint' }) => (
  <span className="flex items-center gap-1.5">
    {Array.from({ length: total }).map((_, i) => (
      <span key={i} className={`h-2.5 w-2.5 rounded-full ${i < done ? tone : 'bg-white/15'}`} />
    ))}
  </span>
);

/* ---------- Animated number (score count-up) ---------- */
export const CountUp: React.FC<{ to: number; className?: string }> = ({ to, className }) => {
  const [v, setV] = useState(to);
  useEffect(() => {
    const start = performance.now();
    const dur = 800;
    let raf = 0;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [to]);
  return <span className={className}>{v}</span>;
};
