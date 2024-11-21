import app from '../index';

const loadDetailPage = () => import('../components/restaurantDetail');
const loadFavoritePage = () => import('../utils/favorite-initiator');

const routes = {
  '/': async () => {
    hideAllContainers();

    document.querySelector('#home').style.display = 'block';
    app.showHomePage();
    app.loadRestaurants();
  },
  '/detail/:id': async (id) => {
    hideAllContainers();

    document.querySelector('#restaurantDetailContainer').style.display = 'block';
    document.querySelector('.content').style.display = 'block';
    document.querySelector('.back-button').style.display = 'block';

    if (!id) return;

    document.querySelector('#restaurantDetailContainer').innerHTML = 'Loading...';

    try {
      const module = await loadDetailPage();
      await module.loadRestaurantDetails(id);
    } catch (error) {
      console.error('Error:', error);
      document.querySelector('#restaurantDetailContainer').innerHTML = `
        <div class="error-message">
          Maaf, terjadi kesalahan saat memuat detail restoran.
          <br>
          <button onclick="window.location.hash='/'">Kembali ke Beranda</button>
        </div>
      `;
    }
  },
  '/favorite': async () => {
    hideAllContainers();

    document.querySelector('#Favorite').style.display = 'block';
    document.querySelector('.content').style.display = 'block';
    document.querySelector('.back-button').style.display = 'block';

    const { default: FavoriteInitiator } = await loadFavoritePage();
    FavoriteInitiator.init();
  },
};

function hideAllContainers() {
  const containers = ['#home', '#Story', '#Restaurant', '#Favorite', '#restaurantDetailContainer'];

  containers.forEach((container) => {
    const element = document.querySelector(container);
    if (element) {
      element.style.display = 'none';
    }
  });
}

export default routes;
