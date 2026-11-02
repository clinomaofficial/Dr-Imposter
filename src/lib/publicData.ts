import { collection, doc, getDocsFromServer, getDocFromServer, limit, orderBy, query, where } from 'firebase/firestore';
import { db, withCloudAccess } from '../firebase';
import { readLocal, writeLocal } from './localStore';
import type { AdCampaign } from '../types/ads';

export interface PublicData {
  ads: AdCampaign[];
  announcement: any | null;
  gameConfig: { turnTimeLimit?: number; questionsPerPlayer?: number };
  refreshedAt: number;
}
const KEY = 'clinoma-public-data-v1';
export const cachedPublicData = () => readLocal<PublicData>(KEY, {
  ads: [], announcement: null, gameConfig: {}, refreshedAt: 0,
});
export function subscribePublicData(listener: (data: PublicData) => void) {
  const update = () => listener(cachedPublicData());
  update();
  window.addEventListener('storage', update);
  window.addEventListener('clinoma-local-data', update);
  return () => {
    window.removeEventListener('storage', update);
    window.removeEventListener('clinoma-local-data', update);
  };
}
let refresh: Promise<PublicData> | null = null;
export function refreshPublicData(): Promise<PublicData> {
  refresh ??= withCloudAccess(async () => {
    const [ads, announcement, settings] = await Promise.all([
      getDocsFromServer(query(collection(db, 'ads'), where('isActive', '==', true), limit(25))),
      getDocsFromServer(query(collection(db, 'announcements'), orderBy('createdAt', 'desc'), limit(1))),
      getDocFromServer(doc(db, 'settings', 'gameConfig')),
    ]);
    const data: PublicData = {
      ads: ads.docs.map(d => ({ ...d.data(), id: d.id } as AdCampaign)),
      announcement: announcement.empty ? null : { ...announcement.docs[0].data(), id: announcement.docs[0].id },
      gameConfig: settings.exists() ? settings.data() : {}, refreshedAt: Date.now(),
    };
    writeLocal(KEY, data);
    return data;
  }).finally(() => { refresh = null; });
  return refresh;
}
