import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const source = fileURLToPath(new URL('../src/assets/baixora-icon-128.png', import.meta.url));
const outDir = fileURLToPath(new URL('../public/images/brand/', import.meta.url));

await mkdir(outDir, { recursive: true });

for (const size of [16, 32, 48, 128]) {
  const target = `${outDir}/baixora-icon-${size}.png`;
  await sharp(source)
    .resize(size, size, { fit: 'cover' })
    .png({ compressionLevel: 9 })
    .toFile(target);
  console.log(`Wrote ${target}`);
}

const touch = `${outDir}/apple-touch-icon.png`;
await sharp(source)
  .resize(180, 180, { fit: 'cover' })
  .flatten({ background: '#ffffff' })
  .png({ compressionLevel: 9 })
  .toFile(touch);
console.log(`Wrote ${touch}`);
