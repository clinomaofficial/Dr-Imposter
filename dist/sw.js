const CACHE_PREFIX = 'clinoma-offline-';
const CACHE_NAME = CACHE_PREFIX + '0c8404d7c6054cf4';
const PRECACHE = ["/_redirects","/assets/MedicalCupView-CDRPwoSi.js","/assets/OnboardingView-bN04XxxY.js","/assets/geist-cyrillic-ext-wght-normal-DjL33-gN.woff2","/assets/geist-cyrillic-wght-normal-BEAKL7Jp.woff2","/assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","/assets/geist-latin-wght-normal-BgDaEnEv.woff2","/assets/geist-vietnamese-wght-normal-6IgcOCM7.woff2","/assets/index-CKU-EABo.js","/assets/index-zaIclM4t.css","/assets/stethoscope-CEusPiMt.js","/images/words/w1.webp","/images/words/w127.webp","/images/words/w128.webp","/images/words/w16.webp","/images/words/w190.webp","/images/words/w191.webp","/images/words/w193.webp","/images/words/w2.webp","/images/words/w22.webp","/images/words/w227.webp","/images/words/w228.webp","/images/words/w229.webp","/images/words/w230.webp","/images/words/w236.webp","/images/words/w237.webp","/images/words/w238.webp","/images/words/w239.webp","/images/words/w240.webp","/images/words/w247.webp","/images/words/w252.webp","/images/words/w254.webp","/images/words/w27.webp","/images/words/w33.webp","/images/words/w34.webp","/images/words/w377.webp","/images/words/w41.webp","/images/words/w429.webp","/images/words/w430.webp","/images/words/w431.webp","/images/words/w45.webp","/images/words/w48.webp","/images/words/w54.webp","/images/words/w56.webp","/images/words/w6.webp","/images/words/w68.webp","/images/words/w70.webp","/images/words/w73.webp","/images/words/w77.webp","/images/words/w89.webp","/images/words/w90.webp","/images/words/w91.webp","/index.html","/logo.jpg","/manifest.json","/sounds/lose.wav","/sounds/streak.wav","/sounds/urgent.wav","/sounds/win.wav"] || ['/index.html', '/manifest.json', '/logo.jpg'];

self.addEventListener('install', event => {
  // The worker waits until every game chunk and bundled asset is available.
  // No skipWaiting: an old open game keeps its compatible chunks until closed.
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => (key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME) || key === 'dr-imposter-v2')
      .map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Auth, Firestore, third-party media and APIs never enter the static cache.
  if (event.request.method !== 'GET' || url.origin !== self.location.origin ||
      url.pathname.startsWith('/api/') || url.pathname.startsWith('/__/') ||
      url.pathname === '/sw.js') return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (event.request.mode === 'navigate') {
      return (await cache.match('/index.html')) || fetch(event.request);
    }
    const cached = await cache.match(event.request);
    if (cached) return cached; // Immutable assets: no background download per use.
    return fetch(event.request);
  })());
});
