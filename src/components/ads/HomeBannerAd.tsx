import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { AdCampaign } from '../../types/ads';
import { getRandomAdForPlacement, trackAdImpression, trackAdClick, subscribeToAds } from '../../lib/adsEngine';

interface HomeBannerAdProps {
  language?: string;
}

export function HomeBannerAd({ language = 'Arabic' }: HomeBannerAdProps) {
  const [ad, setAd] = useState<AdCampaign | null>(null);
  const impressionTrackedRef = useRef<string | null>(null);

  useEffect(() => {
    const unsub = subscribeToAds(() => {
      const bannerAd = getRandomAdForPlacement('home_banner');
      if (!bannerAd) {
        setAd(null);
        impressionTrackedRef.current = null;
        return;
      }
      if (bannerAd && bannerAd.id !== impressionTrackedRef.current) {
        setAd(bannerAd);
        impressionTrackedRef.current = bannerAd.id;
        trackAdImpression(bannerAd.id);
      }
    });

    // Also try immediately
    const immediateAd = getRandomAdForPlacement('home_banner');
    if (immediateAd && immediateAd.id !== impressionTrackedRef.current) {
      setAd(immediateAd);
      impressionTrackedRef.current = immediateAd.id;
      trackAdImpression(immediateAd.id);
    }

    return () => unsub();
  }, []);

  if (!ad) return null;

  const isAr = language === 'Arabic';

  return (
    <button type="button"
      onClick={() => trackAdClick(ad.id, ad.ctaLink)}
      className="w-full p-3 rounded-2xl bg-gradient-to-r from-ink-2 via-ink-3 to-ink-2 border border-gold/30 flex items-center justify-between gap-3 shadow-md cursor-pointer hover:border-gold/60 transition-all active:scale-[0.99]"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-12 h-12 rounded-xl bg-ink-1 border border-white/10 overflow-hidden shrink-0">
          <img
            src={ad.mediaUrl}
            alt="sponsor"
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = 'logo.jpg'; }}
          />
        </div>
        <div className="min-w-0 space-y-0.5">
          <div className="flex items-center gap-1.5 text-[0.8125rem] font-black uppercase text-gold">
            <Sparkles size={11} />
            <span>{ad.sponsorName}</span>
          </div>
          <p className="text-xs font-bold text-white truncate max-w-[200px] sm:max-w-md">
            {ad.title}
          </p>
        </div>
      </div>

      <span
        className="px-3 py-1.5 rounded-xl bg-gold text-amber-950 text-xs font-display font-bold shrink-0 flex items-center gap-1"
      >
        <span>{ad.ctaText || (isAr ? 'العرض ↗' : 'Offer ↗')}</span>
      </span>
    </button>
  );
}
