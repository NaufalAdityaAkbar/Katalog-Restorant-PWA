// index.js
import CONFIG from './global/config';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { delayContentLoad } from './contentloader';
import { initializeAppShell } from './appShell';
import WebSocketInitiator from './utils/webSocketInitiator.js';
import routes from './routes/routes';
import UrlParser from './routes/url-parser';
import '../styles/main.css';
import '../styles/responsive.css';
import initSearchHandler from './utils/search-handler';
import { registerServiceWorker } from './swRegister';
import NotificationHelper from './utils/notification-helper';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Inisialisasi GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const app = {
  init() {
    this.initializeContent();
    this.initializeEventListeners();
    this.initializeSearch();
    this.initializeScrollToTop();
    FavoriteInitiator.init();
    this.initializeNotification();
  },

  initializeContent() {
    delayContentLoad();
    initializeAppShell();
    this.loadRestaurants();
    WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
    this.urlRouting();
  },

  initializeEventListeners() {
    // Tambahkan event listener untuk skip to content
    const skipLinkElem = document.querySelector('.skip-to-content');
    skipLinkElem.addEventListener('click', event => {
      event.preventDefault();
      const mainContent = document.querySelector('.content');
      mainContent.setAttribute('tabindex', '0');
      mainContent.focus();
    });

    // Event listener untuk routing
    window.addEventListener('hashchange', () => {
      this.urlRouting();
    });

    // Event listener untuk navigasi menu
    document.querySelectorAll('.nav__item a').forEach(link => {
      link.addEventListener('click', e => {
        const href = e.target.getAttribute('href');
        if (href === '#/favorite') {
          e.preventDefault();
          window.location.hash = '/favorite';
        } else if (href.startsWith('#') && href !== '#/detail') {
          e.preventDefault();
          // Reset hash URL terlebih dahulu
          window.location.hash = '';
          const targetId = href.slice(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            routes['/']();
            setTimeout(() => {
              targetElement.scrollIntoView({ behavior: 'smooth' });
              this.loadRestaurants();
            }, 100);
          }
        }
      });
    });

    // Event listener untuk tombol kembali
    document.querySelector('.back-button').addEventListener('click', e => {
      e.preventDefault();
      window.location.hash = '#/';
    });

    // Event listeners untuk drawer
    this.initializeDrawer();

    // Tambahkan event listener untuk reload restaurants
    window.addEventListener('reload-restaurants', () => {
      this.loadRestaurants();
    });
  },

  urlRouting() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url.path];

    if (page) {
      page(url.id);
      if (url.path === '/') {
        setTimeout(() => {
          this.loadRestaurants();
        }, 100);
      }
    } else {
      // Handle 404 atau redirect ke home
      routes['/'](null);
      setTimeout(() => {
        this.loadRestaurants();
      }, 100);
    }
  },

  async loadRestaurants() {
    try {
      const response = await fetch(`${CONFIG.BASE_URL}list`);
      const data = await response.json();
      const restaurantContainer = document.getElementById('restaurantContainer');

      if (!restaurantContainer) return;

      restaurantContainer.innerHTML = '';

      data.restaurants.forEach(restaurant => {
        const restaurantElement = document.createElement('article');
        restaurantElement.classList.add('post-item');
        restaurantElement.innerHTML = `
          <img 
            class="post-item__thumbnail lazyload" 
            data-src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}"
            alt="${restaurant.name}"
            loading="lazy"
          />
          <div class="post-item__content">
            <h1 class="post-item__title">${restaurant.name}</h1>
            <p class="post-item__description">${restaurant.description || 'Deskripsi tidak tersedia'}</p>
            <div class="post-item__info">
              <span class="post-item__city">${restaurant.city}</span>
              <span class="post-item__rating">⭐ ${restaurant.rating}</span>
            </div>
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
      });

      // Pastikan CSS tetap ada setelah render
      document.querySelectorAll('.btn-detail').forEach(button => {
        button.classList.add('btn-detail');
      });
    } catch (error) {
      console.error('Error loading restaurants:', error);
    }
  },

  initializeDrawer() {
    const menu = document.querySelector('#menu');
    const drawer = document.querySelector('#drawer');
    const hero = document.querySelector('.hero');
    const main = document.querySelector('main');

    menu.addEventListener('click', event => {
      drawer.classList.toggle('open');
      event.stopPropagation();
    });

    [hero, main].forEach(element => {
      element.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    });
  },

  showHomePage() {
    document.querySelector('#home').style.display = 'block';
    document.querySelector('#Story').style.display = 'block';
    document.querySelector('#Restaurant').style.display = 'block';
    document.querySelector('.content').style.display = 'block';
    document.querySelector('#Favorite').style.display = 'none';
    document.querySelector('#restaurantDetailContainer').style.display = 'none';
    document.querySelector('.back-button').style.display = 'none';
  },

  showFavoritePage() {
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#Story').style.display = 'none';
    document.querySelector('#Restaurant').style.display = 'none';
    document.querySelector('#restaurantDetailContainer').style.display = 'none';
    document.querySelector('#Favorite').style.display = 'block';
    document.querySelector('.content').style.display = 'block';
    document.querySelector('.back-button').style.display = 'block';
    // Memperbarui tampilan favorit
    FavoriteInitiator.init();
  },

  initializeSearch() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    SearchInitiator.init({ searchForm, searchInput });
  },

  initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Tampilkan tombol ketika user scroll lebih dari 300px
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
        scrollToTopBtn.style.opacity = '1';
      } else {
        scrollToTopBtn.style.opacity = '0';
        setTimeout(() => {
          if (window.scrollY <= 300) {
            scrollToTopBtn.style.display = 'none';
          }
        }, 300);
      }
    });

    // Scroll ke atas ketika tombol diklik
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  },

  async initializeNotification() {
    if ('Notification' in window) {
      // Minta izin notifikasi saat aplikasi dimuat
      await Notification.requestPermission();

      // Event listener untuk notifikasi saat favorit ditambahkan
      document.addEventListener('restaurant-favorited', event => {
        NotificationHelper.sendNotification({
          title: 'Restoran Difavoritkan!',
          options: {
            body: `${event.detail.restaurant.name} telah ditambahkan ke daftar favorit`,
            icon: '/images/icons/icon-192x192.png',
            badge: '/images/icons/icon-72x72.png',
            vibrate: [100, 50, 100],
            data: {
              url: `#/detail/${event.detail.restaurant.id}`,
            },
          },
        });
      });

      // Event listener untuk notifikasi saat favorit dihapus
      document.addEventListener('restaurant-unfavorited', event => {
        NotificationHelper.sendNotification({
          title: 'Restoran Dihapus dari Favorit',
          options: {
            body: `${event.detail.restaurant.name} telah dihapus dari daftar favorit`,
            icon: '/images/icons/icon-192x192.png',
            badge: '/images/icons/icon-72x72.png',
            vibrate: [100, 50, 100],
          },
        });
      });
    }
  },
};

// Initialize app when window loads
window.addEventListener('load', () => {
  app.init();
  registerServiceWorker();
});

// Tambahkan ini di bagian inisialisasi aplikasi
initSearchHandler();

// Tambahkan ini di akhir file
export default app;

// Tambahkan fungsi ini
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageOptions = {
    threshold: 0,
    rootMargin: '50px',
  };

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        observer.unobserve(img);
      }
    });
  }, imageOptions);

  images.forEach(img => imageObserver.observe(img));
}

// Panggil fungsi setelah konten dimuat
window.addEventListener('load', lazyLoadImages);

// Lazy load untuk komponen yang tidak langsung dibutuhkan
const SearchInitiator = lazy(() => import('./utils/search-initiator'));
const FavoriteInitiator = lazy(() => import('./utils/favorite-initiator'));

function lazy(importFn) {
  let module;
  return new Proxy(
    {},
    {
      get: (target, prop) => {
        if (!module) {
          module = importFn().then(m => m.default);
        }
        return (...args) => module.then(m => m[prop](...args));
      },
    }
  );
}
