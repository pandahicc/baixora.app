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
 * As cinco capturas atuais do produto. Para substituir uma, mantenha o mesmo
 * nome base e as dimensões (ou atualize width/height aqui) e gere o build. Se o
 * arquivo não existir, o ProductShot mostra um placeholder rotulado.
 *
 * As capturas mostram a interface em inglês. A extensão segue o idioma do
 * navegador e tem interface em pt-BR; as legendas devem deixar isso claro.
 */
export const SCREENSHOTS = {
  'single-download': {
    base: '/images/screenshots/single-download',
    title: 'Download de um vídeo',
    description:
      'O controle de download da extensão em um vídeo público do TikTok na aba Para você.',
    alt: 'Controle de download da Baixora em uma página pública de vídeo do TikTok.',
    width: 1280,
    height: 800,
  },
  'explore-list': {
    base: '/images/screenshots/explore-list',
    title: 'Controles na página Explorar',
    description:
      'Controles de download nos cards públicos do Explorar para salvar vídeos individuais.',
    alt: 'Controles de download da Baixora em uma página pública do Explorar.',
    width: 1280,
    height: 800,
  },
  'search-list': {
    base: '/images/screenshots/search-list',
    title: 'Adicionar e baixar na pesquisa',
    description:
      'Controles de adicionar e baixar nos resultados de pesquisa para montar uma seleção em lote.',
    alt: 'Controles de adicionar e baixar da Baixora em uma página de resultados de pesquisa do TikTok.',
    width: 1280,
    height: 800,
  },
  'creator-profile': {
    base: '/images/screenshots/creator-profile',
    title: 'Entrada de download no perfil',
    description:
      'O ponto de entrada de download da extensão em um perfil público de criador.',
    alt: 'Botão de download da Baixora em um perfil público de criador do TikTok.',
    width: 1280,
    height: 800,
  },
  'creator-panel': {
    base: '/images/screenshots/creator-panel',
    title: 'Filtros e ações em lote do criador',
    description:
      'O painel do criador com canais, filtros, seleção, exportação e ações de download.',
    alt: 'Painel de criador da Baixora com filtros, exportação e download em lote.',
    width: 1280,
    height: 800,
  },
} as const satisfies Record<string, ScreenshotDefinition>;

export type ScreenshotId = keyof typeof SCREENSHOTS;
