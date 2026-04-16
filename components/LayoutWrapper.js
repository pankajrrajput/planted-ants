"use client";

import { useEffect } from "react";
import { useCart } from "../contexts/CartContext";
import CartDrawer from "./CartDrawer";

export default function LayoutWrapper({ children }) {
  const { cartItems, isCartOpen, updateQuantity, removeItem, closeCart } = useCart();

  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        window.location.reload();
        return;
      }

      const navEntries = performance.getEntriesByType?.("navigation");
      const navType = navEntries && navEntries[0] && navEntries[0].type;
      if (navType === "back_forward") {
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

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
