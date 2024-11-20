Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('menambahkan review baru ke restoran', async ({ I }) => {
  // Klik restoran pertama untuk melihat detail
  I.click('.btn-detail');
  I.wait(2);

  // Memastikan form review terlihat
  I.seeElement('#reviewForm');
  
  // Mengisi form review
  I.fillField('#name', 'Test User');
  I.fillField('#review', 'Makanan enak dan pelayanan ramah!');
  
  // Submit review
  I.click('.submit-review');
  I.wait(2);

  // Memastikan review baru muncul
  I.see('Test User');
  I.see('Makanan enak dan pelayanan ramah!');
});

Scenario('mencoba submit review dengan form kosong', async ({ I }) => {
  // Klik restoran pertama
  I.click('.btn-detail');
  I.wait(2);

  // Coba submit form kosong
  I.click('.submit-review');
  
  // Seharusnya muncul validasi HTML5
  I.seeElement('input:invalid');
});

Scenario('melihat daftar review yang ada', async ({ I }) => {
  // Klik restoran pertama
  I.click('.btn-detail');
  I.wait(2);

  // Memastikan container review terlihat
  I.seeElement('.reviews-container');
  
  // Memastikan ada review yang ditampilkan
  I.seeElement('.review-card');
  
  // Memastikan setiap review memiliki nama dan tanggal
  I.seeElement('.review-name');
  I.seeElement('.review-date');
}); 