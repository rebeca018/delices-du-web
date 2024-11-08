let cacheName = "delices-du-web";
let filesToCache = ["/", "/index.html", "/massas", "/doces", "/carnes", "/manifest.json",
                    "/CSS/styles.css", "/CSS/massas.css", "/CSS/doces.css", "/CSS/carnes.css", "/js/main.js",
                    "/images/icon.png", "/images/image1.png", "/images/image2.png", "/images/image3.png", 
                    "/images/image4.png", "/images/image5.png", "/images/image6.png",
                    "/images/image7.png", "/images/image8.png", "/images/imagem9.png",
                    "/images/pwa-icon-256.png", "/images/pwa-icon-512.png" ];

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