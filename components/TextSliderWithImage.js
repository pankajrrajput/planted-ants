"use client";

import { useState } from "react";

export default function TextSliderWithImage() {
  const slides = [
    {
      title: "Meet Kushal",
      text: "Kushal's first experience with ants was his 7th grade science fair. He has collected different species ever since and turned his passion into a career.",
      image: "/images/meet-kashul.webp",
    },
    {
      title: "Meet Pan",
      text: "Pan is the head graphic designer. She has loved insects since childhood and now helps with creative projects for Planted ANTS.",
      image: "/images/meet-pan.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="section">
      <div className="container">

        {/* SLIDER */}
        <div className="slider">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === current ? "active" : ""}`}
            >
              {/* IMAGE */}
              <div className="imageContainer">
                <img src={slide.image} alt={slide.title} />
              </div>

              {/* TEXT */}
              <div className="contentContainer">
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="controls">
          <button onClick={prevSlide}>←</button>
          <button onClick={nextSlide}>→</button>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .container {
          max-width: 900px;
          margin: auto;
        }

        .slider {
          position: relative;
          height: 320px;
          overflow: hidden;
        }

        .slide {
          position: absolute;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 40px;
          opacity: 0;
          transform: translateX(60px);
          transition: all 0.5s ease;
        }

        .slide.active {
          opacity: 1;
          transform: translateX(0);
        }

        .imageContainer img {
          width: 300px;
          border-radius: 10px;
        }

        .contentContainer {
          max-width: 400px;
        }

        .controls {
          margin-top: 20px;
          text-align: center;
        }

        .controls button {
          padding: 10px 15px;
          margin: 0 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}