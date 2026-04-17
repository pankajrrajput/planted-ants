"use client";

import { useState } from "react";

export default function AntSpotlightSection() {
  const [activePopup, setActivePopup] = useState(null);

  const togglePopup = (id) => {
    setActivePopup(activePopup === id ? null : id);
  };

  const hotspots = [
    {
      id: 1,
      top: "66%",
      left: "11%",
      title: "Digging Masters",
      text: "Mini Ruby ants typically create subterranean nests, constructing intricate tunnel systems beneath the soil's surface to house their colonies.",
    },
    {
      id: 2,
      top: "46%",
      left: "85%",
      title: "Named after their upper body.",
      text: "Mini Ruby ants derive their name from their striking ruby-colored head.",
    },
    {
      id: 3,
      top: "32%",
      left: "41%",
      title: "Defense is better than offense.",
      text: "Golden-tailed ants exhibit polymorphism, meaning they have different-sized castes within the same colony.",
    },
  ];

  return (
    <div className="section section-blends section-full">
      <div className="section-stack">
        <div
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          <img
            src="/images/spotlight-sec.png"
            alt="Spotlight"
            style={{
              width: "100%",
              display: "block",
              borderRadius: "10px",
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
                zIndex: 20,
              }}
            >
              {/* PLUS BUTTON */}
              <button
                onClick={() => togglePopup(spot.id)}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  border: "none",
                  background: "rgb(240 196 23)",
                  cursor: "pointer",
                  fontSize: "22px",
                  fontWeight: "bold",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                  textAlign: "center",
                  color:"#fff"
                }}
              >
                +
              </button>

              {/* POPUP */}
              {activePopup === spot.id && (
                <div
                  style={{
                    position: "absolute",
                    top: "50px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "280px",
                    background: "#fff",
                    padding: "16px",
                    borderRadius: "10px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    zIndex: 50,
                  }}
                >
                  <p
                    style={{
                      fontWeight: "bold",
                      marginBottom: "8px",
                    }}
                  >
                    {spot.title}
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    {spot.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}