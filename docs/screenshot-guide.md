# Baixora screenshot slots

The site ships with five current product screenshots. Each one is a real capture of the
extension UI on a public TikTok page, not a mock. The short drama page uses a descriptive
panel instead of a capture because there is no short drama screenshot in the current set.

## Current files

| File | Where it appears | What it shows |
|---|---|---|
| `public/images/screenshots/search-list.webp` | Home hero; Bulk Download | Add and download controls on TikTok search results. |
| `public/images/screenshots/single-download.webp` | Home gallery; Single Video | Download control on a public For You video. |
| `public/images/screenshots/explore-list.webp` | Home gallery | Download controls on Explore cards. |
| `public/images/screenshots/creator-profile.webp` | Home gallery; Creator Videos | Download entry point on a public creator profile. |
| `public/images/screenshots/creator-panel.webp` | Home gallery; Creator Videos; XLSX Export | Creator panel with channels, filters, Export, and Download actions. |

All files are 1280×800. The registry lives in
[`src/data/screenshots.ts`](../src/data/screenshots.ts).

## Rules

- Use real extension UI on a public TikTok page. Do not mock the interface.
- Remove or mask personal data, account handles, and anything you do not have permission
  to publish.
- Keep the native dimensions of the capture. Update `width` and `height` in
  `src/data/screenshots.ts` if a replacement has different dimensions.
- Keep the alt text and caption accurate. If the UI changes, update the registry.
- **The current captures show the English UI.** The extension follows the browser
  language and has a pt-BR interface; captions must say this rather than imply that the
  product only exists in English.
- Do not create a fake short drama screenshot. If a real capture is added later, add a
  `drama` entry to the registry and use `ProductShot` on the short drama page.

## Replacing a file

```bash
# Example: replace the bulk/search capture with a pt-BR capture
cp ~/captures/baixora-search-ptbr.webp public/images/screenshots/search-list.webp
npm run build
```

If the filename changes, update the matching `base` value in
`src/data/screenshots.ts`. Rebuild after adding a file; the check-site script verifies the
five expected files and their dimensions.

## Required screenshots for a future refresh

| Slot | What it should show |
|---|---|
| `search-list` | Add and download controls on a Search results page, ideally with pt-BR UI. |
| `single-download` | The download control and progress on a public video page. |
| `explore-list` | Download controls on an Explore page. |
| `creator-profile` | The Download entry point on a public profile. |
| `creator-panel` | Creator channels, filters, selection, Export, and Download actions. |
| `short-drama` (optional) | The episode grid with selected episodes and the save/export actions. |
| `xlsx` (optional) | The exported workbook or the export action with selected rows. |
