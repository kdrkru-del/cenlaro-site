export interface Product {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: 'Green Coffee' | 'Roasted Coffee' | 'Signature Blends' | 'Ground Coffee';
  coffeeType: 'Arabica' | 'Robusta' | 'Blend';
  format: 'Green' | 'Whole Bean' | 'Ground';
  origin: string;
  region: string;
  arabica: number; // percentage, e.g. 70
  robusta: number; // percentage, e.g. 30
  roast: 'Light' | 'Medium' | 'Medium-Dark' | 'Dark' | 'Unroasted';
  processing?: string;
  screen?: string;
  grade?: string;
  moisture?: string;
  crop?: string;
  grind?: 'Fine' | 'Medium' | 'Coarse' | 'Whole Bean' | 'Green';
  suitableFor?: string[]; // e.g. ['Espresso', 'Moka Pot', 'Phin', 'Filter', 'French Press']
  flavorNotes: string[];
  profile: string;
  body: number; // 1 to 5
  acidity: number; // 1 to 5
  sweetness: number; // 1 to 5
  bitterness: number; // 1 to 5
  intensity: number; // 1 to 5
  description: string;
  shortDescription: string;
  packaging: string[];
  MOQ: string;
  wholesale: boolean;
  privateLabel: boolean;
  availability: 'In Stock' | 'Available for Contract' | 'Seasonal';
  price: string | null;
  images: string[];
  featured: boolean;
  accentColor?: string;
  seoTitle: string;
  seoDescription: string;
}

export interface QuoteRequestPayload {
  name: string;
  phone: string;
  productName?: string;
  productSlug?: string;
}
