import { absoluteUrl, canonicalUrl, SITE } from '../data/site';
import type { FaqItem } from '../data/faqs';

const ORGANIZATION = {
  '@type': 'Organization',
  name: SITE.name,
  alternateName: SITE.storeTitle,
  url: SITE.url,
  logo: absoluteUrl('/images/brand/baixora-icon-128.png'),
  sameAs: [SITE.storeUrl],
};

export function organizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    ...ORGANIZATION,
    description:
      'A Baixora é uma extensão independente para baixar vídeos públicos do TikTok em lote, exportar metadados em XLSX e salvar novelas curtas.',
  };
}

export function websiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'pt-BR',
    description: SITE.description,
  };
}

export function softwareApplicationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE.name,
    alternateName: SITE.storeTitle,
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Chrome',
    softwareVersion: SITE.version,
    inLanguage: 'pt-BR',
    description:
      'Extensão independente para baixar vídeos públicos do TikTok em lote, salvar em ZIP ou pasta, exportar metadados em XLSX e baixar episódios de novelas curtas.',
    url: SITE.url,
    installUrl: SITE.storeUrl,
    image: absoluteUrl('/og/baixora-og.png'),
    sameAs: [SITE.storeUrl],
    featureList: [
      'Download em lote de pesquisas, Explorar, hashtags e perfis de criadores',
      'Saída em ZIP ou em uma pasta escolhida',
      'Download de um vídeo sem marca d’água quando a fonte permite',
      'Publicações, republicações, playlists e curtidos de criadores',
      'Seleção e download de episódios de novelas curtas',
      'Exportação de metadados públicos selecionados em XLSX',
      'Formatos de nome de arquivo e interface em 23 idiomas',
    ],
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; href: string }>,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.href),
    })),
  };
}

export function faqSchema(items: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: Date;
  dateModified?: Date;
  category: string;
}): Record<string, unknown> {
  const url = canonicalUrl(input.path);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    datePublished: input.datePublished.toISOString(),
    dateModified: (input.dateModified ?? input.datePublished).toISOString(),
    articleSection: input.category,
    inLanguage: 'pt-BR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    author: ORGANIZATION,
    publisher: ORGANIZATION,
    image: absoluteUrl('/og/baixora-og.png'),
    url,
  };
}

export function itemListSchema(
  items: Array<{ name: string; href: string }>,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: canonicalUrl(item.href),
    })),
  };
}
