var cacheName = "temConverterShell";

var fileToCache = [
    '/',
    '/index.html',
    '/scripts/app.js',
    '/styles/app.css'
]

self.addEventListener('install', function(event) {
    console.log('ServiceWorker installing');
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('Service Worker caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker activating');
    event.waitUntil(
        caches.key().then(functin(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName) {
                    console.log('Service Worker removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
});