"use strict";var precacheConfig=[["/index.html","d05c37a4c7a7bd4fa729e6c115b4fc73"],["/static/css/main.71112c93.css","2f2c33f45befaafc28ed20b7c88dbe65"],["/static/js/main.3d10c70b.js","363ef83589bd4147621eb96202bc0bce"],["/static/media/chess01.2bbadcc3.PNG","2bbadcc30dd1fed959b2a766ee10b506"],["/static/media/chess02.50a0a8bf.PNG","50a0a8bffe0de66ff9fc49e2d1d5460d"],["/static/media/chess03.55591eba.PNG","55591ebac1b94e4d028bf66e2902da69"],["/static/media/chess04.066ae60f.PNG","066ae60f5633170ad1485322ca1c1d5b"],["/static/media/cvmaze_maze.7d07bc39.PNG","7d07bc39a9b9415f89e74e4974128728"],["/static/media/cvmaze_win.cd6ab00f.PNG","cd6ab00ff99c60e4363e949859db9b6c"],["/static/media/dejaphoto_albums.51cbb0f7.png","51cbb0f7577924394ccabd4bcac27db6"],["/static/media/dejaphoto_alt.15043b89.png","15043b899347630655b2f875aa6e62a0"],["/static/media/dejaphoto_friendslist.26b7be8b.png","26b7be8bec62db42eabff8dc6b6da0da"],["/static/media/dejaphoto_settings.6c3fe056.png","6c3fe0569114048fb55db3e9eab7ceaa"],["/static/media/dejaphoto_signin.1d42ba62.png","1d42ba62b2e349f72c837fe274e21f2a"],["/static/media/geisel.b6817846.jpg","b6817846febeae9c961273fc8df46024"],["/static/media/thumbnail_chatanalyzer.813f4a1b.PNG","813f4a1b02e4e5e9fe9b62799600ae63"],["/static/media/thumbnail_chess.71764257.PNG","717642576ee7ca9b634ea4184932fa9a"],["/static/media/thumbnail_cvmaze.a7ab69b3.PNG","a7ab69b3e3cd038a9967aac1481cb71f"],["/static/media/thumbnail_dejaphoto.4d7f0f88.png","4d7f0f884274f5eb31dd040f800b0d36"],["/static/media/thumbnail_imagecluster.1490bde9.jpg","1490bde9705db8bb24119a6cdee6a8f7"],["/static/media/thumbnail_platformingai.a5c1c1db.PNG","a5c1c1db6729de492acdc8a4c3d4ffcf"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),c.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),c=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var c="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});