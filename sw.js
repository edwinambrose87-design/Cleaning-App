self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // This allows the app to work offline-ish and satisfies the install prompt
  event.respondWith(fetch(event.request));
});
