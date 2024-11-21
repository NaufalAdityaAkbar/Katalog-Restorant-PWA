import FavoriteInitiator from '../../src/scripts/utils/favorite-initiator';
import { saveRestaurant, getAllFavorites, removeFavorite } from '../../src/scripts/utils/db';

describe('Favorite Restaurant Integration Test', () => {
  const mockRestaurant = {
    id: 'test-123',
    name: 'Test Restaurant',
    description: 'A test restaurant',
    pictureId: 'test.jpg',
    city: 'Test City',
    rating: 4.5
  };

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="restaurantContainer">
        <article class="post-item">
          <div class="post-item__content">
            <h1 class="post-item__title">${mockRestaurant.name}</h1>
            <button 
              class="favorite-btn"
              data-favorite-id="${mockRestaurant.id}"
              aria-label="Tambahkan ke favorit">
              <i class="far fa-heart"></i>
            </button>
          </div>
        </article>
      </div>
      <div id="Favorite"></div>
    `;
  });

  afterEach(async () => {
    await removeFavorite(mockRestaurant.id);
    localStorage.clear();
  });

  describe('Like Restaurant', () => {
    it('should show the like button when restaurant has not been liked before', async () => {
      const likeButton = document.querySelector('[data-favorite-id="test-123"]');
      expect(likeButton).toBeTruthy();
      expect(likeButton.innerHTML).toContain('far fa-heart');
    });

    it('should be able to like the restaurant', async () => {
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      
      const restaurant = await getAllFavorites();
      expect(restaurant).toHaveLength(1);
      expect(restaurant[0].id).toEqual(mockRestaurant.id);
    });

    it('should update like button UI after liking restaurant', async () => {
      const likeButton = document.querySelector('[data-favorite-id="test-123"]');
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      await FavoriteInitiator.updateFavoriteButtonState(mockRestaurant.id);
      
      expect(likeButton.innerHTML).toContain('fas fa-heart');
      expect(likeButton.getAttribute('aria-label')).toContain('Hapus');
    });
  });

  describe('Unlike Restaurant', () => {
    beforeEach(async () => {
      await saveRestaurant(mockRestaurant);
    });

    it('should show the unlike button when restaurant has been liked', async () => {
      const unlikeButton = document.querySelector('[data-favorite-id="test-123"]');
      await FavoriteInitiator.updateFavoriteButtonState(mockRestaurant.id);
      
      expect(unlikeButton.innerHTML).toContain('fas fa-heart');
    });

    it('should be able to remove liked restaurant from the list', async () => {
      await FavoriteInitiator.removeFromFavorite(mockRestaurant);
      
      const restaurant = await getAllFavorites();
      expect(restaurant).toHaveLength(0);
    });
  });

  describe('Favorite Page Integration', () => {
    it('should render favorite restaurants on favorite page', async () => {
      await saveRestaurant(mockRestaurant);
      window.location.hash = '#/favorite';
      await FavoriteInitiator.renderFavorites();
      
      const favoriteContainer = document.getElementById('Favorite');
      expect(favoriteContainer.innerHTML).toContain(mockRestaurant.name);
    });

    it('should show empty message when no favorites', async () => {
      window.location.hash = '#/favorite';
      await FavoriteInitiator.renderFavorites();
      
      const favoriteContainer = document.getElementById('Favorite');
      expect(favoriteContainer.innerHTML).toContain('Tidak ada restoran favorit');
    });
  });

  describe('Error Handling', () => {
    it('should handle error when saving restaurant fails', async () => {
      // Gunakan try-catch untuk menangani error
      try {
        jest.spyOn(require('../../src/scripts/utils/db'), 'saveRestaurant')
          .mockRejectedValueOnce(new Error('Failed to save'));

        await FavoriteInitiator.addToFavorite(mockRestaurant);
        const favorites = await getAllFavorites();
        expect(favorites).toHaveLength(0);
      } catch (error) {
        expect(error.message).toBe('Failed to save');
      }
    });

    it('should handle error when removing restaurant fails', async () => {
      try {
        await saveRestaurant(mockRestaurant);
        jest.spyOn(require('../../src/scripts/utils/db'), 'removeFavorite')
          .mockRejectedValueOnce(new Error('Failed to remove'));

        await FavoriteInitiator.removeFromFavorite(mockRestaurant);
        const favorites = await getAllFavorites();
        expect(favorites).toHaveLength(1);
      } catch (error) {
        expect(error.message).toBe('Failed to remove');
      }
    });
  });

  describe('Button State Management', () => {
    it('should handle multiple favorite buttons for same restaurant', async () => {
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      await FavoriteInitiator.updateFavoriteButtonState(mockRestaurant.id);
      
      const buttons = document.querySelectorAll(`[data-favorite-id="${mockRestaurant.id}"]`);
      buttons.forEach(button => {
        expect(button.innerHTML.trim()).toContain('fas fa-heart');
      });
    });
  });

  describe('Data Validation', () => {
    it('should not save restaurant without required fields', async () => {
      const invalidRestaurant = { id: 'test-invalid' };
      
      // Tambahkan validasi di sini
      await FavoriteInitiator.addToFavorite(invalidRestaurant);
      const favorites = await getAllFavorites();
      expect(favorites).toHaveLength(0);
    });

    it('should handle duplicate restaurant saves', async () => {
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      
      // Pastikan data dibersihkan sebelum test
      const favorites = await getAllFavorites();
      expect(favorites.filter(r => r.id === mockRestaurant.id)).toHaveLength(1);
    });
  });

  describe('Favorite Page Functionality', () => {
    it('should update UI when adding/removing favorites from detail page', async () => {
      window.location.hash = '#/favorite';
      await FavoriteInitiator.renderFavorites();
      
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      await FavoriteInitiator.renderFavorites();
      
      const favoriteContainer = document.getElementById('Favorite');
      expect(favoriteContainer.innerHTML).toContain(mockRestaurant.name);
      
      await FavoriteInitiator.removeFromFavorite(mockRestaurant);
      await FavoriteInitiator.renderFavorites();
      
      // Pastikan elemen .favorite-empty ada di DOM
      await new Promise(resolve => setTimeout(resolve, 100));
      expect(favoriteContainer.querySelector('.favorite-empty')).toBeTruthy();
    });

    it('should sort favorites by name', async () => {
      const restaurant1 = { ...mockRestaurant, id: 'rest-1', name: 'Zebra Restaurant' };
      const restaurant2 = { ...mockRestaurant, id: 'rest-2', name: 'Alpha Restaurant' };
      
      // Hapus semua data favorit yang ada
      const favorites = await getAllFavorites();
      for (const fav of favorites) {
        await removeFavorite(fav.id);
      }
      
      await FavoriteInitiator.addToFavorite(restaurant1);
      await FavoriteInitiator.addToFavorite(restaurant2);
      await FavoriteInitiator.renderFavorites();
      
      // Tunggu render dan sorting selesai
      await new Promise(resolve => setTimeout(resolve, 100));
      
      const favoriteContainer = document.getElementById('Favorite');
      const restaurants = favoriteContainer.querySelectorAll('.post-item__title');
      expect(restaurants[0].textContent.trim()).toBe('Alpha Restaurant');
      expect(restaurants[1].textContent.trim()).toBe('Zebra Restaurant');
    });
  });

  describe('Performance', () => {
    it('should handle large number of favorites efficiently', async () => {
      const restaurants = Array.from({ length: 100 }, (_, i) => ({
        ...mockRestaurant,
        id: `rest-${i}`,
        name: `Restaurant ${i}`,
      }));

      const startTime = performance.now();
      
      for (const restaurant of restaurants) {
        await FavoriteInitiator.addToFavorite(restaurant);
      }
      
      await FavoriteInitiator.renderFavorites();
      
      const endTime = performance.now();
      const timeElapsed = endTime - startTime;
      
      expect(timeElapsed).toBeLessThan(5000); // Should complete within 5 seconds
    });
  });

  describe('Accessibility', () => {
    it('should maintain proper ARIA labels when toggling favorite state', async () => {
      const button = document.querySelector('.favorite-btn');
      
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      expect(button.getAttribute('aria-label')).toContain('Hapus dari favorit');
      
      await FavoriteInitiator.removeFromFavorite(mockRestaurant);
      expect(button.getAttribute('aria-label')).toContain('Tambahkan ke favorit');
    });

    it('should ensure favorite buttons are keyboard accessible', () => {
      const button = document.querySelector('.favorite-btn');
      expect(button.tabIndex).not.toBe(-1);
    });
  });
}); 