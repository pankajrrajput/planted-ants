"use client";

import { useCart } from "../contexts/CartContext";
import CartDrawer from "./CartDrawer";

export default function LayoutWrapper({ children }) {
  const { cartItems, isCartOpen, updateQuantity, removeItem, closeCart } = useCart();

  return (
    <>
      {children}
      {/* Cart Drawer - Global Sidebar */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </>
  );
}
