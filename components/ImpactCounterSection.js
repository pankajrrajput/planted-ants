"use client";

import { useEffect, useRef, useState } from "react";
import { buildShopifyUrl } from "../lib/shopifyUrl";

export default function ImpactCounterSection() {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      {
        threshold: 0.4, // start when 40% visible
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const animateCount = () => {
    const start = 0;
    const end = 100;
    const duration = 2000; // ⬅ slower animation (2s = smooth premium feel)

    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOut effect (slows near the end)
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
    <div
      ref={ref}
      className="section section-boxed bg-custom"
      style={{ background: "rgb(240 240 240)" }}
    >
      <div className="impact-text impact-text--center">

        <h2 className="impact-text__text heading">
          {count}
          <span>%</span>
        </h2>

        <div className="impact-text__content">
          <div className="prose">
            <h3 className="h4">
              Satisfaction Guaranteed. The Highest Quality.
            </h3>

            <p>
              Here at Planted ANTS, your satisfaction is our #1 policy.
            </p>

            <a
              className="button button--xl"
              href={buildShopifyUrl("/pages/100-live-ant-guarantee")}
            >
              Learn about our guarantees
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}