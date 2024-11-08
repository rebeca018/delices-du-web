let cacheName = "my-horario-pwa";
let filesToCache = ["/", "/index.html", "/massas.html", "/doces.html", "/carnes.html",
                    "/css/style.css", "/css/massas.css", "/css/doces.css", "/css/carnes.css", "/js/main.js"];

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