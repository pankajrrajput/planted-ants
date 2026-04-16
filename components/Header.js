"use client";

import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const {
    cartItems,
    isCartOpen,
    updateQuantity,
    removeItem,
    getTotalItems,
    closeCart,
    openCart,
  } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky main-header top-0 z-[1001] bg-white border-b ${
        isScrolled ? "active" : ""
      }`}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr] items-center px-4 md:px-10 py-4 max-w-[1400px] mx-auto">
        
        {/* LOGO */}
        <div className="flex items-center justify-start">
          <a href="/" className="block">
            <img
              src="/images/logo.webp"
              alt="Logo"
              width={255}
              height={107}
              className="h-auto max-w-[140px] md:max-w-[220px] object-contain"
            />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex justify-center items-center">
          <ul className="flex items-center gap-8 font-semibold text-gray-900 uppercase tracking-wide">

            {/* SHOP */}
            <li className="relative flex items-center">
              <button
                className="flex items-center gap-1 hover:text-gray-600 transition duration-200"
                onClick={() =>
                  setOpenMenu(openMenu === "shop" ? null : "shop")
                }
              >
                SHOP
                <svg width="10" height="7" className="ml-1">
                  <path
                    d="m1 1 4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              {openMenu === "shop" && (
                <div className="absolute sub-menu left-0 top-full w-screen bg-white shadow-xl border-t p-10">
                  Shop Menu
                </div>
              )}
            </li>

            {/* LEARN */}
            <li className="relative flex items-center">
              <button
                className="flex items-center gap-1 hover:text-gray-600 transition duration-200"
                onClick={() =>
                  setOpenMenu(openMenu === "learn" ? null : "learn")
                }
              >
                LEARN
                <svg width="10" height="7" className="ml-1">
                  <path
                    d="m1 1 4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </li>

            <li>
              <a href="/our-story">Our Story</a>
            </li>

            <li className="relative flex items-center">
              <button
                className="flex items-center gap-1 hover:text-gray-600 transition duration-200"
                onClick={() =>
                  setOpenMenu(openMenu === "info" ? null : "info")
                }
              >
                INFO
                <svg width="10" height="7" className="ml-1">
                  <path
                    d="m1 1 4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex justify-end items-center gap-4">
          
          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-2xl"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

          {/* CART */}
          <button
            onClick={openCart}
            className="relative text-xl hover:opacity-80 transition-colors"
          >
            <svg
              role="presentation"
              strokeWidth="2"
              focusable="false"
              width="22"
              height="22"
              className="icon icon-cart"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M9 2L6 9H3L6.5 19H17.5L21 9H18L15 2H9Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 9H18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t shadow-lg px-6 py-4">
          <ul className="flex flex-col gap-4 font-semibold uppercase text-gray-900">
            <li>
              <a href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>
                Shop
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>
                Learn
              </a>
            </li>
            <li>
              <a
                href="/our-story"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Story
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setMobileMenuOpen(false)}>
                Info
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}