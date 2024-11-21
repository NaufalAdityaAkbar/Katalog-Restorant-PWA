import { saveRestaurant, getFavoriteRestaurant, removeFavorite } from '../utils/db';
import CONFIG from '../global/config';

export async function submitReview(data) {
  try {
    const response = await fetch(`${CONFIG.BASE_URL}review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const responseData = await response.json();
    return responseData;
  } catch {
    throw new Error('Gagal mengirim review');
  }
}

// Tambahkan fungsi untuk menampilkan toast notification
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Tambahkan fungsi untuk mengoptimasi gambar restoran
function getOptimizedImageUrl(pictureId, size = 'small') {
  const sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large',
  };
  return `${CONFIG.BASE_IMAGE_URL}${sizes[size]}/${pictureId}`;
}

// Tambahkan fungsi untuk mengecek status favorit
async function updateFavoriteButtonState(restaurantId) {
  try {
    const favoriteButton = document.querySelector('.favorite-btn');
    if (!favoriteButton) return;

    const isFavorited = await getFavoriteRestaurant(restaurantId);

    // Update tampilan button berdasarkan status
    if (isFavorited) {
      favoriteButton.classList.add('favorited');
      favoriteButton.querySelector('i').className = 'fas fa-heart';
      favoriteButton.setAttribute('aria-label', 'Hapus dari favorit');
    } else {
      favoriteButton.classList.remove('favorited');
      favoriteButton.querySelector('i').className = 'far fa-heart';
      favoriteButton.setAttribute('aria-label', 'Tambah ke favorit');
    }
  } catch (error) {
    console.error('Error updating favorite button state:', error);
  }
}

export async function loadRestaurantDetails(id) {
  try {
    const response = await fetch(`${CONFIG.BASE_URL}detail/${id}`);
    if (!response.ok) {
      throw new Error('Restaurant not found');
    }

    const { restaurant } = await response.json();

    // Gunakan getOptimizedImageUrl untuk mengoptimalkan gambar
    const imageUrl = getOptimizedImageUrl(restaurant.pictureId, 'large');

    document.getElementById('restaurantDetailContainer').innerHTML = `
      <div class="restaurant-detail">
        <div class="restaurant-header">
          <h1 class="restaurant-title">${restaurant.name}</h1>
          <div class="restaurant-actions">
            <div class="restaurant-rating">⭐️ ${restaurant.rating}</div>
            <button 
              class="favorite-btn"
              aria-label="Tambah ke favorit"
              data-favorite-id="${restaurant.id}">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </div>
        
        <div class="restaurant-main">
          <img 
            class="restaurant-image lazyload" 
            src="${imageUrl}"
            alt="${restaurant.name}"
            loading="lazy"
          />
          
          <div class="restaurant-info-grid">
            <div class="info-card location">
              <h3>Lokasi</h3>
              <p class="city"><i class="fas fa-city"></i> ${restaurant.city}</p>
              <p class="address"><i class="fas fa-map-marker-alt"></i> ${restaurant.address}</p>
            </div>
            
            <div class="info-card description">
              <h3>Tentang</h3>
              <p>${restaurant.description}</p>
            </div>
          </div>
          
          <div class="menu-grid">
            <div class="menu-card foods">
              <h3><i class="fas fa-utensils"></i> Menu Makanan</h3>
              <ul>
                ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
              </ul>
            </div>
            
            <div class="menu-card drinks">
              <h3><i class="fas fa-coffee"></i> Menu Minuman</h3>
              <ul>
                ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
              </ul>
            </div>
          </div>
          
          <div class="reviews-section">
            <h3><i class="fas fa-comments"></i> Ulasan Pelanggan</h3>
            
            <form id="reviewForm" class="review-form">
              <h4>Tambah Ulasan</h4>
              <input type="hidden" name="id" value="${restaurant.id}">
              <div class="form-group">
                <label for="name">Nama</label>
                <input type="text" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="review">Ulasan</label>
                <textarea id="review" name="review" required></textarea>
              </div>
              <button type="submit" class="submit-review">Kirim Ulasan</button>
            </form>

            <div class="reviews-container">
              ${restaurant.customerReviews
    .map(
      (review) => `
                <div class="review-card">
                  <div class="review-header">
                    <p class="review-name"><i class="fas fa-user"></i> ${review.name}</p>
                    <p class="review-date">${review.date}</p>
                  </div>
                  <p class="review-text">${review.review}</p>
                </div>
              `
    )
    .join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    // Perbaikan event listener untuk tombol favorit
    const favoriteBtn = document.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', async () => {
      try {
        const currentStatus = await getFavoriteRestaurant(id);

        if (currentStatus) {
          // Jika sudah favorit, hapus dari favorit
          await removeFavorite(id);
          favoriteBtn.classList.remove('favorited');
          favoriteBtn.querySelector('i').className = 'far fa-heart';
          favoriteBtn.setAttribute('aria-label', 'Tambah ke favorit');
          showToast('Dihapus dari favorit');
        } else {
          // Jika belum favorit, tambahkan ke favorit
          await saveRestaurant(restaurant);
          favoriteBtn.classList.add('favorited');
          favoriteBtn.querySelector('i').className = 'fas fa-heart';
          favoriteBtn.setAttribute('aria-label', 'Hapus dari favorit');
          showToast('Ditambahkan ke favorit');
        }

        // Update status setelah perubahan
        await updateFavoriteButtonState(id);
      } catch (error) {
        showToast('Gagal mengubah status favorit');
        console.error('Error toggling favorite:', error);
      }
    });

    // Inisialisasi status awal
    await updateFavoriteButtonState(id);

    // Add event listener for review form
    document.getElementById('reviewForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const reviewData = {
        id: formData.get('id'),
        name: formData.get('name'),
        review: formData.get('review'),
      };

      try {
        await submitReview(reviewData);
        // Reload restaurant details to show new review
        await loadRestaurantDetails(restaurant.id);
        alert('Review berhasil ditambahkan!');
      } catch {
        alert('Gagal menambahkan review');
      }
    });
  } catch (error) {
    console.error('Error loading restaurant details:', error);
    throw error;
  }
}
