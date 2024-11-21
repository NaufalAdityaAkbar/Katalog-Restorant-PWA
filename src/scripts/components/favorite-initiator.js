import { getAllFavorites } from '../utils/db';

const FavoriteInitiator = {
  async init() {
    await this.renderFavorites();
  },

  async renderFavorites() {
    const favoriteContainer = document.getElementById('Favorite');
    const favorites = await getAllFavorites();

    if (favorites.length === 0) {
      favoriteContainer.innerHTML = `
        <div class="favorite-empty">
          <h2>Tidak ada restoran favorit</h2>
          <p>Silakan tambahkan restoran ke daftar favorit Anda</p>
        </div>
      `;
      return;
    }

    favoriteContainer.innerHTML = `
      <div class="favorite-container">
        <h2 class="favorite-title">Restoran Favorit</h2>
        <div class="posts favorite-list">
          ${favorites.map((restaurant) => `
            <article class="post-item">
              <img class="post-item__thumbnail" src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name}">
              <div class="post-item__content">
                <h1 class="post-item__title">${restaurant.name}</h1>
                <p class="post-item__city">Kota: ${restaurant.city}</p>
                <p class="post-item__rating">Rating: ${restaurant.rating}★</p>
                <p class="post-item__description">${restaurant.description}</p>
                <div class="cta-wrapper">
                  <a href="#/detail/${restaurant.id}" class="cta">Lihat Detail</a>
                </div>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;
  },
};

export default FavoriteInitiator;