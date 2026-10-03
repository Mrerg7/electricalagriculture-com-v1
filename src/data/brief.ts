import { SITE as site } from "../config/site";

export type Pathway = "Hydrogen" | "Acetate" | "Methane" | "Fats" | "Cells";

export type Maker = {
  name: string;
  place: string;
  pathway: Pathway;
  status: string;
  summary: string;
};

export type Note = {
  slug: string;
  kicker: string;
  title: string;
  dek: string;
  date: string;
  minutes: number;
  paragraphs: string[];
};

export const pathways: { id: Pathway; title: string; lede: string }[] = [
  {
    id: "Hydrogen",
    title: "Hydrogen, then a microbe",
    lede: "Split water with renewable electricity. Feed the hydrogen, plus captured CO₂, to bacteria in a tank. Harvest a protein-rich biomass.",
  },
  {
    id: "Acetate",
    title: "Acetate, then anything that eats it",
    lede: "In 2022 a Riverside team made acetate from CO₂ and grew yeast, mushrooms, and algae on it. The prototype feeds that same molecule to plant roots, in the dark, under a roof of panels.",
  },
  {
    id: "Methane",
    title: "Gas fermentation, already at tonne scale",
    lede: "Microbes have already been grown on methane for animal feed. The climate case only holds if that gas stops coming from fossils.",
  },
  {
    id: "Fats",
    title: "Syngas into fat",
    lede: "Hydrogen and carbon monoxide can be turned into edible fats — the calories plants are worst at making on purpose.",
  },
  {
    id: "Cells",
    title: "The plant, without the field",
    lede: "Grow the cells that make chocolate, coffee, or oil in a vat, and skip the tree, the season, and the cleared forest.",
  },
];

export const makers: Maker[] = [
  {
    name: "Solar Foods",
    place: "Finland",
    pathway: "Hydrogen",
    status: "Demonstration factory",
    summary:
      "Makes Solein, a microbial protein, from hydrogen, CO₂ pulled from the air, and nutrients including renewable ammonia. Co-founder Pasi Vainikka told New Scientist the process had scaled to almost five times the early expectation. The company is aiming for a plant of about 6,400 tonnes a year, at a production cost of a few dollars per kilogram.",
  },
  {
    name: "Acetate Consortium",
    place: "University of Copenhagen",
    pathway: "Acetate",
    status: "Research consortium",
    summary:
      "Led in the reporting by Remko Boom. Acetate from CO₂ electrolysis dissolves in water, unlike hydrogen, so microbes can actually get hold of it and grow faster. Boom’s view: this can decouple a serious share of protein from land — and no single route will do the whole job.",
  },
  {
    name: "Nolux",
    place: "University of California, Riverside",
    pathway: "Acetate",
    status: "Spin-out",
    summary:
      "In 2022 a team including Robert Jinkerson made acetate from CO₂ by electrolysis and grew yeast, mushrooms, and algae on it. Sunlight to acetate to yeast was almost 18 times ordinary farming; algae, nearly four. A 2024 paper estimated plant production could rise about tenfold if crops grow in the dark and take acetate through their roots. Plants cannot simply be fed acetate — using it efficiently still has to be engineered. Nolux is the Riverside spin-out on that problem.",
  },
  {
    name: "Savor",
    place: "United States",
    pathway: "Fats",
    status: "Start-up",
    summary:
      "Converts syngas — hydrogen and carbon monoxide — into edible fats. A narrow product, and a useful one: fat is where a lot of dietary energy sits, and it does not have to come from an oil crop.",
  },
  {
    name: "Calysta",
    place: "United States · factory in China",
    pathway: "Methane",
    status: "About 20,000 tonnes a year",
    summary:
      "Gas fermentation at commercial scale, reported at roughly 20,000 tonnes a year from a factory in China. Proof that tanks of microbes can leave the pilot plant. The feedstock story still has to become renewable.",
  },
  {
    name: "Unibio",
    place: "Denmark · plant in Saudi Arabia",
    pathway: "Methane",
    status: "Plant under construction",
    summary:
      "Building toward about 50,000 tonnes a year. Another marker that single-cell protein is an industrial process now, not a paper.",
  },
  {
    name: "Norferm",
    place: "Norway",
    pathway: "Methane",
    status: "1999–2005 · historical",
    summary:
      "Produced 110,000 tonnes of microbial protein from methane for fish feed, then stopped. The useful lesson is the one New Scientist draws: gas fermentation has already been scaled, and it was not a fantasy of the 2020s.",
  },
  {
    name: "Jooules",
    place: "Reported 2026",
    pathway: "Hydrogen",
    status: "Gas fermentation",
    summary:
      "Named alongside Air Protein and Aerbio as part of the hydrogen and gas-fermentation cohort racing the same basic idea: electricity in, protein out, almost no field.",
  },
  {
    name: "Air Protein",
    place: "Reported 2026",
    pathway: "Hydrogen",
    status: "Gas fermentation",
    summary:
      "Part of the group making food from gases rather than acreage. The shared constraint is renewable power, not a shortage of bacteria.",
  },
  {
    name: "Aerbio",
    place: "Reported 2026",
    pathway: "Hydrogen",
    status: "Gas fermentation",
    summary:
      "Grouped by New Scientist with the companies fermenting gases into edible biomass. Different brands, one thermodynamic bet.",
  },
];

