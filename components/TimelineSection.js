"use client";

import { useState } from "react";

const timelineData = [
  {
    year: "2016",
    title: "2016: Our First Pet Ant",
    subtitle: "Kushal takes care of bobette.",
    text: "In high-school, we took care of bobette for a couple months in a small container.",
    image:
      "/images/1st-slider.webp",
  },
  {
    year: "2017",
    title: "2017: The start of a journey.",
    subtitle: "Beginnings of the brand.",
    text: "It all began with Kushal's deep intrigue for these cute insects. Entranced by their cooperative societies and behaviors, he yearned to unlock the secrets of these tiny architects. </br> Armed with an unwavering commitment to excellence, Kushal set out on a mission to provide the finest ant colonies and ant farms and founded Planted ANTS.",
    image:
      "/images/1st-slider.webp",
  },
  {
    year: "2018",
    title: "2018: Reptile Conventions",
    subtitle: "Our First Convention.",
    text: "With a leap of faith and a passion for both reptiles and the mesmerizing world of ants, we eagerly embarked on a novel adventure – selling ants at reptile conventions! </br> The reptile conventions not only provided a platform to show our ants but also became an avenue to promote responsible antkeeping and conservation. Through discussions and educational materials, we sought to foster a deeper appreciation for these tiny yet essential creatures and their vital role in our ecosystem.",
    image:
      "/images/2nd-slide.webp",
  },
  {
    year: "2020",
    title: "2020: The Pandemic",
    subtitle: "COVID hit harder than a truck.",
    text: "The onset of the COVID-19 pandemic dealt a crushing blow to vending at conventions. The absence of in-person gatherings meant losing a vital platform for engagement with potential customers and fellow enthusiasts. </br> Amidst the disappointment and hardships, we had to adapt to survive. This is where our online shop plantedants.com was born.",
    image:
      "/images/3rd-slide.webp",
  },
  {
    year: "2023",
    title: "2023: Where we are now",
    subtitle: "From Humble Beginnings to Today: The Full Story",
    text: "As of 2023, Planted ANTS has journeyed far from its humble beginnings and evolved into a respected company in the world of antkeeping. </br> As we look ahead, we actively engage in promoting ethical practices and educating our customers about the vital role ants play in our ecosystem.",
    image:
      "/images/4th-slide.webp",
  },
];

export default function TimelineSection() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % timelineData.length);
  const prev = () =>
    setIndex((p) => (p - 1 + timelineData.length) % timelineData.length);

  return (
    <section className="w-full bg-white py-20 image-with-event">
      <div className="max-w-6xl mx-auto px-4 inner-content">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-center flex-inner">

          {/* IMAGE */}
          <div className="relative">
            <img
              src={timelineData[index].image}
              alt={timelineData[index].title}
              className="w-full rounded-lg transition-all duration-500"
            />
          </div>

          {/* CONTENT */}
          <div className="space-y-4 transition-all duration-500 right-inner">
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

           
          </div>
          
        </div>
         {/* NAV BUTTONS */}
            <div className="flex gap-3 pt-4 carousel-arrow">
              <button
                onClick={prev}
                className="px-4 py-2 border rounded hover:bg-black hover:text-white icon"
              >
                ‹
              </button>

              <button
                onClick={next}
                className="px-4 py-2 border rounded hover:bg-black hover:text-white icon"
              >
                ›
              </button>
            </div>

        {/* TIMELINE NAV */}
        <div className="flex flex-wrap justify-center gap-4 mt-10 event-timeline">
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