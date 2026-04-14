"use client";

import { useState } from "react";

export default function CareGuidesCarousel() {
  const slides = [
    {
      badge: "",
      title: "Beginner Ant Care Guides",
      text: "Just starting off your journey keeping ants? Learn more about caring for your colony the right way.",
      buttonText: "All Care Guides",
      buttonLink: "/pages/care-guides-for-ant-keeping",
    },
    {
      badge: "ALL YOU NEED",
      title: "Starter Kit",
      text: "Everything you need to begin your ant keeping journey with confidence.",
      buttonText: "Starter Kits",
      buttonLink: "/collections/starter-kits",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? slides.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === slides.length - 1 ? 0 : i + 1));
  };

  const slide = slides[index];

  return (
    <div className="section section-full">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* FIXED IMAGE (does NOT change) */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/carecrousel.jpeg"
            alt="Ant Care"
            className="rounded-md shadow-md w-full h-auto"
          />
        </div>

        {/* SLIDING TEXT ONLY */}
        <div className="w-full md:w-1/2 relative">

          <div className="min-h-[220px] transition-all duration-500">
            {slide.badge && (
              <p className="font-semibold text-sm opacity-70 mb-2">
                {slide.badge}
              </p>
            )}

            <h2 className="text-3xl font-bold mb-3">{slide.title}</h2>

            <p className="text-gray-600 mb-6">{slide.text}</p>

            <a
              href={slide.buttonLink}
              className="inline-block px-6 py-3 bg-black text-white rounded-md"
            >
              {slide.buttonText}
            </a>
          </div>

          {/* CONTROLS */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={prev}
              className="px-3 py-2 border rounded-full"
            >
              Prev
            </button>

            <button
              onClick={next}
              className="px-3 py-2 border rounded-full"
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}