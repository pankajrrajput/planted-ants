"use client";

export default function AnnouncementBar() {
  const items = Array(8).fill("10% off on all products");

  return (
    <div className="bar announcement-bar">
      <div className="track">

        {/* FIRST SET */}
        {items.map((text, i) => (
          <div className="group" key={`first-${i}`}>
            <span>{text}</span>
            <span className="dot">•</span>
          </div>
        ))}

        {/* DUPLICATE SET (IMPORTANT) */}
        {items.map((text, i) => (
          <div className="group" key={`second-${i}`}>
            <span>{text}</span>
            <span className="dot">•</span>
          </div>
        ))}

      </div>

      <style jsx>{`
        .bar {
          background: #111;
          color: #fff;
          overflow: hidden;
          white-space: nowrap;
        }

        .track {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }

        .group {
          display: flex;
          align-items: center;
          gap: 5rem;
          padding-right: 5rem;
        }

        span {
          font-size: .75rem;
          font-weight: 600;
          line-height: 1.7;
        }

        .dot {
          opacity: 0.6;
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}