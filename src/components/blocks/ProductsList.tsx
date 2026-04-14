// Mock product data - replace with Directus fetcher when ready
const mockProducts = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    slug: 'premium-wireless-headphones',
    price: 299.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: '/images/product-1.jpg',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'Eco-Friendly Water Bottle',
    slug: 'eco-friendly-water-bottle',
    price: 49.99,
    description: 'Sustainable water bottle made from recycled materials',
    image: '/images/product-2.jpg',
    category: 'Lifestyle'
  },
  {
    id: '3',
    name: 'Smart Fitness Tracker',
    slug: 'smart-fitness-tracker',
    price: 199.99,
    description: 'Track your fitness goals with advanced health monitoring',
    image: '/images/product-3.jpg',
    category: 'Electronics'
  },
  {
    id: '4',
    name: 'Professional Camera Bag',
    slug: 'professional-camera-bag',
    price: 149.99,
    description: 'Durable and spacious bag for professional photographers',
    image: '/images/product-4.jpg',
    category: 'Photography'
  },
  {
    id: '5',
    name: 'Organic Coffee Beans',
    slug: 'organic-coffee-beans',
    price: 34.99,
    description: 'Premium organic coffee beans sourced fair trade',
    image: '/images/product-5.jpg',
    category: 'Food'
  },
  {
    id: '6',
    name: 'Minimalist Desk Lamp',
    slug: 'minimalist-desk-lamp',
    price: 79.99,
    description: 'Modern LED desk lamp with adjustable brightness',
    image: '/images/product-6.jpg',
    category: 'Home'
  }
];

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function ProductsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {mockProducts.map((product: Product) => (
        <a
          key={product.id}
          href={`/products/${product.slug}`}
          className="group rounded-lg overflow-hidden border border-border hover:border-primary transition-colors"
        >
          <div className="aspect-square bg-muted overflow-hidden mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <span className="text-xs font-medium text-primary">{product.category}</span>
            <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {product.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold">${product.price}</span>
              <button className="px-3 py-1 bg-primary text-primary-foreground rounded-md text-sm hover:opacity-90 transition-opacity">
                View
              </button>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
