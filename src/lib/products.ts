// Product utilities and helpers

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  category: string;
  details?: string[];
}

const allProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    price: 299.99,
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality',
    image: '/images/product-1.jpg',
    category: 'Electronics',
    details: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Bluetooth 5.0 connectivity',
      'Premium leather ear cups',
      'Built-in microphone'
    ]
  },
  {
    id: '2',
    name: 'Eco-Friendly Water Bottle',
    slug: 'eco-friendly-water-bottle',
    price: 49.99,
    description: 'Sustainable water bottle made from recycled materials with double-wall insulation',
    image: '/images/product-2.jpg',
    category: 'Lifestyle',
    details: [
      'Made from 100% recycled plastic',
      'Double-wall insulation',
      'Keeps drinks cold for 24 hours',
      'Eco-friendly manufacturing',
      '1L capacity'
    ]
  },
  {
    id: '3',
    name: 'Smart Fitness Tracker',
    slug: 'smart-fitness-tracker',
    price: 199.99,
    description: 'Advanced fitness tracker with heart rate monitoring and sleep tracking',
    image: '/images/product-3.jpg',
    category: 'Electronics',
    details: [
      'Heart rate & blood oxygen monitoring',
      'Sleep tracking with detailed analytics',
      '7-day battery life',
      'Water resistant',
      'Weather resistant'
    ]
  },
  {
    id: '4',
    name: 'Professional Camera Bag',
    slug: 'professional-camera-bag',
    price: 149.99,
    description: 'Durable and spacious bag designed for professional photographers',
    image: '/images/product-4.jpg',
    category: 'Photography',
    details: [
      'Weatherproof exterior',
      'Foam padding for equipment protection',
      'Customizable compartments',
      'Tripod attachment points',
      'Lifetime warranty'
    ]
  },
  {
    id: '5',
    name: 'Organic Coffee Beans',
    slug: 'organic-coffee-beans',
    price: 34.99,
    description: 'Premium organic coffee beans sourced from fair trade farms',
    image: '/images/product-5.jpg',
    category: 'Food',
    details: [
      '100% Organic certified',
      'Fair trade sourced',
      'Single origin beans',
      'Medium roast',
      '500g per bag'
    ]
  },
  {
    id: '6',
    name: 'Minimalist Desk Lamp',
    slug: 'minimalist-desk-lamp',
    price: 79.99,
    description: 'Modern LED desk lamp with adjustable brightness and color temperature',
    image: '/images/product-6.jpg',
    category: 'Home',
    details: [
      'LED technology',
      'Adjustable brightness (0-100%)',
      'Color temperature control',
      'Touch controls',
      'USB charging port'
    ]
  }
];

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
  return allProducts;
}

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => p.slug === slug);
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(p => p.category === category);
}

/**
 * Get related products (same category, excluding current product)
 */
export function relatedProducts(currentSlug: string, limit = 3): Product[] {
  const current = getProductBySlug(currentSlug);
  if (!current) return [];

  return allProducts
    .filter(p => p.category === current.category && p.slug !== currentSlug)
    .slice(0, limit);
}

/**
 * Get all unique categories
 */
export function getAllCategories(): string[] {
  return [...new Set(allProducts.map(p => p.category))];
}

/**
 * Format price as currency
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price);
}
