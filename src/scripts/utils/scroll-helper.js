import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

let scrollTriggerInstances = [];

// Tambahkan fungsi baru untuk scroll ke Restaurant
export const scrollToRestaurant = () => {
  const restaurantSection = document.querySelector('#Restaurant');
  if (restaurantSection) {
    restaurantSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export const initScrollTriggers = () => {
  // Hapus ScrollTrigger yang ada sebelumnya
  killScrollTriggers();

  // Inisialisasi ScrollTrigger baru
  gsap.utils.toArray('.content').forEach((section) => {
    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      end: 'bottom 5%',
      toggleActions: 'play none none reverse',
      animation: gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: 'power3.out',
      }),
    });
    scrollTriggerInstances.push(trigger);
  });
};

export const killScrollTriggers = () => {
  scrollTriggerInstances.forEach((trigger) => trigger.kill());
  scrollTriggerInstances = [];
};
