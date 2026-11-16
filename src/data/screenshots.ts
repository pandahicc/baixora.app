export interface ScreenshotDefinition {
  /** Public URL base without the file extension. */
  base: string;
  title: string;
  description: string;
  alt: string;
  width: number;
  height: number;
}

/**
 * As cinco capturas atuais do produto, em pt-BR. Os PNGs de origem ficam em
 * src/assets/screenshots/ e são convertidos para WebP por `npm run screenshots`.
 *
 * Para substituir uma captura, mantenha o mesmo nome base, atualize width/height
 * aqui se as dimensões mudarem e rode `npm run screenshots`. Se o arquivo WebP
 * não existir, o ProductShot mostra um placeholder rotulado.
 */
export const SCREENSHOTS = {
  'single-download': {
    base: '/images/screenshots/single-download',
    title: 'Download de um vídeo',
    description:
      'O controle de download em um vídeo público do TikTok, com o rótulo “Download único”.',
    alt: 'Controle de download da Baixora em uma página pública de vídeo do TikTok.',
    width: 1280,
    height: 800,
  },
  'explore-list': {
    base: '/images/screenshots/explore-list',
    title: 'Controles na página Explorar',
    description:
      'Controles de download nos cards públicos do Explorar, com o rótulo “Lista de exploração”.',
    alt: 'Controles de download da Baixora em cards do Explorar.',
    width: 1280,
    height: 800,
  },
  'search-list': {
    base: '/images/screenshots/search-list',
    title: 'Adicionar e baixar na pesquisa',
    description:
      'Controles de adicionar e baixar nos resultados de pesquisa, com o rótulo “Lista de pesquisa”.',
    alt: 'Controles de adicionar e baixar da Baixora nos resultados de pesquisa do TikTok.',
    width: 1280,
    height: 800,
  },
  'creator-profile': {
    base: '/images/screenshots/creator-profile',
    title: 'Entrada de download no perfil',
    description:
      'O botão “Baixar” no perfil público de um criador do TikTok.',
    alt: 'Botão Baixar da Baixora no perfil público de um criador do TikTok.',
    width: 1138,
    height: 785,
  },
  'creator-panel': {
    base: '/images/screenshots/creator-panel',
    title: 'Filtros e ações em lote do criador',
    description:
      'O painel do criador com filtros, seleção, exportação e salvamento em lote, com o rótulo “Painel do criador”.',
    alt: 'Painel do criador da Baixora com filtros, exportação e download em lote.',
    width: 1280,
    height: 800,
  },
} as const satisfies Record<string, ScreenshotDefinition>;

export type ScreenshotId = keyof typeof SCREENSHOTS;
