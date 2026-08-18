import { Product } from '../types';
import { SHOE_CASA_IMAGES } from '../assets/images';

export const CATEGORIES_LIST = [
  // Men Categories
  { 
    id: 'men-loafers', 
    name: 'Loafers & Slip-Ons', 
    gender: 'men', 
    count: 6, 
    image: SHOE_CASA_IMAGES.horsebitBlack 
  },
  { 
    id: 'men-chappal', 
    name: 'Norozi & Chappals', 
    gender: 'men', 
    count: 4, 
    image: SHOE_CASA_IMAGES.noroziBurgundy 
  },
  { 
    id: 'men-formal', 
    name: 'Formal Dress Shoes', 
    gender: 'men', 
    count: 5, 
    image: SHOE_CASA_IMAGES.captoeOxford 
  },
  { 
    id: 'men-casual', 
    name: 'Suede & Casual Shoes', 
    gender: 'men', 
    count: 4, 
    image: SHOE_CASA_IMAGES.suedeNavy 
  },
  { 
    id: 'men-sandals', 
    name: 'Leather Slides & Sandals', 
    gender: 'men', 
    count: 3, 
    image: SHOE_CASA_IMAGES.wovenTan 
  },
  // Women Categories
  { 
    id: 'women-chappal', 
    name: 'Ladies Chappals', 
    gender: 'women', 
    count: 3, 
    image: SHOE_CASA_IMAGES.boutiqueStore 
  },
  { 
    id: 'women-flats', 
    name: 'Flats & Mules', 
    gender: 'women', 
    count: 3, 
    image: SHOE_CASA_IMAGES.tasselBox 
  },
  { 
    id: 'women-sandals', 
    name: 'Sandals', 
    gender: 'women', 
    count: 3, 
    image: SHOE_CASA_IMAGES.monkStrap 
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'sc-101',
    name: 'SHOE CASA Signature Horsebit Loafers',
    shortDescription: 'Supple full-grain calf leather with hand-finished metallic horsebit buckle.',
    description: 'A hallmark of luxury footwear at SHOE CASA Faisalabad. Meticulously handcrafted from premium full-grain black leather, these loafers feature a signature horsebit metal saddle, ergonomic memory-foam insole, and durable non-slip sole. Perfectly styled for formal events and high-end casual gatherings.',
    category: 'men-loafers',
    gender: 'men',
    categoryLabel: 'Men Loafers',
    price: 0,
    images: [
      SHOE_CASA_IMAGES.horsebitBlack,
      SHOE_CASA_IMAGES.tasselBox,
      SHOE_CASA_IMAGES.boutiqueStore
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Jet Black', hex: '#111111' },
      { name: 'Burnished Brown', hex: '#3b2219' },
      { name: 'Onyx Polish', hex: '#1e1e24' }
    ],
    rating: 4.9,
    reviewCount: 48,
    isBestSeller: true,
    isFeatured: true,
    isNewArrival: true,
    inStock: true,
    material: '100% Genuine Full-Grain Calf Leather',
    sole: 'Handcrafted Dual-Density Leather & Anti-Slip Rubber',
    origin: 'Handcrafted in Pakistan • SHOE CASA Workshop',
    features: [
      'Polished gold/silver horsebit buckle',
      'Memory-foam padded arch support',
      'Hand-stitched apron apron welt',
      'Genuine breathable leather lining'
    ]
  },
  {
    id: 'sc-102',
    name: 'SHOE CASA Burnished Tassel Loafers',
    shortDescription: 'Rich cognac brown leather with burnished toe and tassel accents.',
    description: 'Crafted from hand-patinated cognac and dark chocolate leather, these tassel loafers offer supreme luxury feel and unmatched flexibility. The subtle textured finish and hand-stitched welt make them ideal for smart-casual trousers and festive Shalwar Kameez.',
    category: 'men-loafers',
    gender: 'men',
    categoryLabel: 'Men Loafers',
    price: 0,
    images: [
      SHOE_CASA_IMAGES.tasselBox,
      SHOE_CASA_IMAGES.wovenTan,
      SHOE_CASA_IMAGES.boutiqueStore
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Cognac Brown', hex: '#633918' },
      { name: 'Dark Chocolate', hex: '#3b2219' },
      { name: 'Deep Espresso', hex: '#261710' }
    ],
    rating: 4.9,
    reviewCount: 42,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    material: 'Hand-Burnished Fine Calf Leather',
    sole: 'Lightweight Flex Grip Outsole',
    origin: 'Handcrafted in Pakistan • SHOE CASA Workshop',
    features: [
      'Hand-burnished Italian patina finish',
      'Double tassel detailing with gold-tone ferrule',
      'Sweat-absorbent leather sockliner',
      'Reinforced heel counter for stability'
    ]
  },
  {
    id: 'sc-103',
    name: 'SHOE CASA Textured Woven Bit Loafers',
    shortDescription: 'Intricate woven leather upper with polished hardware buckle.',
    description: 'A distinctive standout from our Regent Mall boutique showcase. Features an artisanal woven leather vamp paired with mirror-polished leather trim and modern metallic buckle for a statement luxury profile.',
    category: 'men-loafers',
    gender: 'men',
    categoryLabel: 'Men Loafers',
    price: 0,
    images: [
      SHOE_CASA_IMAGES.wovenTan,
      SHOE_CASA_IMAGES.horsebitBlack,
      SHOE_CASA_IMAGES.monkStrap
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Cognac Tan Weave', hex: '#8a4b22' },
      { name: 'Midnight Black Weave', hex: '#141414' },
      { name: 'Espresso Weave', hex: '#362118' }
    ],
    rating: 5.0,
    reviewCount: 36,
    isNewArrival: true,
    isFeatured: true,
    inStock: true,
    material: 'Artisanal Woven Calf Leather Upper',
    sole: 'Dual-Layer Anti-Skid Rubber & Leather Sole',
    origin: 'Handcrafted in Pakistan • SHOE CASA Workshop',
    features: [
      'Intricately woven leather saddle and vamp',
      'Sleek modern metallic bar buckle',
      'Padded anti-fatigue footbed',
      'Available in store and nationwide delivery'
    ]
  },
  {
    id: 'sc-104',
    name: 'SHOE CASA Handcrafted Norozi Chappal',
    shortDescription: 'Iconic traditional Pakistani Norozi & Kaptaan silhouette in heavy oxblood leather.',
    description: 'The pinnacle of authentic Pakistani traditional heritage. Constructed from heavy-gauge, full-grain cowhide leather with durable tire-rubber sole and intricate hand-punched border stitching. Uncompromising comfort for weddings, Jummah prayers, Eid festivals, and everyday traditional dress.',
    category: 'men-chappal',
    gender: 'men',
    categoryLabel: 'Men Chappals',
    price: 0,
    images: [
      SHOE_CASA_IMAGES.noroziBurgundy,
      SHOE_CASA_IMAGES.boutiqueStore,
      SHOE_CASA_IMAGES.wovenTan
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Oxblood Burgundy', hex: '#58111a' },
      { name: 'Matte Jet Black', hex: '#181818' },
      { name: 'Walnut Dark Brown', hex: '#382216' }
    ],
    rating: 5.0,
    reviewCount: 74,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    material: '100% Pure Heavy-Gauge Cowhide Leather',
    sole: 'Authentic Tyre-Rubber Outsole for Lifetime Wear',
    origin: 'Handcrafted in Pakistan • SHOE CASA Workshop',
    features: [
      'Authentic double-stitched Kaptaan cross-strap design',
      'Adjustable side buckle for customized instep fit',
      'Comfortable sweat-wicking leather footbed',
      'Built for years of heavy wear'
    ]
  },
  {
    id: 'sc-105',
    name: 'SHOE CASA Executive Cap-Toe Oxford',
    shortDescription: 'Classic closed-lace formal Oxford with mirror cap-toe polish.',
    description: 'The definitive formal dress shoe for weddings, corporate executives, and black-tie galas. Features mirror-polished cap-toe details, Goodyear-welt inspired construction, and clean five-eyelet closed lacing.',
    category: 'men-formal',
    gender: 'men',
    categoryLabel: 'Men Formal',
    price: 0,
    images: [
      SHOE_CASA_IMAGES.captoeOxford,
      SHOE_CASA_IMAGES.monkStrap,
      SHOE_CASA_IMAGES.boutiqueStore
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Classic Black', hex: '#111111' },
      { name: 'Oxford Brown', hex: '#4a2c1b' }
    ],
    rating: 4.9,
    reviewCount: 52,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    material: 'High-Lustre Full Grain Bovine Leather',
    sole: 'Stitched Leather Sole with Rubber Inset',
    origin: 'Handcrafted in Pakistan • SHOE CASA Workshop',
    features: [
      'Mirror-shine cap toe',
      'Closed 5-eyelet lacing system',
      'Orthopedic arch-cushioned footbed',
      'Includes premium cotton shoe dustbag'
    ]
  },
  {
    id: 'sc-106',
    name: 'SHOE CASA Artisanal Monkstrap Shoes',
    shortDescription: 'Hand-cut burnished leather with solid antique brass buckle closures.',
    description: 'An elegant statement footwear that bridges contemporary suiting and timeless heritage. Hand-cut, shaped, and polished over wooden lasts at our boutique workshop, delivering instant distinction with tailored suits or festive wear.',
    category: 'men-formal',
    gender: 'men',
    categoryLabel: 'Men Formal',
    price: 0,
    images: [
      SHOE_CASA_IMAGES.monkStrap,
      SHOE_CASA_IMAGES.captoeOxford,
      SHOE_CASA_IMAGES.tasselBox
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Espresso Brown', hex: '#341f17' },
      { name: 'Onyx Black', hex: '#151515' },
      { name: 'Cognac Amber', hex: '#7a421b' }
    ],
    rating: 4.9,
    reviewCount: 33,
    isNewArrival: true,
    isFeatured: true,
    inStock: true,
    material: 'Hand-Dyed Artisanal Leather',
    sole: 'Beveled Leather Sole with Rubber Heel Cap',
    origin: 'Handcrafted in Pakistan • SHOE CASA Workshop',
    features: [
      'Twin adjustable solid brass roller buckles',
      'Hidden elastic gussets for easy slip-on convenience',
      'All-day padded memory foam insole',
      'Hand-burnished edges'
    ]
  },
  {
    id: 'sc-107',
    name: 'SHOE CASA Premium Suede Penny Loafers',
    shortDescription: 'Unlined plush Italian velvet suede with flexible driver sole.',
    description: 'Casual luxury redefined. These lightweight Belgian-inspired penny loafers are crafted from butter-soft suede with a glove-like unlined construction. Featherlight on foot and exceptionally refined for daily casual comfort.',
    category: 'men-casual',
    gender: 'men',
    categoryLabel: 'Men Casual',
    price: 0,
    images: [
      SHOE_CASA_IMAGES.suedeNavy,
      SHOE_CASA_IMAGES.horsebitBlack,
      SHOE_CASA_IMAGES.wovenTan
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Midnight Navy Suede', hex: '#1a2744' },
      { name: 'Sand Beige Suede', hex: '#c5b38d' },
      { name: 'Charcoal Black Suede', hex: '#262626' }
    ],
    rating: 4.8,
    reviewCount: 29,
    isNewArrival: true,
    isFeatured: true,
    inStock: true,
    material: 'Plush Italian Calf Suede',
    sole: 'Ultra-Flex Thin Leather & Grip Rubber Inset',
    origin: 'Handcrafted in Pakistan • SHOE CASA Workshop',
    features: [
      'Glove-soft unlined forefoot for breathability',
      'Hand-stitched perimeter piping',
      'Featherlight travel-friendly weight',
      'Anti-slip tread base'
    ]
  },
  {
    id: 'sc-108',
    name: 'SHOE CASA Boutique Showroom Collection',
    shortDescription: 'Exclusive Grand Regent Mall flagship showroom display pairs.',
    description: 'Step into the world of SHOE CASA with our flagship showroom selection at Grand Regent Mall, Chen One Road, Faisalabad. Featuring our complete range of formal footwear, luxury loafers, traditional chappals, and bespoke leathercraft.',
    category: 'men-loafers',
    gender: 'men',
    categoryLabel: 'Showroom Collection',
    price: 0,
    images: [
      SHOE_CASA_IMAGES.boutiqueStore,
      SHOE_CASA_IMAGES.tasselBox,
      SHOE_CASA_IMAGES.noroziBurgundy
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    colors: [
      { name: 'Signature Brown', hex: '#4a2818' },
      { name: 'Obsidian Black', hex: '#111111' }
    ],
    rating: 5.0,
    reviewCount: 68,
    isBestSeller: true,
    isFeatured: true,
    inStock: true,
    material: 'Handcrafted Premium Leather Selection',
    sole: 'Custom Crafted Soles',
    origin: 'Grand Regent Mall • Chen One Road, Faisalabad',
    features: [
      'Live store try-on & sizing consultation',
      'Immediate in-store purchase or nationwide delivery',
      'Direct WhatsApp helpline & customer support',
      'Bespoke finishing upon request'
    ]
  }
];

export const SHOE_CASA_PRODUCTS = PRODUCTS;
