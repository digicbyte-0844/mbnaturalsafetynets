const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const baseName = path.basename(file, ext);
      const webpPath = path.join(dirPath, `${baseName}.webp`);

      // Skip if webp already exists and is newer
      if (fs.existsSync(webpPath)) {
        const webpStat = fs.statSync(webpPath);
        if (webpStat.mtimeMs >= stat.mtimeMs) {
          continue;
        }
      }

      console.log(`Converting ${file} -> ${baseName}.webp ...`);
      try {
        let pipeline = sharp(fullPath);
        const metadata = await pipeline.metadata();

        if (ext === '.png' && (file.includes('logo') || file.includes('favicon'))) {
          // Sharp / crisp lossless WebP for logos
          await pipeline
            .webp({ quality: 90, lossless: true, effort: 6 })
            .toFile(webpPath);
        } else {
          // Optimized WebP for architectural photos with 1920px max dimension
          if (metadata.width && metadata.width > 1920) {
            pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
          }
          await pipeline
            .webp({ quality: 82, effort: 6 })
            .toFile(webpPath);
        }

        const originalSize = stat.size;
        const newSize = fs.statSync(webpPath).size;
        const savings = (((originalSize - newSize) / originalSize) * 100).toFixed(1);
        console.log(`✓ ${baseName}.webp saved: ${(newSize / 1024).toFixed(1)} KB (Saved ${savings}%)`);
      } catch (err) {
        console.error(`Failed to convert ${file}:`, err.message);
      }
    }
  }
}

function updateFileImagePaths(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  const updated = content.replace(/\/images\/([a-zA-Z0-9_\-]+)\.jpg/g, '/images/$1.webp');
  if (content !== updated) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log(`✓ Updated image paths in ${filePath}`);
  }
}

async function main() {
  console.log('--- Starting WebP Image Optimization ---');
  await processDirectory(path.join(__dirname, '../public/images'));
  updateFileImagePaths(path.join(__dirname, '../src/data/servicesData.js'));
  updateFileImagePaths(path.join(__dirname, '../src/pages/GalleryPage.jsx'));
  console.log('--- Finished Image Optimization ---');
}

main();
