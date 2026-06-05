const CACHE_NAME = "anime-mission-v3";
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon.svg"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(resp => resp || fetch(event.request)));
});