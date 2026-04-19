"use client";

import { useState } from "react";

export default function TextSliderWithImage() {
  const slides = [
    {
      title: "Meet Kushal",
      text: "Kushal's first experience with ants was his 7th grade science fair, in which he fed carpenter ants some mealworms. He was hooked after that, and has collected different species of ants ever since. He attended UC Berkeley, spent some time working on startups, and eventually ended up at a desk job. After deciding that desk jobs weren’t for him, he started plantedANTS as a way of turning his passion into a career. In his spare time Kushal enjoys vegetable gardening and reads too many Chinese novels.",
      image: "/images/meet-kashul.webp",
    },
    {
      title: "Meet Pan",
      text: "Pan is the head graphic designer for Planted ANTS. She loves watching insects since she was just a little kid. She loved drawing them growing up and decided to keep them later on. Now, she helps Kushal with many graphic design projects for Planted ANTS.",
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
    <div className="section text-with-image-section">
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
          <button  onClick={prevSlide}></button>
          <button onClick={nextSlide} ></button>
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