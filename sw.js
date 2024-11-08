let cacheName = "delices-du-web";
let filesToCache = ["/", "/index.html", "/massas", "/doces", "/carnes", "/images","/manifest.json",
                    "/CSS/styles.css", "/CSS/massas.css", "/CSS/doces.css", "/CSS/carnes.css", "/js/main.js",
                    "/images/icon.png"];

/* inicializando a service worker e fazendo o download do conteúdo da aplicação */
self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) { return cache.addAll(filesToCache);
        })
    );
});

/* disponibilizando o conteudo quando estiver offline*/
self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => { 
            return response || fetch(e.request);
        })
    );
}); 