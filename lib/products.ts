// lib/products.ts
import { Product } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 79.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    description: "High-quality wireless headphones with noise cancellation",
    inStock: true,
    rating: 4.5
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    description: "Feature-rich smartwatch with fitness tracking",
    inStock: true,
    rating: 4.7
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 49.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    description: "Durable backpack with laptop compartment",
    inStock: false,
    rating: 4.3
  },
  {
    id: 4,
    name: "Coffee Maker",
    price: 89.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
    description: "Programmable coffee maker with thermal carafe",
    inStock: true,
    rating: 4.6
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 129.99,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    description: "Comfortable running shoes with excellent support",
    inStock: true,
    rating: 4.8
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 34.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    description: "LED desk lamp with adjustable brightness",
    inStock: true,
    rating: 4.2
  }
];

export function getProductById(id: number | string): Product | undefined {
  return products.find(p => p.id === parseInt(id.toString()));
}

export function getCategories(): string[] {
  return [...new Set(products.map(p => p.category))];
}