const CACHE_PREFIX = 'clinoma-offline-';
const CACHE_NAME = CACHE_PREFIX + '__BUILD_VERSION__';
const PRECACHE = /* __PRECACHE_FILES__ */ ['/index.html', '/manifest.json', '/logo.jpg'];

self.addEventListener('install', event => {
  // The worker waits until every game chunk and bundled asset is available.
  // No skipWaiting: an old open game keeps its compatible chunks until closed.
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
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
