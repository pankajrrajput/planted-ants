"use client";

import { useState } from "react";

export default function PressCarousel() {
  const testimonials = [
    {
      quote:
        "Great store to get ants! Mine arrived in 4 days after purchase and has layed some eggs!",
      author: "Dillion K",
    },
    {
      quote:
        "Just purchased my first ant queen, she came with workers and is doing great settling into her home!",
      author: "Kris D",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="section section-full">
      <div className="press">

        {/* Slider Window */}
        <div className="overflow-hidden relative w-full">

          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="w-full flex-shrink-0 text-center px-6"
              >
                <blockquote className="h3">
                  {item.quote}
                </blockquote>

                <p className="text-subdued mt-4">
                  {item.author}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="press__controls flex items-center justify-center gap-4 mt-6">

          <button onClick={prev} className="circle-button">
            ‹
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2 h-2 rounded-full ${
                  i === index ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button onClick={next} className="circle-button">
            ›
          </button>

        </div>

      </div>
    </section>
  );
}