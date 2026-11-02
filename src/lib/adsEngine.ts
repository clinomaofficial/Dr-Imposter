import { db } from '../firebase';
import { collection, doc, updateDoc, increment, onSnapshot, query, where } from 'firebase/firestore';
import { AdCampaign, AdPlacement } from '../types/ads';

let cachedAds: AdCampaign[] = [];
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
    const q = query(collection(db, 'ads'), where('isActive', '==', true));
    onSnapshot(q, (snapshot) => {
      const list: AdCampaign[] = [];
      snapshot.forEach(docSnap => {
        list.push({ id: docSnap.id, ...docSnap.data() } as AdCampaign);
      });
      cachedAds = list;
      listeners.forEach(fn => {
        try { fn(list); } catch (e) { console.error(e); }
      });
    }, (err) => {
      console.warn("⚠️ Ads real-time listener warning:", err);
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
  try {
    const adRef = doc(db, 'ads', adId);
    await updateDoc(adRef, {
      impressionsCount: increment(1)
    });
  } catch (e) {
    // Silently fail without interrupting game flow
  }
};

export const trackAdClick = async (adId: string, url: string) => {
  try {
    const adRef = doc(db, 'ads', adId);
    updateDoc(adRef, {
      clicksCount: increment(1)
    }).catch(() => {});
  } catch (e) {}

  if (url) {
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
