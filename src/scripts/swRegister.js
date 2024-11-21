// swRegister.js
import { Workbox } from 'workbox-window';

export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('./sw.bundle.js');

    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        console.log('Ada pembaruan konten!');
        if (confirm('Ada konten baru tersedia. Muat ulang halaman?')) {
          window.location.reload();
        }
      }
    });

    wb.register()
      .then((registration) => {
        console.log('Service worker berhasil didaftarkan:', registration);
      })
      .catch((error) => {
        console.error('Gagal mendaftarkan service worker:', error);
      });
  }
}
