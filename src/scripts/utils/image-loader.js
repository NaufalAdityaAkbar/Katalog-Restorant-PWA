const ImageLoader = {
  init(imageElement) {
    if (!imageElement) return;

    imageElement.classList.add('loading');

    imageElement.onload = () => {
      imageElement.classList.remove('loading');
    };

    imageElement.onerror = () => {
      console.error('Failed to load image:', imageElement.src);
      imageElement.src = '/images/placeholder.jpg';
      imageElement.classList.remove('loading');
    };
  },
};

export default ImageLoader;
