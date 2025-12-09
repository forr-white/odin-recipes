const CACHE_NAME = 'cak-cache-v1';

// You can tweak these to match your actual files
const CORE_ASSETS = [
  '/',
  'index.html',
  'recipe-builder.html',
  'license.html',
  'recipe.css',
  'images/logo.svg',
  'manifest.json'
];

// Install: pre-cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(CORE_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for same-origin GET requests
self.addEventListener('fetch', event => {
  const request = event.request;

  // Only handle GET and same-origin
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) {
        return cached;
      }

      return fetch(request)
        .then(response => {
          // Optional: cache recipe pages & images as they're fetched
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          return response;
        })
        .catch(() => {
          // Optional: return a fallback page or image here
        });
    })
  );
});
