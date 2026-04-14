"use client";

import { useState } from "react";

export default function HotspotImage() {
  const [active, setActive] = useState(null);

  const hotspots = [
    {
      id: 0,
      title: "Ant Farm Bundles",
      desc: "Shop the best ant farms on the market & everything else you need to get started",
      position: { top: "35%", left: "25%" },
    },
    {
      id: 1,
      title: "California Reptile Conventions!",
      desc: "Meet us vending in person!",
      position: { top: "50%", left: "70%" },
    },
    {
      id: 2,
      title: "Care Guides",
      desc: "We offer care guides for beginners!",
      position: { top: "65%", left: "75%" },
    },
  ];

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="section section-full">
      <div className="relative w-full">

        {/* Image */}
        <img
          src="/images/hubspot-img.webp"
          alt="Ant world"
          className="w-full h-auto"
        />

        {/* Hotspots */}
        {hotspots.map((spot) => (
          <div
            key={spot.id}
            className="absolute"
            style={{
              top: spot.position.top,
              left: spot.position.left,
            }}
          >
            {/* Dot */}
            <button
              onClick={() => toggle(spot.id)}
              className="w-4 h-4 rounded-full bg-white border shadow"
            />

            {/* Popover */}
            {active === spot.id && (
              <div className="absolute z-10 mt-2 w-48 bg-white p-3 shadow-lg rounded">
                <div className="font-bold text-sm">{spot.title}</div>
                <p className="text-xs text-gray-600 mt-1">
                  {spot.desc}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}