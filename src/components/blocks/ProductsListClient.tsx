'use client';

import { useState } from 'react';
import Tagline from '@/components/ui/Tagline';
import Headline from '@/components/ui/Headline';
import DirectusImage from '@/components/shared/DirectusImage';
import Container from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/products';

interface ProductsListClientProps {
  initialProducts: Product[];
}

export default function ProductsListClient({ initialProducts }: ProductsListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(new Set(initialProducts.map(p => p.category)));

  // Filter products by category
  const filteredProducts = selectedCategory
    ? initialProducts.filter(p => p.category === selectedCategory)
    : initialProducts;

  return (
    <Container>
      <div className="py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <Tagline>Explore Our Collection</Tagline>
          <Headline level="h1">Our Products</Headline>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            Discover our range of high-quality products designed to meet your needs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          <Button
            variant={selectedCategory === null ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(null)}
          >
            All Products
          </Button>
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <a
              key={product.id}
              href={`/products/${product.slug}`}
              className="group rounded-lg overflow-hidden border border-border hover:border-primary transition-colors flex flex-col h-full"
            >
              {/* Product Image */}
              <div className="aspect-square bg-muted overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-grow">
                  {product.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xl font-bold">${product.price}</span>
                  <Button variant="ghost" size="sm" asChild>
                    <span>View →</span>
                  </Button>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </Container>
  );
}
