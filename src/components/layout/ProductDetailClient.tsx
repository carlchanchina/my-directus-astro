'use client';

import Container from '@/components/ui/Container';
import Headline from '@/components/ui/Headline';
import { Button } from '@/components/ui/button';
import ShareDialog from '@/components/ui/ShareDialog';
import type { Product } from '@/lib/products';

interface ProductDetailClientProps {
  initialProduct: Product;
  relatedProducts: Product[];
  productUrl: string;
  slug?: string;
}

export default function ProductDetailClient({
  initialProduct,
  relatedProducts,
  productUrl,
  slug,
}: ProductDetailClientProps) {
  const product = initialProduct;

  if (!product) return null;

  return (
    <>
      <Container className="py-12 sm:py-16 lg:py-20">
        {/* Breadcrumb */}
        <div className="mb-8">
          <a href="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            All Products
          </a>
          <span className="mx-2 text-sm text-muted-foreground">/</span>
          <span className="text-sm font-medium">{product.category}</span>
        </div>

        {/* Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Product Image */}
          <div className="flex items-center">
            <div className="aspect-square w-full bg-muted rounded-lg overflow-hidden">
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
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium uppercase tracking-wider">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <Headline level="h1" className="mb-4">
                {product.name}
              </Headline>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-bold">${product.price}</span>
                <p className="text-sm text-muted-foreground mt-2">
                  Free delivery on orders over $100
                </p>
              </div>

              {/* Features */}
              {product.details && product.details.length > 0 && (
                <div className="mb-8">
                  <h3 className="font-semibold mb-4 text-[15px] uppercase tracking-wide flex items-center">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <span className="text-primary font-semibold mr-3 mt-0.5">✓</span>
                        <span className="text-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-6 border-t">
              <Button size="lg" className="flex-1">
                Add to Cart
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                Save for Later
              </Button>
              <ShareDialog url={productUrl} title={product.name} />
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="border-t pt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="text-2xl">🚚</div>
              <div>
                <h4 className="font-semibold mb-1">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">On orders over $100</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🛡️</div>
              <div>
                <h4 className="font-semibold mb-1">1-Year Warranty</h4>
                <p className="text-sm text-muted-foreground">Hassle-free coverage</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">💬</div>
              <div>
                <h4 className="font-semibold mb-1">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">Always here to help</p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="border-t pt-12">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <a
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.slug}`}
                  className="group rounded-lg overflow-hidden border border-border hover:border-primary transition-colors"
                >
                  <div className="aspect-square bg-muted overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-medium text-primary mb-2 uppercase">
                      {relatedProduct.category}
                    </p>
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      ${relatedProduct.price}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
