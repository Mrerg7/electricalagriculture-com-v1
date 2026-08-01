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
  price: 33000,
  priceFormatted: '$33,000',
} as const;

/** Cloudflare Images CDN helpers (add image IDs here when assets are uploaded) */
export const CF_IMAGES = {
  accountHash: '-sPAUAWeA405NiWJ0SNIQA',
} as const;

export function cfImageUrl(imageId: string, variant = 'public'): string {
  return `https://imagedelivery.net/${CF_IMAGES.accountHash}/${imageId}/${variant}`;
}

export const HERO_IMAGE = '/images/hero.png';
export const OG_IMAGE = `${SITE.url}/images/hero.png`;

export const ACQUISITION_MAILTO = `mailto:${SITE.email}?subject=${encodeURIComponent(
  `electricalagriculture.com Domain Acquisition Inquiry — ${SITE.priceFormatted}`
)}&body=${encodeURIComponent(
  `Hello,\n\nI am interested in acquiring electricalagriculture.com at the listed price of ${SITE.priceFormatted}.\n\nIntended use:\n\nThank you.`
)}`;