export const notes: Note[] = [
  {
    slug: "eighteen-times-the-acre",
    kicker: "Efficiency",
    title: "Eighteen times the acre",
    dek: "A yeast fed on acetate made from electricity and CO₂ used sunlight almost 18 times more carefully than a field.",
    date: "22 September 2026",
    minutes: 6,
    paragraphs: [
      "A crop is a poor solar panel. Plants typically keep less than one percent of the sunlight that falls on them and turn it into something we can eat. A standard panel keeps more than 20 percent as electricity. Experimental panels, New Scientist notes, have more than doubled even that.",
      "The interesting step is what you do with the current. In 2022, a team including Robert Jinkerson at the University of California, Riverside, made acetate from CO₂ by electrolysis and fed it to yeast, mushrooms, and algae. Counted as sunlight-to-food, the yeast route was almost 18 times as efficient as ordinary farming. Algae landed near four times. New Scientist calls those gigantic leaps.",
      "A 2024 follow-up by Jinkerson and colleagues sketches the building, not just the microbe. Panels cover the roof. Electricity makes acetate on site. The acetate is supplied to the roots of crops growing in the dark below. With further work they estimate plant production could rise about tenfold — on the order of ten times the food per area of land, with the surplus free for rewilding. Closed rooms also sidestep a lot of weather shock, pests, and disease.",
      "It is not simple, and the piece says so. Plants cannot simply be fed acetate. Using it efficiently still has to be engineered. That is not a promise that a bakery opens next year on a substation. It is a measurement of waste. Photosynthesis spends most of the sun on staying alive, on leaves you do not eat, on seasons, on drought.",
      "Vertical farms are the cautionary cousin. They still grow plants, they just replace the sun with lamps, and the reporting puts the land bill near 13 hectares of panels for every hectare of growing room. Electro-agriculture, if it works, refuses that trade. You do not light a lettuce. You feed a microbe a molecule the panel helped you make.",
      "Nolux, the Riverside spin-out, is trying the harder version: plants altered so they can grow on acetate without sunlight. If that holds, the crop does not disappear. The field might.",
    ],
  },
  {
    slug: "solein-leaves-the-lab",
    kicker: "Hydrogen",
    title: "Solein leaves the lab",
    dek: "Solar Foods is already running a factory on hydrogen, air, and electricity. The early line beat its own forecast.",
    date: "22 September 2026",
    minutes: 5,
    paragraphs: [
      "In Finland, Solar Foods grows a bacterium on hydrogen and carbon dioxide and dries it into Solein, a protein-rich powder. The hydrogen comes from splitting water. The CO₂ can come from the air. The electricity has to be renewable or the climate math collapses.",
      "Co-founder Pasi Vainikka told New Scientist: “It has scaled really well. It’s almost five times more productive than we thought early on.” The company’s aim is a plant around 6,400 tonnes a year, made for a few dollars a kilogram and sold for more than twice that.",
      "A few thousand tonnes is a speck next to the world’s protein. It is also no longer a rendering. The machine exists. It met a number. The number was better than the one in the model.",
      "Hydrogen is an awkward lunch. Remko Boom at the University of Copenhagen put it plainly: hydrogen hardly dissolves in water, so microbes struggle to catch it. Acetate, made by electrolyzing CO₂, does dissolve. That is why several groups now treat acetate as the better spoon, even while Solar Foods proves the hydrogen route can run.",
      "Neither route is a diet. The reporting is plain about that: a lot of progress has already been made on microbial foods, and the open question is whether people will eat them. Even if they do, they will not want to live on microbes alone. The shortage the field expects is protein, not carbohydrates. Solein is an ingredient — a powder, not a harvest festival.",
    ],
  },
  {
    slug: "the-land-we-could-give-back",
    kicker: "Land",
    title: "The land we could give back",
    dek: "Food already causes more than a third of emissions. Making some of it in tanks is only useful if the electricity is clean — and plentiful.",
    date: "22 September 2026",
    minutes: 7,
    paragraphs: [
      "Farming is not a side issue in the climate ledger. Food production accounts for more than a third of global emissions, and it is the main reason wild land becomes fields. Farm more gently and each hectare yields less, so the frontier moves. The population is still growing. As people get richer they eat more meat, which eats more grain, which eats more ground.",
      "Heat is already charging rent. New Scientist cites crop losses from climate change above $20 billion a year, and notes that wheat yields would be higher without that damage. Europe’s harvest this year was a reminder, not a preview of the worst case.",
      "Electro-agriculture is a way to stop asking the landscape for every calorie. The 2024 sketch is a building wearing solar panels, with crops in the dark underneath taking acetate through their roots. If the tenfold gain holds, that is about ten times the food per area of land, and the difference can go back to wild ground. Closed systems also largely avoid the pest and disease losses that cut yields in open fields. A bad season does not book the room.",
      "The limit is the one the magazine does not soften. Nobody expects food from air and electricity to replace crops and livestock soon, because it would demand more renewable electricity than the world currently generates. If the power is fossil, you have built an expensive way to burn gas into protein.",
      "Boom’s line is the adult one: “We will probably not rely on one particular route.” Some calories stay in fields because people like standing in them, and because soil still does things a reactor does not. Some calories move, and the forest keeps the difference.",
      `This briefing follows reporting by ${site.sourceAuthor} in ${site.sourcePublisher}, ${site.sourceDate}. It is not a forecast, and this site is not affiliated with the scientists or companies named.`,
    ],
  },
  {
    slug: "fat-from-syngas",
    kicker: "Calories",
    title: "Fat from syngas, cocoa from a vat",
    dek: "Protein gets the headlines. A large share of the calories on a plate are fat — and fat can be chemistry.",
    date: "22 September 2026",
    minutes: 5,
    paragraphs: [
      "Savor, a U.S. start-up named in the New Scientist piece, makes edible fats from syngas: hydrogen plus carbon monoxide. It is a less picturesque story than a field of sunflowers. It is also closer to how a refinery thinks, which is why it might scale.",
      "Elsewhere, the same logic reaches the foods people actually crave. Plant cells — cocoa among them — can be grown in vats, so the molecule that flavors a bar does not require an equatorial tree and a cleared understory. The vat is not romantic. The forest that remains is.",
      "Methane fermentation is the precedent for scale, and the warning for feedstock. Norferm in Norway made 110,000 tonnes of microbial protein for fish food between 1999 and 2005. Calysta’s factory in China is reported around 20,000 tonnes a year. Unibio is building toward about 50,000 tonnes a year in Saudi Arabia. The hardware lesson is settled. The climate lesson is not, as long as the gas is fossil.",
      "Put the routes side by side and the category stops looking like one company’s trick. Hydrogen protein, acetate for yeast and altered plants, syngas fats, cells in tanks, methane if the methane is clean. Electrical agriculture is the name for the whole shelf.",
      "That is also why the exact-match .com matters. The science just acquired a plain-language title. The companies still have product names. The field did not, until the words sat next to each other.",
    ],
  },
];

