'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const { getCartCount } = useCart();

  return (
    <nav className= "bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold hover:text-gray-200">
            🛒 E-Shop
          </Link>
          
          <div className="flex gap-6 items-center">
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link href="/products" className="hover:text-gray-200">
              Products
            </Link>
            <Link href="/about" className="hover:text-gray-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-200">
              Contact
            </Link>
            <Link href="/cart" className="hover:text-gray-200 relative">
              Cart
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}