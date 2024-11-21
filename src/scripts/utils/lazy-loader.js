const LazyLoader = {
  init() {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.dataset.src) {
          entry.target.src = entry.target.dataset.src;
          entry.target.classList.add('loaded');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    document.querySelectorAll('[data-src]').forEach((element) => {
      observer.observe(element);
    });
  },
};

export default LazyLoader;
