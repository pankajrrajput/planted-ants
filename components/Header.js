"use client";

import { useState, useEffect } from "react";
import { useCart } from "../contexts/CartContext";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems, isCartOpen, updateQuantity, removeItem, getTotalItems, closeCart, openCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      updateQuantity(product.id, 1);
    }
  };

  return (
    <>
    <header className={`sticky main-header top-0 z-[1001] bg-white border-b ${
      isScrolled ? 'active' : ''
    }`}>
      <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center max-w-[1400px] mx-auto header-wrapper-cst">
      {/* <div className="grid grid-cols-[1fr_auto_1fr] items-center px-10 py-4 max-w-[1400px] mx-auto"> */}

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-2xl mobile-togle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        {/* LOGO */}
        <div className="flex items-center justify-start logo">
          <a href="/" className="block">
            <img
              src="/images/logo.webp"
              alt="Logo"
              width={255}
              height={107}
              className="h-auto max-w-[180px] md:max-w-[220px] object-contain"
            />
          </a>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex justify-center items-center desktop-menu">
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
                  <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </button>

              {openMenu === "shop" && (

                <div className="absolute sub-menu left-0 top-full w-screen bg-white shadow-xl border-t p-10 flex justify-between gap-10 animate-fadeIn shop-menu">

                  <div className="flex gap-20">
                    <div className="flex flex-col">
                      <h4 className="font-bold mb-5 text-black header-heading">SHOP ANTS</h4>
                      <ul className="flex flex-col gap-3 text-gray-600 mt-10 sub-inner-menu">
                        <li><a href="#" className="hover:text-black">Beginner Ants</a></li>
                      </ul>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3 text-black header-heading">SHOP SUPPLIES</h4>
                      <ul className="flex flex-col gap-3 text-gray-600 sub-inner-menu">
                        <li className="hover:text-black cursor-pointer">Liquid Feeders</li>
                        <li className="hover:text-black cursor-pointer">Ant Nests</li>
                        <li className="hover:text-black cursor-pointer">Ant Nectar</li>
                        <li className="hover:text-black cursor-pointer">Ant Food</li>
                        <li className="hover:text-black cursor-pointer">Accessories</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start header-submenu-images">
                    <a href="#" className="flex flex-col items-center text-center group">
                      <img
                        src="/images/ants_for_sale.webp"
                        className="w-90 h-90 object-cover rounded-md transition duration-300 group-hover:scale-105"
                      />
                      <p className="mt-2 font-semibold text-sm tracking-wide">ANTS FOR SALE</p>
                    </a>

                    <a href="#" className="flex flex-col items-center text-center group">
                      <img
                        src="/images/supplies.webp"
                        className="w-90 h-90 object-cover rounded-md transition duration-300 group-hover:scale-105"
                      />
                      <p className="mt-2 font-semibold text-sm tracking-wide">SUPPLIES FOR SALE</p>
                    </a>
                  </div>

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
                  <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </button>

              {openMenu === "learn" && (
                <div className="absolute sub-menu left-0 top-full w-screen bg-white shadow-xl border-t p-10 flex justify-between gap-10 animate-fadeIn learn-menu">

                  <div className="flex gap-20">
                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3 text-black header-heading">Ant Care Guides</h4>
                      <ul className="flex flex-col gap-3 text-gray-600 sub-inner-menu">
                        <li><a href="#" className="hover:text-black">Carpenter Ant Guide</a></li>
                        <li><a href="#" className="hover:text-black">Honeypot Ant Guide</a></li>
                        <li><a href="#" className="hover:text-black">Harvester Ant Guide</a></li>
                        <li><a href="#" className="hover:text-black">Leafcutter Guide</a></li>
                        <li><a href="#" className="hover:text-black">Other Care Guides</a></li>
                      </ul>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3 text-black header-heading">Our Story</h4>
                      <ul className="flex flex-col gap-3 text-gray-600 sub-inner-menu">
                        <li><a href="#" className="hover:text-black">Who are we?</a></li>
                        <li><a href="#" className="hover:text-black">Meet us at conventions</a></li>
                      </ul>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3 text-black header-heading">FAQ</h4>
                      <ul className="flex flex-col gap-3 text-gray-600 sub-inner-menu">
                        {/* <li><a href="#" className="hover:text-black">General Questions</a></li>
                        <li><a href="#" className="hover:text-black">Ant Keeping Basics</a></li> */}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start header-submenu-images">
                    <a href="#" className="flex flex-col items-center text-center group">
                      <img
                        src="/images/story.webp"
                        className="w-90 h-90 object-cover rounded-md transition duration-300 group-hover:scale-105"
                      />
                      <p className="mt-2 font-semibold text-sm tracking-wide">OUR STORY</p>
                    </a>
                  </div>

                </div>
              )}
            </li>

            {/* OUR STORY */}
            <li className="flex items-center">
              <a href="/our-story" className="hover:text-gray-600 transition">
                Our Story
              </a>
            </li>

            {/* INFO */}
            <li className="relative flex items-center">
              <button
                className="flex items-center gap-1 hover:text-gray-600 transition duration-200"
                onClick={() =>
                  setOpenMenu(openMenu === "info" ? null : "info")
                }
              >
                INFO
                <svg width="10" height="7" className="ml-1">
                  <path d="m1 1 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="2"></path>
                </svg>
              </button>

              {openMenu === "info" && (
                <div className="absolute sub-menu left-0 top-full w-screen bg-white shadow-xl border-t p-10 flex justify-between gap-10 animate-fadeIn info-menu">

                  <div className="flex gap-20">
                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3 text-black header-heading">Shipping Information</h4>
                      <ul className="flex flex-col gap-3 text-gray-600 sub-inner-menu">
                        <li><a href="#" className="hover:text-black">Return Policy</a></li>
                        <li><a href="#" className="hover:text-black">Shipping Rules</a></li>
                        <li><a href="#" className="hover:text-black">100% Live Guarantee</a></li>
                      </ul>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3 text-black header-heading">Permits + Privacy</h4>
                      <ul className="flex flex-col gap-3 text-gray-600 sub-inner-menu">
                        <li><a href="#" className="hover:text-black">Disclaimer + Permit Conditions</a></li>
                        <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
                      </ul>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3 text-black header-heading">Track Order</h4>
                      <ul className="flex flex-col gap-3 text-gray-600 sub-inner-menu">
                        {/* <li><a href="#" className="hover:text-black">Track Your Order</a></li> */}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-6 items-start header-submenu-images">
                    <a href="#" className="flex flex-col items-center text-center group">
                      <img
                        src="/images/contact.jpg"
                        className="w-90 h-90 object-cover rounded-md transition duration-300 group-hover:scale-105"
                      />
                      <p className="mt-2 font-semibold text-sm tracking-wide">CONTACT US</p>
                    </a>

                    <a href="#" className="flex flex-col items-center text-center group">
                      <img
                        src="/images/track.jpg"
                        className="w-90 h-90 object-cover rounded-md transition duration-300 group-hover:scale-105"
                      />
                      <p className="mt-2 font-semibold text-sm tracking-wide">TRACK ORDER</p>
                    </a>
                  </div>

                </div>
              )}
            </li>

          </ul>
        </nav>

        {/* CART */}
        <div className="flex justify-end">
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
              <path d="M6 9H18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {getTotalItems() > 0 && (
              <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>

      </div>

    </header>
    
    {mobileMenuOpen && (
      <div className="fixed inset-0 z-[2000] md:hidden bg-black/20 mobile-menu">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-24 left-1/2 -translate-x-1/2 z-10 
                    w-14 h-14 rounded-full bg-white shadow-md
                    flex items-center justify-center text-3xl mobile-arrow"
        >
          ×
        </button>

        {/* MENU PANEL */}
        <div className="absolute top-40 left-0 right-0 bg-white rounded-t-2xl min-h-[70vh] px-8 py-10 sub-menu-mobile">
          <ul className="space-y-8 font-bold text-3xl uppercase text-black">

            {/* SHOP */}
            <li className="flex items-center justify-between">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "shop" ? null : "shop")
                }
                className="text-left"
              >
                SHOP
              </button>

              <button
                onClick={() =>
                  setOpenMenu(openMenu === "shop" ? null : "shop")
                }
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center arro-right"
              > 
                ›
              </button>
            </li>

            {openMenu === "shop" && (
              <div className="pl-4 mt-3 space-y-4 text-gray-600">

                <div>
                  <h4 className="font-bold text-black mb-2">SHOP ANTS</h4>
                  <ul className="space-y-1">
                    <li><a href="#">Beginner Ants</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-2">SHOP SUPPLIES</h4>
                  <ul className="space-y-1">
                    <li><a href="#">Liquid Feeders</a></li>
                    <li><a href="#">Ant Nests</a></li>
                    <li><a href="#">Ant Nectar</a></li>
                    <li><a href="#">Ant Food</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>
                <div className="flex gap-6 items-start">
                    <a href="#" className="flex flex-col items-center text-center group">
                      <img
                        src="/images/ants_for_sale.webp"
                        className="w-48 h-32 object-cover rounded-md transition duration-300 group-hover:scale-105"
                      />
                      <p className="mt-2 font-semibold text-sm tracking-wide">ANTS FOR SALE</p>
                    </a>

                    <a href="#" className="flex flex-col items-center text-center group">
                      <img
                        src="/images/supplies.webp"
                        className="w-48 h-32 object-cover rounded-md transition duration-300 group-hover:scale-105"
                      />
                      <p className="mt-2 font-semibold text-sm tracking-wide">SUPPLIES FOR SALE</p>
                    </a>
                  </div>

              </div>
            )}

            {/* LEARN */}
            <li className="flex items-center justify-between">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "learn" ? null : "learn")
                }
                className="text-left"
              >
                LEARN
              </button>

              <button
                onClick={() =>
                  setOpenMenu(openMenu === "learn" ? null : "learn")
                }
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center arrow-right"
              >
                ›
              </button>
            </li>

            {openMenu === "learn" && (
              <div className="pl-4 mt-3 space-y-4 text-gray-600">

                <div>
                  <h4 className="font-bold text-black mb-2">Ant Care Guides</h4>
                  <ul className="space-y-1">
                    <li><a href="#">Carpenter Ant Guide</a></li>
                    <li><a href="#">Honeypot Ant Guide</a></li>
                    <li><a href="#">Harvester Ant Guide</a></li>
                    <li><a href="#">Leafcutter Guide</a></li>
                    <li><a href="#">Other Care Guides</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-2">Our Story</h4>
                  <ul className="space-y-1">
                    <li><a href="#">Who are we?</a></li>
                    <li><a href="#">Meet us at conventions</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-2">FAQ</h4>
                  <ul className="space-y-1">
                    {/* <li><a href="#">General Questions</a></li>
                    <li><a href="#">Ant Keeping Basics</a></li> */}
                  </ul>
                </div>

                <div className="flex gap-6 items-start">
                    <a href="#" className="flex flex-col items-center text-center group">
                      <img
                        src="/images/story.webp"
                        className="w-48 h-32 object-cover rounded-md transition duration-300 group-hover:scale-105"
                      />
                      <p className="mt-2 font-semibold text-sm tracking-wide">OUR STORY</p>
                    </a>
                  </div>

              </div>
            )}

            {/* OUR STORY */}
            <li>
              <a href="/our-story">OUR STORY</a>
            </li>

            {/* INFO */}
            <li className="flex items-center justify-between">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "info" ? null : "info")
                }
                className="text-left"
              >
                INFO
              </button>

              <button
                onClick={() =>
                  setOpenMenu(openMenu === "info" ? null : "info")
                }
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
              >
                ›
              </button>
            </li>

             {openMenu === "info" && (
              <div className="pl-4 mt-3 space-y-4 text-gray-600">

                <div>
                  <h4 className="font-bold text-black mb-2">Shipping Information</h4>
                  <ul className="space-y-1">
                    <li><a href="#">Return Policy</a></li>
                    <li><a href="#">Shipping Rules</a></li>
                    <li><a href="#">100% Live Guarantee</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-2">Permits + Privacy</h4>
                  <ul className="space-y-1">
                    <li><a href="#">Disclaimer + Permit Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-black mb-2">Track Order</h4>
                  <ul className="space-y-1">
                    {/* <li><a href="#">Track Your Order</a></li> */}
                  </ul>
                </div>
                <div className="flex gap-6 items-start">
                    <a href="#" className="flex flex-col items-center text-center group">
                      <img
                        src="/images/contact.jpg"
                        className="w-48 h-32 object-cover rounded-md transition duration-300 group-hover:scale-105"
                      />
                      <p className="mt-2 font-semibold text-sm tracking-wide">CONTACT US</p>
                    </a>

                    <a href="#" className="flex flex-col items-center text-center group">
                      <img
                        src="/images/track.jpg"
                        className="w-48 h-32 object-cover rounded-md transition duration-300 group-hover:scale-105"
                      />
                      <p className="mt-2 font-semibold text-sm tracking-wide">TRACK ORDER</p>
                    </a>
                  </div>

              </div>
            )}
          </ul>
        </div>
      </div>
    )}
    </>
  );
}