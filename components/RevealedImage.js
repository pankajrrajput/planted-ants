"use client";

import { useEffect, useRef, useState } from "react";

export default function RevealedImage() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const p =
        1 - Math.min(1, Math.max(0, rect.top / windowHeight));

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}  // 👈 important fix for Turbopack edge case
      className="relative w-full h-[120vh] bg-orange-400 overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <img
          src="https://theantzone.com/cdn/shop/files/IMG_7989.jpg?v=1690927832"
          className="w-full max-w-4xl rounded-lg"
        />
      </div>

      <div
        className="absolute top-1/4 left-10 text-black"
        style={{ opacity: 1 - progress }}
      >
        <h1 className="text-4xl font-bold">
          We LOVE reconnecting humans with nature.
        </h1>
      </div>

      <div
        className="absolute bottom-1/4 left-10 text-white"
        style={{ opacity: progress }}
      >
        <h1 className="text-4xl font-bold">
          We LOVE reconnecting humans with nature.
        </h1>
      </div> 
    </section>
  );
}