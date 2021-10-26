const TICsPWA = "dev-TICsPWA-site-v1";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/rick.jpg",
    "/images/morty.jpeg",
    "/images/summer.jpg",
    "/images/Squanchy.jpg",
    "/images/birdperson.jpg",
    "/images/beth.png",
    "/images/jerry.jpeg",
    "/images/popi.png",
    "/images/meeseeks.jpg"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(TICsPWA).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});