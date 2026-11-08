export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  bentoClass: string;
  badge?: string;
  aspectRatioDesktop?: string;
  isDoubleHeight?: boolean;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  categorySlug: string;
  serves?: string;
  isPopular?: boolean;
  isNew?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string;
  specialInstructions?: string;
}

export interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  desktopImage: string;
  mobileImage: string;
  targetUrl: string;
  ctaText: string;
}

export interface LocationInfo {
  district: string;
  address: string;
  serviceType: 'delivery' | 'pickup';
}
