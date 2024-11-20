import { scrollToRestaurant } from './scroll-helper';

const initSearchHandler = () => {
  const searchInput = document.querySelector('#searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      scrollToRestaurant();
    });
  }
};

export default initSearchHandler;
