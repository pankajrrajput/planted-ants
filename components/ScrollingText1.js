"use client";

export default function ScrollingText1() {
  return (
    <div className="overflow-hidden py-6 bg-white scrolling-text1">
      
      <div className="whitespace-nowrap flex animate-marquee">
        
        {/* Repeat text multiple times for seamless loop */}
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="mx-8 text-3xl md:text-8xl font-bold bg-gradient-to-b from-yellow-300 to-red-500 bg-clip-text text-transparent"
          >
            Our History
          </span>
        ))}

      </div>

      {/* Animation */}
      <style jsx>{`
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 12s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}