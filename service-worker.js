"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","fc572555e01a845c2ebc5f015fb9332a"],["static/css/main.995e9faa.css","32a868dc2ca07aa93d67c64b64be09dd"],["static/js/main.61bdc08f.js","9ba4114008819a01416738797fe3d2b4"],["static/media/Banderas(Granada)-min.8469c911.JPG","8469c911f53d2e923bae5641fb90df16"],["static/media/Bendición(Sevilla)-min.0cbfebd4.JPG","0cbfebd4bad1e89833fc399ae5bc382e"],["static/media/Callejón(Barcelona)-min.60b3c13c.JPG","60b3c13cbeca62747007f200ea20d061"],["static/media/Gitanos(Granada)-min.dcd23548.JPG","dcd23548d71dc3059632819804032123"],["static/media/IMG_5034-min.68b45e8b.JPG","68b45e8b7b5452536de78d33bf2e9e88"],["static/media/IMG_6831-min.21b7c577.JPG","21b7c5778151a5b8fcecb5dff9d63815"],["static/media/IMG_7013-min.15af2be9.JPG","15af2be96dd1334e0ebcfa86dcf1a5a5"],["static/media/IMG_7026-min.94bbdcb7.JPG","94bbdcb76180555c7a191af73466e1fa"],["static/media/IMG_7081-min.74b5c022.JPG","74b5c022cfc205fc65bb41f5271797b9"],["static/media/IMG_8456-min.6513198c.JPG","6513198c0588d77cf0a4e1db0f14a56c"],["static/media/IMG_8463-min.3abc241b.JPG","3abc241b4cbf02b5949509552292824a"],["static/media/IMG_8464-min.f2a5b444.JPG","f2a5b4444117ac512c61f809599edb70"],["static/media/IMG_8656-min.8068ef2a.JPG","8068ef2a2faec06be17f59f294a43b8e"],["static/media/IMG_8705-min.72c09b4b.JPG","72c09b4b03c4217e4ecadfd87caf8104"],["static/media/IMG_8720-min.10e44cae.JPG","10e44caeda46f64ce4953b8099befdb2"],["static/media/IMG_8731-min.db4f0716.JPG","db4f0716b21c7a8800169de80d3e0c0b"],["static/media/IMG_8742-min.77c6b3a7.JPG","77c6b3a72e83ab5dc5174837db5cda41"],["static/media/IMG_8791-min.44358f8f.JPG","44358f8f7df38da22a67565da73d594b"],["static/media/IMG_9115-min.6489adbe.JPG","6489adbe7f83bb20214c9e6ba705babf"],["static/media/IMG_9501-min.384c15bb.JPG","384c15bbe32214e3f0faac726e7646c6"],["static/media/IMG_9574-min.0ec3a84e.JPG","0ec3a84e7151926cd3e537ce1ff08b3e"],["static/media/IMG_9580-min.e3375afc.JPG","e3375afc498cad6afd1a5d2ad8b12aab"],["static/media/IMG_9712-min.78f8651b.JPG","78f8651bcbd72c99c4332ac6b7565904"],["static/media/IMG_9762-min.7d882857.JPG","7d882857051bfa1d6058198148a74bdd"],["static/media/IMG_9818-min.53ec2251.JPG","53ec22510472c55a49ea7429b72ce922"],["static/media/IMG_9868-min.08f4002f.JPG","08f4002f999e2ebdc2ff205e438b0a1d"],["static/media/IMG_9926-min.02a39f42.JPG","02a39f429538b47c82920feba96d1a01"],["static/media/IMG_9970-min.bfa003b4.JPG","bfa003b439047bab187cd0af24bdbf71"],["static/media/Iglesia(Sevilla)-min.58ec9462.JPG","58ec94629ade5872964988e35b8fabb7"],["static/media/LaMujerBlanca(Sevilla)-min.f5d0818f.JPG","f5d0818f13d32bc775c21f95f1626e13"],["static/media/LaPuerta(Lekeitio)-min.be787a83.JPG","be787a83fdc1733824ef48e1b9c5b9b8"],["static/media/Merienda(Sevilla)-min.e9077800.JPG","e9077800883e18482ba6bfbb33462bec"],["static/media/MiHogar(Madrid)-min.c2f6db93.JPG","c2f6db931cfa622cd3bbcd5f2962f2c9"],["static/media/Músico(Granada)-min.65c4551a.JPG","65c4551abd2a06d785f9561354da1d27"],["static/media/Paraguas(Escorial)-min.e213c40a.jpg","e213c40a884b637f131fcc7c9e1a2d30"],["static/media/Rastro(Madrid)-min.88aa1942.JPG","88aa1942a0b69cbd4ed9d5ba91a1eef4"],["static/media/Sol(Madrid)-min.4b84d87f.JPG","4b84d87f0c4b0461ef1f5a510bb63df6"],["static/media/Techos(Sevilla)-min.80644eef.JPG","80644eef43527d107427af806ddb3fb6"],["static/media/Vendedor(Sevilla)-min.68525e35.JPG","68525e35f1447a82edd8f5d1a86a4922"],["static/media/asc_circle_Logo.6e6c26f3.png","6e6c26f39f6c877b2734b2f2c6544e8a"],["static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var i=new URL(e);return c&&i.pathname.match(c)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),i=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});