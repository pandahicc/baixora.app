import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const slots = [
  'single-download',
  'explore-list',
  'search-list',
  'creator-profile',
  'creator-panel',
];

const sourceDir = fileURLToPath(
  new URL('../src/assets/screenshots/', import.meta.url),
);
const outputDir = fileURLToPath(
  new URL('../public/images/screenshots/', import.meta.url),
);

await mkdir(outputDir, { recursive: true });

for (const slot of slots) {
  const source = path.join(sourceDir, `${slot}.png`);
  const target = path.join(outputDir, `${slot}.webp`);
  const info = await sharp(source)
    .webp({ quality: 85, effort: 6 })
    .toFile(target);
  console.log(
    `${slot}: ${info.width}×${info.height}, ${Math.round(info.size / 1024)} KB`,
  );
}

console.log('Screenshots converted to WebP.');
