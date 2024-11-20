Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('showing empty favorite restaurants', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.favorite-empty h2');
  I.see('Tidak ada restoran favorit', '.favorite-empty h2');
});

Scenario('liking one restaurant', async ({ I }) => {
  // Ke halaman utama
  I.amOnPage('/');
  I.waitForElement('.posts');
  I.waitForElement('.post-item');
  I.click('.btn-detail');
  
  // Like restoran
  I.waitForElement('.favorite-btn');
  I.click('.favorite-btn');
  I.see('Ditambahkan ke favorit');
  
  // Cek halaman favorit
  I.amOnPage('/#/favorite');
  I.waitForElement('.post-item');
  I.seeElement('.post-item');
});

Scenario('unliking one restaurant', async ({ I }) => {
  // Like restoran dulu
  I.amOnPage('/');
  I.waitForElement('.posts');
  I.waitForElement('.post-item');
  I.click('.btn-detail');
  
  I.waitForElement('.favorite-btn');
  I.click('.favorite-btn');
  
  // Ke halaman favorit
  I.amOnPage('/#/favorite');
  I.waitForElement('.post-item');
  
  // Tunggu halaman dimuat sempurna
  I.wait(3);
  
  // Klik detail dan unlike
  I.executeScript(() => {
    document.querySelector('.btn-detail').click();
  });
  
  I.waitForElement('.favorite-btn');
  I.click('.favorite-btn');
  I.see('Dihapus dari favorit');
  
  // Cek halaman favorit kosong
  I.amOnPage('/#/favorite');
  I.waitForElement('.favorite-empty h2');
  I.see('Tidak ada restoran favorit');
});

Scenario('liking multiple restaurants', async ({ I }) => {
  // Like restoran pertama
  I.amOnPage('/');
  I.waitForElement('.posts');
  I.waitForElement('.post-item');
  
  // Klik detail restoran pertama
  I.executeScript(() => {
    document.querySelector('.btn-detail').click();
  });
  
  I.waitForElement('.favorite-btn');
  I.click('.favorite-btn');
  
  // Kembali ke home dan like restoran kedua
  I.amOnPage('/');
  I.waitForElement('.posts');
  I.waitForElement('.post-item');
  I.wait(2);
  
  // Klik detail restoran kedua
  I.executeScript(() => {
    document.querySelectorAll('.btn-detail')[1].click();
  });
  
  I.waitForElement('.favorite-btn');
  I.click('.favorite-btn');
  
  // Cek di halaman favorit
  I.amOnPage('/#/favorite');
  I.waitForElement('#Favorite');
  I.waitForElement('.post-item');
  I.seeNumberOfElements('#Favorite .post-item', 2);
});