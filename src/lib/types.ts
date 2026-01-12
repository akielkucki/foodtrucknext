// Re-export Shopify types for convenience
export type { Cart, CartLine, MoneyV2, Image } from './shopify';

// Server action result type for consistent error handling
export type CartActionResult<T = void> = {
  success: boolean;
  data?: T;
  error?: string;
};

// Custom Build types for admin panel
export type CartBuildStatus = 'blueprint' | 'production' | 'delivered';

export interface CartBuild {
  id: string;
  clientName: string;
  model: string;
  status: CartBuildStatus;
  price: string;
  images: string[];
  description?: string;
  lastUpdated: string;
  createdAt: string;
}

// Enhanced CartContext type with full functionality
export type CartContextType = {
  cart: import('./shopify').Cart | null;
  isLoading: boolean;
  isUpdating: boolean;
  error: string | null;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  clearCart: () => void;
  refreshCart: () => Promise<void>;
};
