import { Container } from '@/components/ui/Container';
import { Headline } from '@/components/ui/Headline';
import { Button } from '@/components/ui/button';

interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  image: string;
  category: string;
  details: string[];
}

interface Props {
  product: Product;
}

export default function ProductDetail({ product }: Props) {
  return (
    <Container>
      <div className="py-12 sm:py-16 lg:py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <a href="/products" className="text-sm text-muted-foreground hover:text-foreground">
            All Products
          </a>
          <span className="mx-2 text-sm text-muted-foreground">/</span>
          <span className="text-sm font-medium">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden sticky top-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {product.category}
                </span>
              </div>

              <Headline level="h1" className="mb-4">
                {product.name}
              </Headline>

              <p className="text-xl text-muted-foreground mb-6">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold">${product.price}</span>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 flex items-center">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Save for Later
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="border-t pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-2">Free Shipping</h4>
              <p className="text-sm text-muted-foreground">On orders over $100</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">1-Year Warranty</h4>
              <p className="text-sm text-muted-foreground">Hassle-free coverage</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Customer Support</h4>
              <p className="text-sm text-muted-foreground">24/7 support available</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
