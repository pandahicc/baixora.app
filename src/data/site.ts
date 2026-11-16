import siteConfig from '../../site.config.json';

const envGaMeasurementId = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;

export const SITE = {
  url: siteConfig.url,
  name: 'Baixora',
  legalName: 'Baixora',
  shortName: 'Baixora',
  title: 'Baixora – Baixe e salve vídeos facilmente',
  description:
    'Baixador de vídeos online e extensão para o Chrome. Baixe vídeos do TikTok sem marca d’água, um a um ou em lote, direto no navegador.',
  storeUrl:
    'https://chromewebstore.google.com/detail/video-downloader-for-tikt/gjhfeagkgkfmhbgladfbimflnmiedjem?hl=pt_BR',
  storeTitle: 'Baixador de Vídeos para o TikTok',
  version: '1.3.3',
  supportEmail: 'pandahi.cc@gmail.com',
  interfaceLanguages: 23,
  freeDailyLimit: 10,
  gaMeasurementId: envGaMeasurementId ?? '',
};

export const NAV = [
  { label: 'Baixar em lote', href: '/recursos/baixar-em-lote/', highlight: true },
  { label: 'Recursos', href: '/recursos/', highlight: false },
  { label: 'Guias', href: '/guias/', highlight: false },
  { label: 'Planos', href: '/planos/', highlight: false },
  { label: 'Suporte', href: '/suporte/', highlight: false },
] as const;

export const FEATURES = [
  {
    id: 'bulk-download',
    title: 'Download em lote',
    href: '/recursos/baixar-em-lote/',
    icon: 'layers',
    featured: true,
    description:
      'Selecione vídeos de pesquisas, Explorar, hashtags e perfis de criadores e salve tudo em ZIP ou em uma pasta.',
  },
  {
    id: 'single-video-download',
    title: 'Download de um vídeo',
    href: '/recursos/baixar-videos-tiktok/',
    icon: 'download',
    description:
      'Salve o vídeo sem marca d’água e em HD quando o TikTok disponibilizar essa fonte, com nome de arquivo personalizado.',
  },
  {
    id: 'creator-video-download',
    title: 'Vídeos de criadores',
    href: '/recursos/videos-de-criadores/',
    icon: 'user',
    description:
      'Carregue publicações, republicações, playlists ou curtidos de um perfil, filtre a lista e baixe a seleção.',
  },
  {
    id: 'xlsx-export',
    title: 'Exportação XLSX',
    href: '/recursos/exportar-xlsx/',
    icon: 'table',
    description:
      'Exporte 15 campos públicos dos vídeos selecionados para uma planilha XLSX.',
  },
  {
    id: 'short-drama-download',
    title: 'Novelas curtas',
    href: '/recursos/novelas-curtas/',
    icon: 'film',
    description:
      'Abra uma novela curta pública, selecione episódios e baixe ou exporte a seleção em XLSX.',
  },
] as const;

export const SUPPORTED_PAGES = [
  'Páginas de vídeo',
  'Perfis de criadores',
  'Resultados de pesquisa',
  'Explorar',
  'Páginas de hashtag',
  'Novelas curtas',
  'Início e Seguindo',
] as const;

export const USE_CASES = [
  {
    title: 'Criadores salvando referências',
    icon: 'spark',
    description:
      'Mantenha uma pasta local com os vídeos públicos que você quer estudar, consultar ou discutir com o time.',
  },
  {
    title: 'Gestores de redes sociais',
    icon: 'list',
    description:
      'Reúna um lote de uma hashtag de campanha, de uma pesquisa ou de um perfil sem baixar um vídeo por vez.',
  },
  {
    title: 'Pesquisadores e analistas',
    icon: 'table',
    description:
      'Combine os MP4 selecionados com uma planilha XLSX de views, curtidas, comentários, compartilhamentos, datas e contexto de playlist.',
  },
  {
    title: 'Agências e pequenos times',
    icon: 'folder',
    description:
      'Salve publicações aprovadas em uma pasta escolhida e mantenha a página de origem e a exportação juntas para revisão.',
  },
] as const;

