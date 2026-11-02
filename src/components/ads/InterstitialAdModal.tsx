import { ModalFrame } from '../game/ModalFrame';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Sparkles, Megaphone, Play } from 'lucide-react';
import { AdCampaign } from '../../types/ads';
import { trackAdImpression, trackAdClick } from '../../lib/adsEngine';

interface InterstitialAdModalProps {
  ad: AdCampaign | null;
  language?: 'Arabic' | 'English';
  isOpen: boolean;
  onClose: () => void;
  headerTitle?: string;
  skipButtonText?: string;
}

export function InterstitialAdModal({
  ad,
  language = 'English',
  isOpen,
  onClose,
  headerTitle = 'إعلان الراعي الطبي',
  skipButtonText = 'تخطي'
}: InterstitialAdModalProps) {
  const ar = language === 'Arabic';
  const [secondsRemaining, setSecondsRemaining] = useState(5);
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    if (!isOpen || !ad) return;

    // Track impression in Firestore
    trackAdImpression(ad.id);

    const initialDuration = Math.max(1, ad.durationSeconds || 5);
    setSecondsRemaining(initialDuration);
    setCanSkip(false);

    const timer = setInterval(() => {
      setSecondsRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setCanSkip(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, ad]);

  if (!isOpen || !ad) return null;

  return (
    <AnimatePresence>
      <ModalFrame open={isOpen} onClose={onClose} dismissable={canSkip} title={ar ? 'إعلان' : 'Advertisement'} className="flex items-center justify-center p-4" dir={ar ? 'rtl' : 'ltr'}>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-sm bg-ink-2 border border-gold/40 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,197,61,0.2)] flex flex-col max-h-[90dvh] overflow-y-auto"
        >
          {/* Top Bar with Skip Timer */}
          <div className="px-4 py-3 bg-ink-3/80 border-b border-white/5 flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-[0.8125rem] font-black uppercase text-gold">
              <Megaphone size={14} />
              {headerTitle}
            </span>

            {canSkip ? (
              <button
                type="button"
                onClick={onClose}
                className="min-h-[48px] px-3.5 py-2 rounded-2xl bg-gold/20 hover:bg-gold/30 text-gold text-xs font-bold flex items-center gap-1 active:scale-95 transition-all border border-gold/40"
              >
                <span>{skipButtonText}</span>
                <X size={14} />
              </button>
            ) : (
              <span className="px-2.5 py-0.5 rounded-full bg-gold/15 text-gold text-xs font-mono font-bold border border-gold/30">
                {ar ? 'متابعة خلال' : 'Continue in'} {secondsRemaining}s
              </span>
            )}
          </div>

          {/* Ad Media Image */}
          <div className="relative aspect-video w-full bg-ink-3 overflow-hidden">
            <img
              src={ad.mediaUrl}
              alt={ad.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'logo.jpg';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-2 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-2 right-3 left-3 flex items-center justify-between text-xs text-white/80">
              <span className="font-bold bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/10 text-[0.8125rem] text-white">
                {ad.sponsorName}
              </span>
              <span className="text-[0.8125rem] text-gold bg-black/50 px-1.5 py-0.5 rounded">
                {ar ? 'مُموَّل' : 'Sponsored'}
              </span>
            </div>
          </div>

          {/* Ad Body Content */}
          <div className="p-5 space-y-4 text-center">
            <h3 className="font-display font-bold text-lg text-white leading-snug">
              {ad.title}
            </h3>

            {/* CTA Button */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => {
                  trackAdClick(ad.id, ad.ctaLink);
                }}
                className="w-full h-12 rounded-2xl bg-gradient-to-r from-gold via-amber-400 to-gold text-amber-950 font-display font-bold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg"
              >
                <span>{ad.ctaText || (ar ? 'عرض التفاصيل' : 'View details')}</span>
                <ExternalLink size={16} />
              </button>

              {canSkip && (
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full min-h-[48px] py-2 text-sm text-white/70 hover:text-white/80 font-bold active:scale-95 transition-colors"
                >
                  {ar ? 'العودة للعبة' : 'Return to game'}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </ModalFrame>
    </AnimatePresence>
  );
}
