const CACHE_NAME = "solar-system-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "styles.css",
  "app.js",
  "manifest.json",
  "data/topics.json",
  "images/mars.png",
  "images/jupsiter.png",
  "images/saturn.png"
  // Add audio files and icons here
];

// Install event — caching essential files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Fetch event — serve files from cache if offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
