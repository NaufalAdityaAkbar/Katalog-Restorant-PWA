import { initScrollTriggers } from '../../utils/scroll-helper';

const showHomePage = () => {
  // Reset display untuk semua section
  document.querySelector('#home').style.display = 'block';
  document.querySelector('#Story').style.display = 'block';
  document.querySelector('#Restaurant').style.display = 'block';
  document.querySelector('.content').style.display = 'block';
  document.querySelector('#Favorite').style.display = 'none';
  document.querySelector('#restaurantDetailContainer').style.display = 'none';
  document.querySelector('.back-button').style.display = 'none';

  // Aktifkan ScrollTrigger
  initScrollTriggers();
};

export default showHomePage;
