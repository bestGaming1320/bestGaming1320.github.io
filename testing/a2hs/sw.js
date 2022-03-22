self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('icon').then((c) => c.addAll([
      'icon.png',
      'lipsum.html',
      '../../default.css',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});