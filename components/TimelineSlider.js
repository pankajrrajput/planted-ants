"use client";

import { useState } from "react";

export default function TimelineSlider() {
  const slides = [
    {
      label: "Arrival",
      image:
        "https://theantzone.com/cdn/shop/files/Screen_Shot_2023-08-02_at_1.40.54_PM.png?v=1691008859&width=778",
      title: "Timeline after ants arrive:",
      content:
        "At long last, your eagerly anticipated ant colony has arrived, this is the start of a new chapter in your ant-keeping journey.",
      extra: "View this timeline to see how the next couple years will be like!",
    },
    {
      label: "1 week",
      image:
        "https://theantzone.com/cdn/shop/files/photo_of_ants_stages.jpg?v=1690855318&width=1024",
      subtitle: "After 1 Week:",
      title: "Eggs transformation",
      content:
        "The eggs undergo a miraculous transformation, hatching into tiny larvae cared for by the queen and workers.",
    },
    {
      label: "1 month",
      image:
        "https://theantzone.com/cdn/shop/files/camponotus_discolor_for_sale.jpg?v=1690850721&width=2048",
      subtitle: "After 1 Month:",
      title: "First workers arrive.",
      content:
        "The first workers begin tending the queen, nurturing brood, and foraging for food.",
    },
    {
      label: "1 year",
      image:
        "https://theantzone.com/cdn/shop/files/Brood_piles.jpg?v=1690856280&width=1200",
      title: "A Year of Ant-Keeping",
      content:
        "Your colony has now grown into a thriving society full of life and activity.",
    },
    {
      label: "5 years",
      image:
        "https://theantzone.com/cdn/shop/files/idea_sized-170407-f-se307-0020.webp?v=1690856960&width=1000",
      title: "A Journey of Discovery",
      content:
        "Years of growth, learning, and connection with your colony.",
    },
    {
      label: "10 years",
      image:
        "https://theantzone.com/cdn/shop/files/ants_for_sale_in_california.png?v=1690858051&width=880",
      title: "A Legendary Journey",
      content:
        "An extraordinary long-term ant-keeping experience.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="section section-boxed bg-custom"
      style={{ "--background": "240 240 240" }}
    >
      <div className="timeline">
        <div
          className="timeline__slider"
          id="timeline-carousel"
        >
          <div className="timeline__slide">
            <div className="timeline__image-wrapper">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="timeline__image rounded"
              />
            </div>

            <div className="prose">
              {slides[currentSlide].subtitle && (
                <p className="bold text-base">
                  {slides[currentSlide].subtitle}
                </p>
              )}

              <p className="h2">
                {slides[currentSlide].title}
              </p>

              <p>{slides[currentSlide].content}</p>

              {slides[currentSlide].extra && (
                <p>
                  <strong>
                    {slides[currentSlide].extra}
                  </strong>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* CONTROLS */}
        <div className="timeline__controls scroll-area bleed md:unbleed">
          <div className="relative w-full">
            <span className="timeline__nav-bar"></span>

            <div className="timeline__nav">
              {slides.map((slide, index) => (
                <button
                  key={index}
                  className="timeline__nav-item"
                  type="button"
                  aria-current={currentSlide === index}
                  onClick={() => setCurrentSlide(index)}
                >
                  <span className="timeline__nav-label text-sm bold">
                    {slide.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* BUTTONS */}
          <div className="timeline__buttons">
            <button
              type="button"
              onClick={prevSlide}
              className="circle-button ring group"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="circle-button ring group"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}