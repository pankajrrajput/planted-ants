"use client";

export default function PressQuoteSection() {
  return (
    <div
      className="section section-boxed bg-custom quote-section"
      style={{
        
        "--text-color": "0 0 0",
      }}
    >
      <div className="section-stack text-center max-w-3xl mx-auto quote-inner">

        <blockquote className="blockquote">
          Our mission is to offer widespread sustainable access of ant-keeping
          and ant queens of the highest quality.
        </blockquote>

        <p className="mt-4 text-sm opacity-70">
          Kushal — Founder and CEO of Planted ANTS
        </p>

      </div>

      {/* GLOBAL CSS (put in globals.css ideally) */}
      <style jsx global>{`
        .blockquote {
          position: relative;
          padding-top: 40px;
          font-size: 28px;
          font-weight: 600;
          line-height: 1.3;
        }

        .blockquote:before {
          content: "";
          width: 40px;
          height: 40px;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(var(--text-color), 0.15);

          -webkit-mask-image: url("data:image/svg+xml,%3Csvg width='86' height='55' viewBox='0 0 86 55' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M71.3 54.6H42.5L60.3 0.4H85.5L71.3 54.6ZM29.3 54.6H0.7L18.9 0.4H44.1L29.3 54.6Z' fill='black'/%3E%3C/svg%3E");
          mask-image: url("data:image/svg+xml,%3Csvg width='86' height='55' viewBox='0 0 86 55' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M71.3 54.6H42.5L60.3 0.4H85.5L71.3 54.6ZM29.3 54.6H0.7L18.9 0.4H44.1L29.3 54.6Z' fill='black'/%3E%3C/svg%3E");

          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
        }
      `}</style>
    </div>
  );
}