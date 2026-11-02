import { cachedPublicData, subscribePublicData } from './publicData';
import { readLocal, writeLocal } from './localStore';
import { AdCampaign, AdPlacement } from '../types/ads';

let cachedAds: AdCampaign[] = cachedPublicData().ads;
let adsListenerInitialized = false;

type AdListener = (ads: AdCampaign[]) => void;
const listeners = new Set<AdListener>();

export const subscribeToAds = (fn: AdListener) => {
  listeners.add(fn);
  if (cachedAds.length > 0) {
    try { fn(cachedAds); } catch (e) { console.error(e); }
  }
  return () => { listeners.delete(fn); };
};

// Initialize real-time ads listener
export const initAdsListener = () => {
  if (adsListenerInitialized) return;
  adsListenerInitialized = true;

  try {
    subscribePublicData(({ ads: list }) => {
      cachedAds = list;
      listeners.forEach(fn => {
        try { fn(list); } catch (e) { console.error(e); }
      });
    });
  } catch (err) {
    console.warn("⚠️ Failed to init ads listener:", err);
  }
};

export const getActiveAdsByPlacement = (placement: AdPlacement): AdCampaign[] => {
  return cachedAds.filter(ad => ad.placement === placement && ad.isActive);
};

export const getRandomAdForPlacement = (placement: AdPlacement): AdCampaign | null => {
  const eligible = getActiveAdsByPlacement(placement);
  if (eligible.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * eligible.length);
  return eligible[randomIndex];
};

export const trackAdImpression = async (adId: string) => {
  trackLocalAd(adId, 'impressions');
};

function trackLocalAd(adId: string, field: 'impressions' | 'clicks') {
  const stats = readLocal<Record<string, { impressions: number; clicks: number }>>('clinoma-ad-stats', {});
  const active = new Set(cachedPublicData().ads.map(ad => ad.id));
  for (const id of Object.keys(stats)) if (!active.has(id)) delete stats[id];
  if (!active.has(adId)) return;
  stats[adId] ??= { impressions: 0, clicks: 0 };
  stats[adId][field]++;
  writeLocal('clinoma-ad-stats', stats);
}

export const trackAdClick = async (adId: string, url: string) => {
  trackLocalAd(adId, 'clicks');

  if (/^https?:\/\//i.test(url)) {
    window.open(url, '_blank', 'noopener,noreferrer');
  }
};

// Tracks matches played count in sessionStorage
const MATCH_COUNT_KEY = 'dr_imposter_matches_played_count';

export const incrementAndGetMatchesPlayed = (): number => {
  try {
    const current = Number(sessionStorage.getItem(MATCH_COUNT_KEY) || '0');
    const next = current + 1;
    sessionStorage.setItem(MATCH_COUNT_KEY, String(next));
    return next;
  } catch {
    return 1;
  }
};
