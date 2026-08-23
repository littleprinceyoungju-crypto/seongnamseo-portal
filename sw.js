// 최소 서비스워커: 홈화면 추가(설치) 인식용. 별도 오프라인 캐싱은 하지 않습니다.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
