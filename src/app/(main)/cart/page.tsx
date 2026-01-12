import type { Metadata } from 'next';
import { CartPage } from '@/components/cart/CartPage';

export const metadata: Metadata = {
  title: 'Shopping Cart | Food Truck Parts',
  description: 'Review your cart and proceed to checkout.',
};

export default function Cart() {
  return <CartPage />;
}
