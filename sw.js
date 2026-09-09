// sw.js
// Service Worker minimal untuk memenuhi syarat instalasi PWA di Chrome
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // Membiarkan browser menangani request secara default
    // Kehadiran event 'fetch' ini adalah syarat wajib Chrome untuk mengaktifkan tombol Install
});
