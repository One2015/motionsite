/**
 * Shared content for the landing page. Images use Unsplash so the page
 * renders with real photography out of the box — swap for owned assets later.
 */

export interface Product {
  handle: string;
  title: string;
  price: string;
  image: string;
}

const img = (id: string, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const productImages = [
  img("1607620842884-9dedd3f65e0b"), // pill bottle
  img("1584308666744-24d5c474f2ae"), // capsules
  img("1550572017-edd951b55104"), // supplements
  img("1471864190281-a93a3070b6de"), // fresh fruit
  img("1512069772995-ec65ed45afd6"), // wellness
  img("1626197031507-c17099753214"), // injection pen
  img("1559757175-5700dde675bc"), // medicine
  img("1587854692152-cbe660dbde88"), // vitamins
];

export const products: Product[] = [
  {
    handle: "compounded-semaglutide",
    title: "Compounded Semaglutide",
    price: "$296",
    image: img("1607620842884-9dedd3f65e0b"),
  },
  {
    handle: "compounded-tirzepatide",
    title: "Compounded Tirzepatide",
    price: "$399",
    image: img("1626197031507-c17099753214"),
  },
  {
    handle: "metabolic-support",
    title: "Metabolic Support",
    price: "$89",
    image: img("1550572017-edd951b55104"),
  },
  {
    handle: "daily-multivitamin",
    title: "Daily Multivitamin",
    price: "$29",
    image: img("1587854692152-cbe660dbde88"),
  },
  {
    handle: "sleep-restore",
    title: "Sleep Restore",
    price: "$45",
    image: img("1512069772995-ec65ed45afd6"),
  },
  {
    handle: "immune-defense",
    title: "Immune Defense",
    price: "$39",
    image: img("1584308666744-24d5c474f2ae"),
  },
];

export interface CarouselCard {
  label: string;
  price: string;
  title: string;
  image: string;
}

export const carouselCards: CarouselCard[] = [
  {
    label: "Starting at",
    price: "$296/mo",
    title: "Compounded Semaglutide",
    image: img("1607620842884-9dedd3f65e0b", 1000),
  },
  {
    label: "Starting at",
    price: "$399/mo",
    title: "Compounded Tirzepatide",
    image: img("1626197031507-c17099753214", 1000),
  },
  {
    label: "Starting at",
    price: "$89/mo",
    title: "Metabolic Support Bundle",
    image: img("1550572017-edd951b55104", 1000),
  },
  {
    label: "Starting at",
    price: "$45/mo",
    title: "Sleep & Recovery",
    image: img("1512069772995-ec65ed45afd6", 1000),
  },
];

export interface GuideCard {
  category: string;
  description: string;
  image: string;
}

export const guides: GuideCard[] = [
  {
    category: "Weight Loss",
    description:
      "How GLP-1 medications work with your body to support sustainable weight loss.",
    image: img("1490645935967-10de6ba17061", 600),
  },
  {
    category: "Nutrition",
    description:
      "Building a balanced plate that keeps you full and fuels your metabolism.",
    image: img("1512621776951-a57141f2eefd", 600),
  },
  {
    category: "Movement",
    description:
      "Simple, low-impact routines you can do at home to stay consistent.",
    image: img("1518611012118-696072aa579a", 600),
  },
  {
    category: "Mindset",
    description:
      "The mental habits that make healthy change stick for the long term.",
    image: img("1506126613408-eca07ce68773", 600),
  },
];
