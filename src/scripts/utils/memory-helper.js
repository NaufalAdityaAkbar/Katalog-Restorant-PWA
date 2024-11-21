const MemoryHelper = {
  cleanupEventListeners() {
    document.querySelectorAll('[data-event]').forEach((element) => {
      element.removeEventListener(element.dataset.event, element.handler);
    });
  },

  clearCache() {
    if ('caches' in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          if (cacheName.startsWith('old-cache-')) {
            caches.delete(cacheName);
          }
        });
      });
    }
  },
};

export default MemoryHelper;
