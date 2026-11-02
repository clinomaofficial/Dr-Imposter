import React, { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../../lib/sfx';

const COLORS = ['#2FE6A7', '#FF5470', '#FFC53D', '#38BDF8', '#A78BFA', '#ffffff'];

/** Lightweight confetti burst. Re-fires whenever `burst` (a counter) increments. */
export const Confetti: React.FC<{ burst: number; count?: number }> = ({ burst, count = 42 }) => {
  const [pieces, setPieces] = useState<number[]>([]);

  useEffect(() => {
    if (burst <= 0 || prefersReducedMotion()) return;
    setPieces(Array.from({ length: count }, (_, i) => i));
    const t = setTimeout(() => setPieces([]), 2200);
    return () => clearTimeout(t);
  }, [burst, count]);

  if (pieces.length === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[300] overflow-hidden" aria-hidden="true">
      {pieces.map(i => {
        const left = Math.random() * 100;
        const delay = Math.random() * 0.25;
        const dur = 1.4 + Math.random() * 0.8;
        const size = 7 + Math.random() * 7;
        const color = COLORS[i % COLORS.length];
        const drift = (Math.random() - 0.5) * 160;
        const rot = Math.random() * 720 - 360;
        const round = Math.random() > 0.6;
        return (
          <span
            key={`${burst}-${i}`}
            className="absolute top-[-4%]"
            style={{
              left: `${left}%`,
              width: size,
              height: round ? size : size * 0.45,
              background: color,
              borderRadius: round ? '50%' : 2,
              animation: `di-confetti ${dur}s cubic-bezier(0.22, 0.61, 0.36, 1) ${delay}s forwards`,
              ['--di-drift' as any]: `${drift}px`,
              ['--di-rot' as any]: `${rot}deg`,
            }}
          />
        );
      })}
    </div>
  );
};
