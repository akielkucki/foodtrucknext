const CART_ID_KEY = 'shopify_cart_id';

/**
 * Get the Shopify cart ID from localStorage
 */
export function getCartIdFromStorage(): string | null {
  if (typeof window === 'undefined') return null;

  try {
    return localStorage.getItem(CART_ID_KEY);
  } catch (error) {
    console.error('Error reading cart ID from localStorage:', error);
    return null;
  }
}

/**
 * Store the Shopify cart ID in localStorage
 */
export function setCartIdInStorage(cartId: string): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CART_ID_KEY, cartId);
  } catch (error) {
    console.error('Error saving cart ID to localStorage:', error);
  }
}

/**
 * Clear the cart ID from localStorage
 */
export function clearCartIdFromStorage(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(CART_ID_KEY);
  } catch (error) {
    console.error('Error clearing cart ID from localStorage:', error);
  }
}

/**
 * Check if a cart is expired (older than 10 days)
 * Shopify carts typically expire after 10 days of inactivity
 * Note: Cart type doesn't include createdAt, so this function is not currently used
 * Cart expiry is handled by Shopify API returning null/404 for expired carts
 */
// export function isCartExpired(cart: Cart): boolean {
//   if (!cart.createdAt) return false;
//
//   const createdDate = new Date(cart.createdAt);
//   const now = new Date();
//   const daysSinceCreation = (now.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);
//
//   return daysSinceCreation > CART_EXPIRY_DAYS;
// }
