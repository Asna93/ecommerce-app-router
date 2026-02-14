'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { getProductById } from '@/lib/products';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function ProductDetail() {
  const params = useParams();
  const product = getProductById(params.id as string);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState<boolean>(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-xl">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="relative h-96">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <div className="mb-4">
            <span className="text-yellow-500 text-xl">
              {'★'.repeat(Math.floor(product.rating))}
              {'☆'.repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="text-gray-600 ml-2">({product.rating})</span>
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-6">
            ${product.price}
          </p>
          <p className="text-gray-700 mb-8">{product.description}</p>
          
          <div className="mb-4">
            <strong>Stock: </strong>
            {product.inStock ? (
              <span className="text-green-600">In Stock</span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <label className="font-semibold">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="border rounded px-3 py-2 w-20"
            />
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`px-8 py-3 rounded-lg w-full md:w-auto ${
              product.inStock
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {added ? '✓ Added to Cart!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
}