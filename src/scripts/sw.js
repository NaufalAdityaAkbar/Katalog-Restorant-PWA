import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
import { ExpirationPlugin } from 'workbox-expiration';

// Precache manifest
precacheAndRoute(self.__WB_MANIFEST || []);

// Cache untuk halaman offline
precacheAndRoute([
  {
    url: 'offline.html',
    revision: '1',
  },
]);

// Cache untuk API dengan strategi yang berbeda untuk setiap endpoint
registerRoute(
  ({ url }) => url.href.includes('restaurant-api.dicoding.dev/list'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-list-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24, // 1 hari
      }),
    ],
  })
);

// Perbaikan untuk caching detail restaurant
registerRoute(
  ({ url }) => url.href.includes('restaurant-api.dicoding.dev/detail/'),
  new StaleWhileRevalidate({
    cacheName: 'restaurant-detail-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 7, // 7 hari
        maxEntries: 50,
      }),
    ],
  })
);

// Cache untuk gambar
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'restaurant-images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
      }),
    ],
  })
);

// Tambahkan handler khusus untuk request detail restaurant
self.addEventListener('fetch', event => {
  if (event.request.url.includes('restaurant-api.dicoding.dev/detail/')) {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(networkResponse => {
            const responseToCache = networkResponse.clone();
            caches.open('restaurant-detail-cache').then(cache => {
              cache.put(event.request, responseToCache);
            });
            return networkResponse;
          })
          .catch(() => {
            return caches.match('offline.html');
          });
      })
    );
  }
});

// Fallback untuk navigasi
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // Coba ambil dari network
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch {
          // Jika offline, coba ambil dari cache
          const cache = await caches.open('restaurant-detail-cache');
          const cachedResponse = await cache.match(event.request);
          if (cachedResponse) {
            return cachedResponse;
          }
          // Jika tidak ada di cache, tampilkan halaman offline
          const offlineResponse = await caches.match('offline.html');
          return offlineResponse;
        }
      })()
    );
  }
});

// Tambahkan event listener untuk WebSocket error
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'WEBSOCKET_ERROR') {
    console.log('WebSocket connection failed, using fallback mechanism');
  }
});
