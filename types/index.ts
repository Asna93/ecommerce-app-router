// types/index.ts

// Product type definition
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  inStock: boolean;
  rating: number;
}

// Cart item type (Product + quantity)
export interface CartItem extends Product {
  quantity: number;
}

// Cart Context type
export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  loading: boolean;
}

// Form data types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}