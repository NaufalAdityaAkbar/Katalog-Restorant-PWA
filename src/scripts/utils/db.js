import CONFIG from '../global/config';

export async function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(CONFIG.DATABASE_NAME, CONFIG.DATABASE_VERSION);
    request.onupgradeneeded = event => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(CONFIG.OBJECT_STORE_NAME)) {
        db.createObjectStore(CONFIG.OBJECT_STORE_NAME, { keyPath: 'id' });
      }
    };
    request.onsuccess = event => resolve(event.target.result);
    request.onerror = event => reject(`IndexedDB error: ${event.target.error.message}`);
  });
}

export async function getAllFavorites() {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(CONFIG.OBJECT_STORE_NAME, 'readonly');
      const store = transaction.objectStore(CONFIG.OBJECT_STORE_NAME);
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result || []); // Pastikan selalu mengembalikan array
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Error getting favorites:', error);
    return []; // Kembalikan array kosong jika terjadi error
  }
}

export async function saveRestaurant(restaurant) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(CONFIG.OBJECT_STORE_NAME, 'readwrite');
      const store = transaction.objectStore(CONFIG.OBJECT_STORE_NAME);
      const request = store.put(restaurant);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error('Error saving restaurant:', error);
    throw error;
  }
}

export async function getFavoriteRestaurant(id) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(CONFIG.OBJECT_STORE_NAME, 'readonly');
      const store = transaction.objectStore(CONFIG.OBJECT_STORE_NAME);
      const request = store.get(id);

      request.onsuccess = () => {
        resolve(request.result || null);
      };

      request.onerror = () => {
        reject(request.error);
      };
    });
  } catch (error) {
    console.error('Error getting favorite restaurant:', error);
    return null;
  }
}

export async function removeFavorite(id) {
  try {
    const db = await openDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(CONFIG.OBJECT_STORE_NAME, 'readwrite');
      const store = transaction.objectStore(CONFIG.OBJECT_STORE_NAME);
      const request = store.delete(id);

      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.error('Error removing favorite:', error);
    throw error;
  }
}
