export const SITE = {
  name: "electricalagriculture.com",
  brand: "Electrical Agriculture",
  title: "electricalagriculture.com | Premium Domain for Sale | Electrical Agriculture",
  description:
    "electricalagriculture.com is listed at $33,000. A field briefing on electro-agriculture: food from renewable electricity, acetate, and microbial protein — instead of more cleared land.",
  url: "https://electricalagriculture.com",
  email: "sales@desertrich.com",
  locale: "en_US",
  asOfDate: "October 3, 2026",
  asOfISO: "2026-10-03",
  price: 33000,
  priceFormatted: "$33,000",
  googleSiteVerification: "tx94Fcazdz37lQqOHmF3nJYDo8nfvkGvPQJtt6Q8hwM",
  sourceTitle: "How turning electricity directly into food could help save the planet",
  sourceAuthor: "Michael Le Page",
  sourcePublisher: "New Scientist",
  sourceDate: "22 September 2026",
  sourceUrl:
    "https://www.newscientist.com/article/2590402-how-turning-electricity-directly-into-food-could-help-save-the-planet/",
} as const;

export const OG_IMAGE = `${SITE.url}/photos/bioreactor.jpg`;

export function mailto(intent: "buy" | "offer" | "contact" = "contact") {
  const subjects = {
    buy: `Buy now — electricalagriculture.com at ${SITE.priceFormatted}`,
    offer: "Make an offer — electricalagriculture.com",
    contact: "Inquiry — electricalagriculture.com",
  };
  const bodies = {
    buy: `Hello,\n\nI want to acquire electricalagriculture.com at the listed price of ${SITE.priceFormatted}.\n\nPlease send escrow instructions.\n\nName:\nIntended use:\n`,
    offer: `Hello,\n\nI would like to make an offer on electricalagriculture.com (listed at ${SITE.priceFormatted}).\n\nOffer:\nIntended use:\n`,
    contact: `Hello,\n\nI have a question about electricalagriculture.com.\n\n`,
  };
  return `mailto:${SITE.email}?subject=${encodeURIComponent(subjects[intent])}&body=${encodeURIComponent(bodies[intent])}`;
}
