import { loadRestaurantDetails } from '../../components/restaurantDetail';
import { killScrollTriggers } from '../../utils/scroll-helper';

const showDetailPage = async id => {
  try {
    // Scroll ke atas sebelum menampilkan detail
    window.scrollTo(0, 0);

    // Nonaktifkan ScrollTrigger
    killScrollTriggers();

    // Sembunyikan semua section kecuali detail
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#Story').style.display = 'none';
    document.querySelector('#Restaurant').style.display = 'none';
    document.querySelector('#Favorite').style.display = 'none';

    // Tampilkan section detail
    const detailContainer = document.querySelector('#restaurantDetailContainer');
    detailContainer.style.display = 'block';

    // Tampilkan tombol kembali
    document.querySelector('.back-button').style.display = 'block';

    // Pastikan id ada sebelum memuat detail
    if (!id) {
      throw new Error('Restaurant ID is required');
    }

    // Muat detail restoran
    await loadRestaurantDetails(id);
  } catch (error) {
    console.error('Error in showDetailPage:', error);
    document.querySelector('#restaurantDetailContainer').innerHTML = `
      <div class="error-message">
        Maaf, terjadi kesalahan saat memuat detail restoran.
        <br>
        <a href="#/" class="cta">Kembali ke Beranda</a>
      </div>
    `;
  }
};

export default showDetailPage;
