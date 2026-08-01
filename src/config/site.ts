export const SITE = {
  name: 'electricalagriculture.com',
  brand: 'Electrical Agriculture',
  title: 'Electrical Agriculture — Electrified Farming & Ag Equipment',
  description:
    'Explore the rise of electrical agriculture: electrified tractors, farm equipment efficiency, market momentum, and the path from diesel to electric powertrains. Domain available for acquisition.',
  url: 'https://electricalagriculture.com',
  email: 'sales@desertrich.com',
  locale: 'en_US',
  asOfDate: 'August 1, 2026',
  asOfISO: '2026-08-01',
} as const;

/** Cloudflare Images CDN */
export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
  /** Full-bleed field / ag machinery atmosphere */
  heroImageId: 'bb89b413-cf32-48e6-5b0f-b05adae97900',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const HERO_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);
export const OG_IMAGE = cfImageUrl(CF_IMAGES.heroImageId);

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  'electricalagriculture.com Domain Acquisition Inquiry'
)}&body=${encodeURIComponent(
  'Hello,\n\nI am interested in acquiring electricalagriculture.com.\n\nIntended use:\nBudget range:\n\nThank you.'
)}`;
