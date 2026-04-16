"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    // <header className="sticky top-0 z-[1000] bg-white border-b w-full main-header">
      <header className={`sticky main-header top-0 z-[1001] bg-white border-b ${
        isScrolled ? 'active' : ''
      }`}>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-10 py-4 max-w-[1400px] mx-auto header-inner">

        {/* LOGO */}
        <div className="flex items-center justify-start">
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
        <nav className="flex justify-center items-center">
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
                <div className="absolute sub-menu left-0 top-full w-screen bg-white shadow-xl border-t p-10 flex justify-between gap-10 animate-fadeIn">

                  <div className="flex gap-20">
                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3 text-black">SHOP ANTS</h4>
                      <ul className="flex flex-col gap-2 text-gray-600">
                        <li><a href="#" className="hover:text-black">Beginner Ants</a></li>
                      </ul>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3 text-black">SHOP SUPPLIES</h4>
                      <ul className="flex flex-col gap-2 text-gray-600">
                        <li className="hover:text-black cursor-pointer">Liquid Feeders</li>
                        <li className="hover:text-black cursor-pointer">Ant Nests</li>
                        <li className="hover:text-black cursor-pointer">Ant Nectar</li>
                        <li className="hover:text-black cursor-pointer">Ant Food</li>
                        <li className="hover:text-black cursor-pointer">Accessories</li>
                      </ul>
                    </div>
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
                <div className="absolute sub-menu left-0 top-full w-screen bg-white shadow-xl border-t p-10 flex justify-between gap-10 animate-fadeIn">

                  <div className="flex gap-20">
                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3">Ant Care Guides</h4>
                      <ul className="flex flex-col gap-2 text-gray-600">
                        <li><a href="#" className="hover:text-black">Carpenter Ant Guide</a></li>
                        <li><a href="#" className="hover:text-black">Honeypot Ant Guide</a></li>
                        <li><a href="#" className="hover:text-black">Harvester Ant Guide</a></li>
                        <li><a href="#" className="hover:text-black">Leafcutter Guide</a></li>
                        <li><a href="#" className="hover:text-black">Other Care Guides</a></li>
                      </ul>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3">Our Story</h4>
                      <ul className="flex flex-col gap-2 text-gray-600">
                        <li><a href="#" className="hover:text-black">Who are we?</a></li>
                        <li><a href="#" className="hover:text-black">Meet us at conventions</a></li>
                      </ul>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3">FAQ</h4>
                      <ul className="flex flex-col gap-2 text-gray-600">
                        <li><a href="#" className="hover:text-black">General Questions</a></li>
                        <li><a href="#" className="hover:text-black">Ant Keeping Basics</a></li>
                      </ul>
                    </div>
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
                <div className="absolute sub-menu left-0 top-full w-screen bg-white shadow-xl border-t p-10 flex justify-between gap-10 animate-fadeIn">

                  <div className="flex gap-20">
                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3">Shipping Information</h4>
                      <ul className="flex flex-col gap-2 text-gray-600">
                        <li><a href="#" className="hover:text-black">Return Policy</a></li>
                        <li><a href="#" className="hover:text-black">Shipping Rules</a></li>
                        <li><a href="#" className="hover:text-black">100% Live Guarantee</a></li>
                      </ul>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3">Permits + Privacy</h4>
                      <ul className="flex flex-col gap-2 text-gray-600">
                        <li><a href="#" className="hover:text-black">Disclaimer + Permit Conditions</a></li>
                        <li><a href="#" className="hover:text-black">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-black">Terms & Conditions</a></li>
                      </ul>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="font-bold mb-3">Track Order</h4>
                      <ul className="flex flex-col gap-2 text-gray-600">
                        <li><a href="#" className="hover:text-black">Track Your Order</a></li>
                      </ul>
                    </div>
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
            </li>

          </ul>
        </nav>

       

      </div>
    </header>
  );
}