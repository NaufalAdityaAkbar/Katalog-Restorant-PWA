const SkeletonUI = {
  restaurantCard() {
    return `
      <div class="skeleton-card">
        <div class="skeleton-image pulse"></div>
        <div class="skeleton-content">
          <div class="skeleton-title pulse"></div>
          <div class="skeleton-info">
            <div class="skeleton-city pulse"></div>
            <div class="skeleton-rating pulse"></div>
          </div>
          <div class="skeleton-description pulse"></div>
        </div>
      </div>
    `;
  },

  showSkeletons(count = 6) {
    const container = document.querySelector('#restaurantContainer');
    container.innerHTML = Array(count).fill(this.restaurantCard()).join('');
  },
};

export default SkeletonUI;
