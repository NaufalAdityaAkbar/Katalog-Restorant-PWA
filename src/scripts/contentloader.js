// contentloader.js
export function loadContent() {
  // Sembunyikan spinner loading
  document.getElementById('loading-spinner').style.display = 'none';

  // Tampilkan konten utama
  document.querySelector('.content').style.display = 'block';
}

// Fungsi untuk menunda pemuatan konten
export function delayContentLoad() {
  setTimeout(loadContent, 1000); // Delay 1 detik untuk efek loading
}

// Panggil fungsi delayContentLoad saat halaman dimuat
window.onload = delayContentLoad;
