"use client";

import { useEffect, useState } from "react";

export default function ImpactStatsSection() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100;
    const duration = 2000; // 2 seconds
    const interval = 20;
    const step = end / (duration / interval);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setPercentage(end);
        clearInterval(timer);
      } else {
        setPercentage(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="section section-full bg-custom"
      style={{ "--background": "255 255 255" }}
    >
      <div>
        <div className="impact-text impact-text--center">

          {/* First Section */}
          <div className="snap-center">
            <h2 className="impact-text__text heading break-all">
              <span
                style={{
                  display: "inline-block",
                }}
              >
                10
              </span>
            </h2>

            <div className="impact-text__content">
              <div className="prose">
                <h3 className="h4">millimeters long.</h3>
              </div>
            </div>
          </div>

          {/* Second Section with Counter */}
          <div className="snap-center">
            <h2 className="impact-text__text heading break-all">
              <span
                style={{
                  textAlign: "end",
                  display: "inline-block",
                }}
              >
                {percentage}
              </span>
              %
            </h2>

            <div className="impact-text__content">
              <div className="prose">
                <h3 className="h4">Beginner-friendly</h3>
              </div>
            </div>
          </div>

          {/* Third Section */}
          <div className="snap-center">
            <h2 className="impact-text__text heading break-all">
              <span
                style={{
                  display: "inline-block",
                }}
              >
                5
              </span>
            </h2>

            <div className="impact-text__content">
              <div className="prose">
                <h3 className="h4">Year lifespan</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}