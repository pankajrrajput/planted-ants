"use client";

import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <header className="sticky top-0 z-[1000] bg-white border-b">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-10 py-4">

        {/* LOGO */}
        <div className="flex justify-center">
          <img
            src="/images/logo.webp"
            alt="Logo"
            width={255}
            height={107}
          />
        </div>

        {/* NAV */}
        <nav>
          <ul className="flex gap-6 items-center font-semibold text-gray-900">

            {/* SHOP */}
            <li className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "shop" ? null : "shop")
                }
              >
                SHOP ⌄
              </button>

              {openMenu === "shop" && (
                <div className="absolute left-0 top-full w-screen bg-white shadow-xl p-10 z-[999] flex justify-between">

                  {/* LEFT SIDE - LINKS */}
                  <div className="flex gap-16">

                    <div>
                      <h4 className="font-bold mb-3">SHOP ANTS</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><a href="#">Beginner Ants</a></li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold mb-3">SHOP SUPPLIES</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li>Liquid Feeders</li>
                        <li>Ant Nests</li>
                        <li>Ant Nectar</li>
                        <li>Ant Food</li>
                        <li>Accessories</li>
                      </ul>
                    </div>

                  </div>

                  {/* RIGHT SIDE - IMAGES (IMPORTANT PART) */}
                  <div className="flex gap-6">

                    <a href="#" className="text-center">
                      <img
                        src="/images/ants_for_sale.webp"
                        className="w-48 h-32 object-cover rounded-md"
                      />
                      <p className="mt-2 font-semibold text-sm">ANTS FOR SALE</p>
                    </a>

                    <a href="#" className="text-center">
                      <img
                        src="/images/supplies.webp"
                        className="w-48 h-32 object-cover rounded-md"
                      />
                      <p className="mt-2 font-semibold text-sm">SUPPLIES FOR SALE</p>
                    </a>

                  </div>

                </div>
              )}
            </li>

            {/* LEARN */}
            <li className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "learn" ? null : "learn")
                }
              >
                LEARN ⌄
              </button>

              {openMenu === "learn" && (
                <div className="absolute left-0 top-full w-screen bg-white shadow-xl p-10 z-[999] flex justify-between">

                  {/* LEFT SIDE */}
                  <div className="flex gap-16">

                    {/* Column 1 */}
                    <div>
                      <h4 className="font-bold mb-3">Ant Care Guides</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><a href="#">Carpenter Ant Guide</a></li>
                        <li><a href="#">Honeypot Ant Guide</a></li>
                        <li><a href="#">Harvester Ant Guide</a></li>
                        <li><a href="#">Leafcutter Guide</a></li>
                        <li><a href="#">Other Care Guides</a></li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h4 className="font-bold mb-3">Our Story</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><a href="#">Who are we?</a></li>
                        <li><a href="#">Meet us at conventions</a></li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h4 className="font-bold mb-3">FAQ</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><a href="#">General Questions</a></li>
                        <li><a href="#">Ant Keeping Basics</a></li>
                      </ul>
                    </div>

                  </div>

                  {/* RIGHT SIDE - IMAGE PROMO */}
                  <div className="flex gap-6">

                    <a href="#" className="text-center">
                      <img
                        src="/images/story.webp"
                        className="w-48 h-32 object-cover rounded-md"
                        alt="Our Story"
                      />
                      <p className="mt-2 font-semibold text-sm">OUR STORY</p>
                    </a>

                  </div>

                </div>
              )}
            </li>

            {/* Our story */}
            <li>
              <a href="/our-story" className="hover:text-gray-600">
                Our Story
              </a>
            </li>

            {/* INFO */}
            <li className="relative">
              <button
                onClick={() =>
                  setOpenMenu(openMenu === "info" ? null : "info")
                }
              >
                INFO ⌄
              </button>

              {openMenu === "info" && (
                <div className="absolute left-0 top-full w-screen bg-white shadow-xl p-10 z-[999] flex justify-between">

                  {/* LEFT SIDE - 3 COLUMNS */}
                  <div className="flex gap-16">

                    {/* Column 1 */}
                    <div>
                      <h4 className="font-bold mb-3">Shipping Information</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><a href="#">Return Policy</a></li>
                        <li><a href="#">Shipping Rules</a></li>
                        <li><a href="#">100% Live Guarantee</a></li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h4 className="font-bold mb-3">Permits + Privacy</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><a href="#">Disclaimer + Permit Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <h4 className="font-bold mb-3">Track Order</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li><a href="#">Track Your Order</a></li>
                      </ul>
                    </div>

                  </div>

                  {/* RIGHT SIDE - 2 IMAGES */}
                  <div className="flex gap-6">

                    {/* Image 1 */}
                    <a href="#" className="text-center">
                      <img
                        src="/images/contact.jpg"
                        className="w-48 h-32 object-cover rounded-md"
                        alt="Contact"
                      />
                      <p className="mt-2 font-semibold text-sm">CONTACT US</p>
                    </a>

                    {/* Image 2 */}
                    <a href="#" className="text-center">
                      <img
                        src="/images/track.jpg" 
                        className="w-48 h-32 object-cover rounded-md"
                        alt="Track Order"
                      />
                      <p className="mt-2 font-semibold text-sm">TRACK ORDER</p>
                    </a>

                  </div>

                </div>
              )}
            </li>

          </ul>
        </nav>

        {/* CART */}
        <div className="flex justify-end">
          <a href="#" className="relative text-xl">
            <svg
              role="presentation"
              strokeWidth="2"
              focusable="false"
              width="22"
              height="22"
              className="icon icon-cart"
              viewBox="0 0 22 22"
            >
              <path
                d="M11 7H3.577A2 2 0 0 0 1.64 9.497l2.051 8A2 2 0 0 0 5.63 19H16.37a2 2 0 0 0 1.937-1.503l2.052-8A2 2 0 0 0 18.422..."
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            {/* <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-1 rounded-full">
              0
            </span> */}
          </a>
        </div>

      </div>
    </header>
  );
}