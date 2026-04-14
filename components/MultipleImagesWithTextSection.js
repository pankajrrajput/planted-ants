"use client";

import { useState } from "react";

export default function MultipleImagesWithTextSlider() {
  const slides = [
    {
      image:
        "/images/ruby-sold.jpg",
      title: "Ruby Soldiers...",
      subtitle: "Ant-Keeping Highlights:",
      description:
        "After your mini ruby ant colony grows, you will see them produce soldier ants with a huge ruby body and a jet-black tail.",
    },
    {
      image:
        "/images/fertilizer.png",
      title: "Fertilized. Ready to go.",
      description:
        "All queens are fertilized and come with eggs free of charge.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="section section--narrow section-blends section-full">
      <div className="multiple-images-with-text">

        <div className="multiple-images-with-text__image-list">
          <img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="rounded-sm shadow-sm"
            style={{
              width: "100%",
              maxWidth: "500px",
              transition: "all 0.4s ease",
            }}
          />
        </div>

        <div className="multiple-images-with-text__content-with-nav">
          <div className="multiple-images-with-text__content-list">
            <div
              key={currentSlide}
              className="prose is-selected"
            >
              {slides[currentSlide].subtitle && (
                <p className="bold">
                  {slides[currentSlide].subtitle}
                </p>
              )}

              <p className="h1">
                {slides[currentSlide].title}
              </p>

              <p>{slides[currentSlide].description}</p>
            </div>
          </div>

          <div className="prev-next-buttons">
            <button
              type="button"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === 0
                    ? slides.length - 1
                    : prev - 1
                )
              }
            >
              Previous
            </button>

            <button
              type="button"
              onClick={() =>
                setCurrentSlide((prev) =>
                  prev === slides.length - 1
                    ? 0
                    : prev + 1
                )
              }
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}