export const faqs = [
  {
    q: "What is electrical agriculture?",
    a: "Two related ideas. One is microbial food: renewable power makes hydrogen or acetate, and a tank of microbes turns it into protein. The other, electro-agriculture proper, grows plants on acetate instead of sunlight — panels on the roof, crops in the dark, acetate to the roots. New Scientist expects a protein shortage, not a carbohydrate one, and says people will not want to live on microbes alone.",
  },
  {
    q: "Is electricalagriculture.com for sale?",
    a: `Yes. One exact-match .com, listed at ${site.priceFormatted}. Serious transfers close through an independent escrow service. Write ${site.email} to buy at the list price, make an offer, or ask a question.`,
  },
  {
    q: "Will this replace farms?",
    a: "Not soon. New Scientist is explicit: feeding the world this way would take more renewable electricity than we generate today. The near-term picture is ingredients and feed from tanks, beside conventional agriculture, not instead of it overnight.",
  },
  {
    q: "How is this different from vertical farming?",
    a: "Vertical farms still grow plants under lamps. The reporting estimates about 13 hectares of solar panels for each hectare of growing area. The electro-agriculture prototype does not light the crop. A 2022 Riverside experiment made acetate from CO₂ and fed yeast, mushrooms, and algae. The 2024 sketch sends that acetate to roots in a dark room under the panels.",
  },
  {
    q: "Where do the figures on this site come from?",
    a: `They follow “${site.sourceTitle},” by ${site.sourceAuthor}, ${site.sourcePublisher}, ${site.sourceDate}. This site is an independent briefing and a domain listing. It is not affiliated with New Scientist, the researchers, or the companies named.`,
  },
  {
    q: "Do you take payment on this website?",
    a: "No. There is no checkout. Acquisition starts by email and completes by escrow, so neither side wires funds against a promise.",
  },
];

export const captureCompare = [
  { name: "Field crops", value: 1, note: "Under 1% of sunlight becomes food" },
  { name: "Solar panels", value: 20, note: "More than 20% becomes electricity" },
  { name: "Best lab panels", value: 40, note: "Experimental cells, above 40%" },
];

export const foodMultiples = [
  { name: "Field crops", multiple: 1 },
  { name: "Algae on acetate", multiple: 4 },
  { name: "Tuned plants", multiple: 10 },
  { name: "Yeast on acetate", multiple: 18 },
];
