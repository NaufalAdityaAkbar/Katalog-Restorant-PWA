import FavoriteInitiator from '../../src/scripts/utils/favorite-initiator';
import { saveRestaurant, getAllFavorites, removeFavorite, getFavoriteRestaurant } from '../../src/scripts/utils/db';

describe('Favorite Restaurant Feature', () => {
  // Data dummy untuk testing
  const mockRestaurant = {
    id: 'test-123',
    name: 'Test Restaurant',
    description: 'A test restaurant',
    pictureId: 'test.jpg',
    city: 'Test City',
    rating: 4.5
  };

  // Bersihkan database sebelum setiap test
  beforeEach(async () => {
    await removeFavorite(mockRestaurant.id);
  });

  // Test Case Positif
  describe('Adding restaurant to favorites', () => {
    it('should add restaurant to favorites', async () => {
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      const favorites = await getAllFavorites();
      expect(favorites).toContainEqual(mockRestaurant);
    });

    it('should show restaurant in favorite list', async () => {
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      const favorite = await getFavoriteRestaurant(mockRestaurant.id);
      expect(favorite).toEqual(mockRestaurant);
    });

    it('should not add restaurant if it already exists', async () => {
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      const favorites = await getAllFavorites();
      expect(favorites.length).toBe(1);
    });
  });

  // Test Case Negatif
  describe('Removing restaurant from favorites', () => {
    it('should remove restaurant from favorites', async () => {
      await FavoriteInitiator.addToFavorite(mockRestaurant);
      await FavoriteInitiator.removeFromFavorite(mockRestaurant);
      const favorites = await getAllFavorites();
      expect(favorites).not.toContainEqual(mockRestaurant);
    });

    it('should handle removing non-existent restaurant', async () => {
      await FavoriteInitiator.removeFromFavorite({ id: 'non-existent-id' });
      const favorites = await getAllFavorites();
      expect(favorites.length).toBe(0);
    });
  });

  // Test Case Edge
  describe('Edge cases', () => {
    it('should handle empty favorite list', async () => {
      const favorites = await getAllFavorites();
      expect(favorites).toEqual([]);
    });

    it('should handle invalid restaurant data', async () => {
      const invalidRestaurant = { id: 'invalid' }; // Data tidak lengkap
      await FavoriteInitiator.addToFavorite(invalidRestaurant);
      const favorite = await getFavoriteRestaurant('invalid');
      expect(favorite).toEqual(invalidRestaurant);
    });
  });
}); 