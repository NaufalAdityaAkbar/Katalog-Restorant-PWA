const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

// Konfigurasi path
const paths = {
  input: path.join(__dirname, '../public/images/heros/'),
  output: path.join(__dirname, '../public/images/heros/optimized/'),
};

// Konfigurasi ukuran
const sizes = {
  large: {
    width: 1280, // Dikurangi dari 1920 untuk menghemat bandwidth
    height: 720, // 16:9 ratio
    suffix: '-large',
  },
  small: {
    width: 640, // Dikurangi dari 800 untuk mobile
    height: 360, // 16:9 ratio tetap dijaga
    suffix: '-small',
  },
};

async function ensureDirectoryExists(directory) {
  try {
    await fs.access(directory);
  } catch {
    await fs.mkdir(directory, { recursive: true });
  }
}

async function optimizeImage(inputFile) {
  const filename = path.basename(inputFile, path.extname(inputFile));

  // Optimasi untuk setiap ukuran
  for (const [size, config] of Object.entries(sizes)) {
    const outputPath = path.join(paths.output, `${filename}${config.suffix}.jpg`);

    await sharp(inputFile)
      .resize({
        width: config.width,
        height: config.height,
        fit: 'cover',
        position: 'center',
      })
      .jpeg({
        quality: 80,
        progressive: true,
        chromaSubsampling: '4:4:4',
      })
      .toFile(outputPath);

    // Log ukuran file
    const stats = await fs.stat(outputPath);
    console.log(`${size} image size: ${(stats.size / 1024).toFixed(2)}KB`);
  }
}

async function optimizeImages() {
  try {
    await ensureDirectoryExists(paths.output);
    const files = await fs.readdir(paths.input);
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

    for (const file of imageFiles) {
      const inputPath = path.join(paths.input, file);
      console.log(`\nOptimizing: ${file}`);
      await optimizeImage(inputPath);
    }
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages();
