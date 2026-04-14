"use client";

import { useState } from "react";

const timelineData = [
  {
    year: "2016",
    title: "Kushal takes care of bobette.",
    subtitle: "Kushal's first pet ant",
    text: "In high-school, we took care of bobette for a couple months in a small container.",
    image:
      "https://theantzone.com/cdn/shop/files/IMG_7687_1.png?v=1690927836",
  },
  {
    year: "2017",
    title: "Beginnings of the brand.",
    subtitle: "The start of a journey.",
    text: "It all began with Kushal's deep intrigue for ants and their cooperative societies.",
    image:
      "https://theantzone.com/cdn/shop/files/IMG_8229_2.heic?v=1690339629",
  },
  {
    year: "2018",
    title: "Our First Convention.",
    subtitle: "Reptile Conventions",
    text: "We started selling ants at reptile conventions and promoting responsible antkeeping.",
    image:
      "https://theantzone.com/cdn/shop/files/camponotus_discolor_for_sale.jpg?v=1690850721",
  },
  {
    year: "2020",
    title: "COVID hit harder than a truck.",
    subtitle: "The Pandemic",
    text: "We shifted from conventions to building our online shop plantedants.com.",
    image:
      "https://theantzone.com/cdn/shop/files/IMG_7989.jpg?v=1690927832",
  },
  {
    year: "2023",
    title: "From Humble Beginnings to Today",
    subtitle: "Where we are now",
    text: "Planted ANTS has grown into a respected antkeeping company.",
    image:
      "https://theantzone.com/cdn/shop/files/IMG_7989.jpg?v=1690927832",
  },
];

export default function TimelineSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % timelineData.length);
  const prev = () =>
    setIndex((p) => (p - 1 + timelineData.length) % timelineData.length);

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={timelineData[index].image}
              alt={timelineData[index].title}
              className="w-full rounded-lg transition-all duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-4 transition-all duration-500">
            <p className="text-sm font-bold text-gray-500">
              {timelineData[index].year}
            </p>

            <h2 className="text-3xl font-bold">
              {timelineData[index].subtitle}
            </h2>

            <h3 className="text-xl text-gray-700">
              {timelineData[index].title}
            </h3>

            <p className="text-gray-600 leading-relaxed">
              {timelineData[index].text}
            </p>

            {/* NAV BUTTONS */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={prev}
                className="px-4 py-2 border rounded hover:bg-black hover:text-white"
              >
                Prev
              </button>

              <button
                onClick={next}
                className="px-4 py-2 border rounded hover:bg-black hover:text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        {/* TIMELINE NAV */}
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {timelineData.map((item, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`text-sm font-bold px-3 py-1 border-b-2 transition ${
                i === index
                  ? "border-black text-black"
                  : "border-transparent text-gray-400"
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}