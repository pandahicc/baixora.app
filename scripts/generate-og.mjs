import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const source = fileURLToPath(new URL('../src/assets/og-default.svg', import.meta.url));
const iconPath = fileURLToPath(
  new URL('../src/assets/baixora-icon-128.png', import.meta.url),
);
const target = fileURLToPath(new URL('../public/og/baixora-og.png', import.meta.url));

const icon = await sharp(iconPath).resize(64, 64, { fit: 'cover' }).png().toBuffer();

await sharp(await readFile(source), { density: 144 })
  .resize(1200, 630, { fit: 'cover' })
  .composite([{ input: icon, top: 56, left: 80 }])
  .png({ compressionLevel: 9 })
  .toFile(target);

console.log(`Wrote ${target} (1200×630).`);
