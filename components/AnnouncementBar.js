"use client";

export default function AnnouncementBar() {
  return (
    <div className="bar announcement-bar">
      <div className="track">
        <div className="group">
          <span>10% off on all products</span>
          <span className="dot">•</span>
        </div>

        <div className="group">
          <span>10% off on all products</span>
          <span className="dot">•</span>
        </div>

        <div className="group">
          <span>10% off on all products</span>
          <span className="dot">•</span>
        </div>

        <div className="group">
          <span>10% off on all products</span>
          <span className="dot">•</span>
        </div>

        <div className="group">
          <span>10% off on all products</span>
          <span className="dot">•</span>
        </div>

        <div className="group">
          <span>10% off on all products</span>
          <span className="dot">•</span>
        </div>

        <div className="group">
          <span>10% off on all products</span>
          <span className="dot">•</span>
        </div>
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
          animation: scroll 12s linear infinite;
        }

        .group {
          display: flex;
          align-items: center;
          gap: 30px;
          padding-right: 40px; /* space between repeats */
        }

        span {
          font-size: 12px;
          font-weight: 600;
        }

        .dot {
          opacity: 0.6;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}