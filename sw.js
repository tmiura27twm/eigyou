// 営業ツール ラッパー Service Worker（インストール要件用・最小）
const CACHE = 'eigyo-v3';
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './index.html', './tanto.html', './zaiko.html', './manifest.json']).catch(() => {})));
});
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
