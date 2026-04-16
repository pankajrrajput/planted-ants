"use client";

import { useState } from "react";
import { buildShopifyUrl } from "../lib/shopifyUrl";

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) {
  const handleCheckout = () => {
    // Build Shopify cart URL with all cart items
    const cartParams = cartItems.map(item => 
      `${item.id}:${item.quantity}`
    ).join(',');
    
    window.location.href = buildShopifyUrl(`/cart/${cartParams}`);
  };
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return isOpen ? (
      <div
        className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-[998] transform transition-transform duration-300 ease-in-out translate-x-0"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b pt-20">
          <h2 className="text-xl font-semibold">
            Shopping Cart ({getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6" style={{ maxHeight: 'calc(100vh - 200px)' }}>
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="mx-auto mb-4 text-gray-300"
              >
                <path
                  d="M11 7H3.577A2 2 0 0 0 1.64 9.497l2.051 8A2 2 0 0 0 5.63 19H16.37a2 2 0 0 0 1.937-1.503l2.052-8A2 2 0 0 0 18.422 7H11Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M11 7V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <button
                onClick={onClose}
                className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={item.image || "/images/placeholder-product.jpg"}
                    alt={item.name}
                    className="w-20 h-[100px] object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 text-sm">${item.price}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-auto text-red-500 hover:text-red-700 text-sm transition-colors"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 bg-white">
            <div className="flex justify-between mb-4">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-xl">${calculateTotal()}</span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors font-medium"
            >
              Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full py-3 mt-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    ) : null;
}
