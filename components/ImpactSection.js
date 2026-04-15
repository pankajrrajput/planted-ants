"use client";

import { useEffect, useRef, useState } from "react";

export default function ImpactSection() {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const trigger = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      animateCount();
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            trigger();
          }
        },
        { threshold: 0 }
      );

      if (ref.current) observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }

    trigger();
  }, []);

  const animateCount = () => {
    const start = 0;
    const end = 100;
    const duration = 2000;

    const now = () => (typeof performance !== "undefined" ? performance.now() : Date.now());
    const startTime = now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * (end - start) + start);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };

    requestAnimationFrame(update);
  };

  return (
    <div ref={ref} className="section section-blends section-full">
      <div>
        <div className="impact-text impact-text--center">
          <div className="snap-center">

            <h2 className="impact-text__text heading break-all">
              <div className="impact-text-inner text-gradient" style={{ color: "black" }}>
                <span>{count}</span>%
              </div>
            </h2>

            <div className="impact-text__content">
              <div className="prose">
                <h3 className="h4">Guaranteed Live Arrival</h3>
                <p>
                  <strong>Our guarantees are unmatched.</strong> We aim to satisfy
                  every antkeeper who receives queen ants from us. Please reach
                  out if there is an issue, and we will resolve it quickly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}