import { getAllFavorites, saveRestaurant, removeFavorite } from './db';

const FavoriteInitiator = {
  async init() {
    try {
      if (window.location.hash !== '#/favorite') return;
      const favoriteContainer = document.getElementById('Favorite');
      if (!favoriteContainer) {
        console.warn('Favorite container tidak ditemukan');
        return;
      }

      await this.renderFavorites();
    } catch (error) {
      console.error('Error:', error.message);
    }
  },

  async renderFavorites() {
    try {
      const favoriteContainer = document.getElementById('Favorite');
      const favorites = await getAllFavorites();

      const favoritesArray = Array.isArray(favorites) ? favorites : [];

      favoritesArray.sort((a, b) => a.name.localeCompare(b.name));

      favoriteContainer.innerHTML = `
        <div class="favorite-container">
          <h2 class="favorite-title">Restoran Favorit</h2>
          ${
  favoritesArray.length === 0
    ? `<div class="favorite-empty">
                 <h2>Tidak ada restoran favorit</h2>
                 <p>Silakan tambahkan restoran ke daftar favorit Anda</p>
               </div>`
    : `<div class="posts favorite-list">
                 ${favoritesArray
    .map(
      (restaurant) => `
                   <article class="post-item">
                     <img class="post-item__thumbnail" 
                          src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" 
                          alt="${restaurant.name}">
                     <div class="post-item__content">
                       <h1 class="post-item__title">${restaurant.name}</h1>
                       <p class="post-item__city">Kota: ${restaurant.city}</p>
                       <p class="post-item__rating">Rating: ${restaurant.rating}★</p>
                       <p class="post-item__description">${restaurant.description}</p>
                       <div class="cta-wrapper">
                         <button 
                           class="btn-detail" 
                           data-id="${restaurant.id}"
                           aria-label="Lihat detail ${restaurant.name}">
                           Lihat Detail
                         </button>
                       </div>
                     </div>
                   </article>
                 `
    )
    .join('')}
               </div>`
}
        </div>
      `;

      const detailButtons = favoriteContainer.querySelectorAll('.btn-detail');
      detailButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const id = button.dataset.id;
          window.location.hash = `/detail/${id}`;
        });
      });
    } catch (error) {
      console.error('Error rendering favorites:', error);
      const favoriteContainer = document.getElementById('Favorite');
      favoriteContainer.innerHTML = `
        <div class="favorite-container">
          <h2 class="favorite-title">Restoran Favorit</h2>
          <div class="favorite-empty">
            <h2>Terjadi kesalahan</h2>
            <p>Maaf, tidak dapat memuat daftar favorit</p>
          </div>
        </div>
      `;
    }
  },

  async addToFavorite(restaurant) {
    if (!restaurant.id || !restaurant.name) {
      return;
    }
    await saveRestaurant(restaurant);
    await this.updateFavoriteButtonState(restaurant.id);
  },

  async removeFromFavorite(restaurant) {
    await removeFavorite(restaurant.id);
    await this.updateFavoriteButtonState(restaurant.id);
  },

  async updateFavoriteButtonState(restaurantId) {
    const isFavorited = await this.isRestaurantFavorited(restaurantId);
    const favoriteButton = document.querySelector(`[data-favorite-id="${restaurantId}"]`);

    if (favoriteButton) {
      if (isFavorited) {
        favoriteButton.innerHTML = '<i class="fas fa-heart"></i>';
        favoriteButton.setAttribute('aria-label', 'Hapus dari favorit');
      } else {
        favoriteButton.innerHTML = '<i class="far fa-heart"></i>';
        favoriteButton.setAttribute('aria-label', 'Tambahkan ke favorit');
      }
    }
  },

  async isRestaurantFavorited(id) {
    try {
      const favorites = await getAllFavorites();
      return favorites.some((favorite) => favorite.id === id);
    } catch (error) {
      console.error('Error checking favorite status:', error);
      return false;
    }
  },

  async toggleFavorite(restaurant) {
    const isFavorited = await this.isRestaurantFavorited(restaurant.id);
    if (!isFavorited) {
      await saveRestaurant(restaurant);
    } else {
      await removeFavorite(restaurant.id);
    }
    await this.updateFavoriteButtonState(restaurant.id);
  },
};

export default FavoriteInitiator;
