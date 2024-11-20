const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/',
  CACHE_NAME: `restaurant-catalogue-cache-${new Date().toISOString()}`,
  DATABASE_NAME: 'restaurantDB', // Nama database untuk IndexedDB
  DATABASE_VERSION: 1, // Versi database IndexedDB
  OBJECT_STORE_NAME: 'restaurants', // Nama object store untuk menyimpan restoran
  WEB_SOCKET_SERVER: 'wss://restaurant-api.dicoding.dev/', // WebSocket server jika diperlukan
};

export default CONFIG;
