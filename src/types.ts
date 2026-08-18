export type ShoeCategory = 
  | 'men-formal'
  | 'men-loafers'
  | 'men-casual'
  | 'men-sandals'
  | 'men-chappal'
  | 'women-chappal'
  | 'women-flats'
  | 'women-sandals'
  | 'women-formal'
  | 'women-casual';

export type Gender = 'men' | 'women' | 'unisex';

export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  category: ShoeCategory;
  gender: Gender;
  categoryLabel: string;
  price: number; // in PKR
  originalPrice?: number; // in PKR for discount
  discountPercent?: number;
  images: string[];
  sizes: number[]; // EU sizes e.g., 39, 40, 41, 42, 43, 44, 45 (or 36-41 for ladies)
  colors: ProductColor[];
  rating: number;
  reviewCount: number;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isLimited?: boolean;
  inStock: boolean;
  material: string;
  sole: string;
  origin: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  selectedSize: number;
  selectedColor: ProductColor;
  quantity: number;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface CustomerReview {
  id: string;
  quote: string;
  author: string;
  verified: boolean;
  rating: number;
  productName?: string;
  date?: string;
}

export interface FilterState {
  gender: 'all' | 'men' | 'women';
  category: string;
  searchQuery: string;
  minPrice: number;
  maxPrice: number;
  selectedSizes: number[];
  selectedColors: string[];
  sortBy: 'featured' | 'price-low' | 'price-high' | 'rating' | 'newest';
}

export interface OrderCustomerInfo {
  fullName: string;
  phoneNumber: string;
  city: string;
  deliveryAddress: string;
  orderNotes?: string;
  paymentMethod: 'cod' | 'bank_transfer' | 'whatsapp';
}
