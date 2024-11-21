import CONFIG from '../global/config';

const SearchInitiator = {
  init({ searchForm, searchInput }) {
    const searchToggle = document.querySelector('.search-toggle');
    let searchTimeout;

    // Load semua restoran saat awal
    this._fetchAllRestaurants().then((restaurants) => {
      this._displaySearchResults(restaurants);
    });

    searchToggle.addEventListener('click', (event) => {
      event.preventDefault();
      searchForm.classList.toggle('active');
      if (searchForm.classList.contains('active')) {
        searchInput.focus();
      }
    });

    // Pencarian realtime
    searchInput.addEventListener('input', (event) => {
      clearTimeout(searchTimeout);
      const query = event.target.value.trim();

      if (query === '') {
        // Reset pencarian dan tampilkan semua restoran
        this._fetchAllRestaurants().then((restaurants) => {
          this._displaySearchResults(restaurants);
        });
        return;
      }

      // Delay pencarian untuk menghindari terlalu banyak request
      searchTimeout = setTimeout(() => {
        this._searchRestaurants(query);
      }, 300);
    });
  },

  async _fetchAllRestaurants() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}list`);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  },

  async _searchRestaurants(query) {
    try {
      // Gunakan endpoint search
      const response = await fetch(`${CONFIG.BASE_URL}search?q=${query}`);
      const responseJson = await response.json();

      if (responseJson.error) {
        this._displaySearchResults([]);
        return;
      }

      this._displaySearchResults(responseJson.restaurants);
    } catch (error) {
      console.error('Error:', error);
      this._displaySearchResults([]);
    }
  },

  _displaySearchResults(restaurants) {
    const restaurantContainer = document.getElementById('restaurantContainer');
    restaurantContainer.innerHTML = '';

    if (!restaurants || restaurants.length === 0) {
      restaurantContainer.innerHTML = `
        <div class="search-no-results">
          <div class="no-results-content">
            <i class="fas fa-search"></i>
            <h2>Tidak Ada Hasil</h2>
            <p>Maaf, tidak ada restoran yang sesuai dengan pencarian Anda.</p>
            <p>Coba kata kunci lain atau periksa ejaan Anda.</p>
          </div>
        </div>
      `;
      return;
    }

    restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('article');
      restaurantElement.classList.add('post-item');
      restaurantElement.innerHTML = `
        <img 
          class="post-item__thumbnail" 
          src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}"
          alt="${restaurant.name}"
          onerror="this.onerror=null; this.src='./images/placeholder.jpg';"
          loading="lazy"
        />
        <div class="post-item__content">
          <h1 class="post-item__title">${restaurant.name}</h1>
          <div class="post-item__info">
            <p class="post-item__city">
              <i class="fas fa-map-marker-alt"></i> ${restaurant.city}
            </p>
            <p class="post-item__rating">
              <i class="fas fa-star"></i> ${restaurant.rating}
            </p>
          </div>
          <p class="post-item__description">${restaurant.description}</p>
          <div class="cta-wrapper">
            <button 
              class="btn-detail" 
              data-id="${restaurant.id}"
              onclick="window.location.hash = '/detail/${restaurant.id}'"
              aria-label="Lihat detail ${restaurant.name}">
              Lihat Detail
            </button>
          </div>
        </div>
      `;
      restaurantContainer.appendChild(restaurantElement);

      // Tambahkan log untuk debugging
      console.log('Image URL:', `${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}`);
    });
  },
};

export default SearchInitiator;