export const COMPARISON = [
  {
    label: 'Download de um único vídeo',
    free: 'Incluído',
    premium: 'Incluído',
  },
  {
    label: 'Fonte sem marca d’água e em HD quando disponível',
    free: 'Incluído',
    premium: 'Incluído',
  },
  {
    label: 'Download em lote de pesquisas, Explorar e hashtags',
    free: '10 itens/dia',
    premium: 'Fluxo completo',
  },
  {
    label: 'Publicações, republicações, playlists e curtidos',
    free: 'Limitado',
    premium: 'Fluxo completo',
  },
  {
    label: 'Episódios de novelas curtas',
    free: 'Limitado',
    premium: 'Fluxo completo',
  },
  {
    label: 'Salvar em pasta ou baixar como ZIP',
    free: 'Limitado',
    premium: 'Fluxo completo',
  },
  {
    label: 'Exportação de metadados em XLSX',
    free: '10 itens/dia',
    premium: 'Fluxo completo',
  },
  {
    label: 'Formatos de nome de arquivo',
    free: 'Incluído',
    premium: 'Incluído',
  },
  {
    label: 'Idiomas da interface',
    free: '23',
    premium: '23',
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: 'Recursos',
    links: [
      { label: 'Todos os recursos', href: '/recursos/' },
      { label: 'Download em lote', href: '/recursos/baixar-em-lote/' },
      { label: 'Download de um vídeo', href: '/recursos/baixar-videos-tiktok/' },
      { label: 'Vídeos de criadores', href: '/recursos/videos-de-criadores/' },
      { label: 'Novelas curtas', href: '/recursos/novelas-curtas/' },
      { label: 'Exportação XLSX', href: '/recursos/exportar-xlsx/' },
    ],
  },
  {
    title: 'Guias',
    links: [
      { label: 'Todos os guias', href: '/guias/' },
      {
        label: 'Baixar vídeos do TikTok',
        href: '/guias/como-baixar-videos-do-tiktok/',
      },
      {
        label: 'Baixar vídeos em lote',
        href: '/guias/como-baixar-videos-do-tiktok-em-lote/',
      },
      {
        label: 'Baixar vídeos de um criador',
        href: '/guias/como-baixar-videos-de-um-criador-do-tiktok/',
      },
      {
        label: 'Exportar dados para o Excel',
        href: '/guias/como-exportar-dados-de-videos-do-tiktok-para-excel/',
      },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre a Baixora', href: '/sobre/' },
      { label: 'Suporte', href: '/suporte/' },
      { label: 'Novidades', href: '/novidades/' },
      { label: 'Email de suporte', href: `mailto:${SITE.supportEmail}` },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Política de Privacidade', href: '/privacidade/' },
      { label: 'Termos de Uso', href: '/termos/' },
      { label: 'Chrome Web Store', href: storeUrl('footer') },
    ],
  },
] as const;

export const RELATED_TOOLS = [
  {
    name: 'TokGrid — análise de TikTok',
    href: 'https://tokgrid.app/',
  },
  {
    name: 'ATK — monitor de lives do TikTok',
    href: 'https://atk-live.com/',
  },
  {
    name: 'TikTok Subtitle Export',
    href: 'https://tiktoksubtitleexport.com/',
  },
] as const;

export const STATIC_PATHS = [
  '/',
  '/recursos/',
  '/recursos/baixar-em-lote/',
  '/recursos/baixar-videos-tiktok/',
  '/recursos/videos-de-criadores/',
  '/recursos/exportar-xlsx/',
  '/recursos/novelas-curtas/',
  '/guias/',
  '/planos/',
  '/suporte/',
  '/sobre/',
  '/novidades/',
  '/privacidade/',
  '/termos/',
] as const;

export function storeUrl(campaign: string): string {
  const url = new URL(SITE.storeUrl);
  url.searchParams.set('utm_source', new URL(SITE.url).hostname);
  url.searchParams.set('utm_medium', 'website');
  url.searchParams.set('utm_campaign', campaign);
  return url.toString();
}

export function canonicalUrl(pathname = '/'): string {
  const url = new URL(pathname, SITE.url);
  if (!url.pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(url.pathname)) {
    url.pathname += '/';
  }
  return url.href;
}

export function absoluteUrl(pathname: string): string {
  return new URL(pathname, SITE.url).href;
}
