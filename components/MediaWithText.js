"use client";

import { buildShopifyUrl } from "../lib/shopifyUrl";

export default function MediaWithText() {
  return (
    <div className="section">
      <div className="container">

        {/* IMAGE */}
        <div className="media">
          <img
            src="//theantzone.com/cdn/shop/files/IMG_8229_2.heic?v=1690339629&width=1200"
            alt="Ants"
          />
        </div>

        {/* CONTENT */}
        <div className="content">
          <img
            className="icon"
            src="//theantzone.com/cdn/shop/files/ant_2.png?v=1690926600&width=192"
            alt="icon"
          />

          <h2>Our First Convention</h2>

          <p>
            As time passed, on January 8th, 2017, was a bone-chilling winter
            Wednesday, he began selling queen ants at a reptile convention. An
            insect that was all but unheard-of in California at the time.
          </p>

          <a href={buildShopifyUrl("/collections/ants-for-sale")} className="btn">
            View our Ant-Keeping Bundles
          </a>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .media img {
          width: 100%;
          max-width: 600px;
          border-radius: 12px;
        }

        .content {
          background: black;
          color: white;
          padding: 30px;
          border-radius: 12px;
          max-width: 500px;
          text-align: center;
        }

        .icon {
          width: 60px;
          margin-bottom: 15px;
        }

        .btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 20px;
          background: gold;
          color: black;
          text-decoration: none;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}