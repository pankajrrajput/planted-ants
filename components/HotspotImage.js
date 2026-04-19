"use client";

import { useState } from "react";

export default function HotspotImageSection() {
const [activePopup, setActivePopup] = useState(null);

const hotspots = [
{
id: 1,
top: "71%",
left: "27%",
title: "Ant Farm Bundles",
text: "Shop the best ant farms on the market & everything else you need to get started",
},
{
id: 2,
top: "27%",
left: "64%",
title: "California Reptile Conventions!",
text: "Meet us vending in person!",
},
{
id: 3,
top: "63%",
left: "75%",
title: "Care Guides",
text: "We offer care guides for beginners!",
},
];

const togglePopup = (id) => {
setActivePopup(activePopup === id ? null : id);
};

return (
<section className="section section-blends section-full animation-section">
<div
style={{
  position: "relative",
  width: "100%",

  margin: "0 auto",
}}
>
<img
  src="/images/hubspot-img.webp"
  alt="Ant Hotspot"
  style={{
    width: "100%",
    display: "block",
    borderRadius: "0",
  }}
/>

{hotspots.map((spot) => (
  <div
    key={spot.id}
    style={{
      position: "absolute",
      top: spot.top,
      left: spot.left,
      transform: "translate(-50%, -50%)",
    }}
  >
    {/* PLUS BUTTON */}
    <button
      onClick={() => togglePopup(spot.id)}
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "none",
        background: "#fff",
        cursor: "pointer",
        fontSize: "24px",
        fontWeight: "bold",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    

    
      }}
    >
<svg role="presentation" focusable="false" strokeWidth="2" width="8" height="8" className="icon icon-plus" viewBox="0 0 12 12">
      <path d="M6 0V12" fill="none" stroke="currentColor"></path>
      <path d="M0 6L12 6" fill="none" stroke="currentColor"></path>
    </svg>
    </button>

    {/* POPUP */}
    {activePopup === spot.id && (
      <div
        style={{
          position: "absolute",
          top: "55px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "360px",
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
          zIndex: 20,
        }}
      >
        <h4 style={{ marginBottom: "8px", fontSize: "18px", fontWeight: "700" }}>
          {spot.title}
        </h4>
        <p style={{ fontSize: "16px", marginTop: "10px" }}>
          {spot.text}
        </p>
      </div>
    )}
  </div>
))}
</div>
</section>
);
}