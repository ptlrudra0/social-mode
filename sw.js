const V='social-mode-v3';const A=['./','index.html','scene.jpg','style.css','app.js','vendor.js','manifest.webmanifest','fonts/ox500.woff2','fonts/ox700.woff2','fonts/is400.woff2','fonts/is600.woff2','fonts/jb400.woff2','fonts/dseg7.woff2','fonts/dseg14.woff2'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('social-mode-')&&x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==location.origin)return;
 e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(V).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request).then(m=>m||caches.match('index.html'))))});
