"use client";

import { useState } from "react";

export default function ProductSecondSec() {
  const productImages = [
    { thumb: "/images/mini-ruby-1.jpeg", large: "/images/mini-ruby-large-1.jpeg" },
    { thumb: "/images/mini-ruby-2.png", large: "/images/mini-ruby-large-2.png" },
    { thumb: "/images/mini-ruby-3.png", large: "/images/mini-ruby-large-3.png" },
    { thumb: "/images/mini-ruby-4.png", large: "/images/mini-ruby-large-4.png" },
  ];

  const variants = [
    { label: "Queen + Eggs", price: 51.99, disabled: false },
    { label: "Queen + 1-5 Workers", price: 68.99, disabled: false },
    { label: "Queen + 5-10 Workers", price: 108.99, disabled: true },
  ];

  const [activeImage, setActiveImage] = useState(productImages[0].large);

  // Default first variant on refresh
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  return (
    <div className="section section--tight section-blends section-full">
      <div className="product">

        {/* LEFT SIDE */}
        <div className="product-left-side">

          {/* MAIN IMAGE */}
          <div className="product-gallery__main">
            <img
              src={activeImage}
              alt="Product"
              className="rounded"
            />
          </div>

          {/* THUMBNAILS */}
          <div className="product-maina">
            {productImages.map((img, i) => (
              <div
                key={i}
                className={`product-gallery__thumbnail ${
                  activeImage === img.large ? "is-selected" : ""
                }`}
                onClick={() => setActiveImage(img.large)}
                style={{ cursor: "pointer" }}
              >
                <img src={img.thumb} alt={`mini-ruby-${i}`} className="rounded" />
              </div>
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="product-info">
          <h1 className="product-info__title h2">
            Mini Ruby Ants (C. discolor)
          </h1>

           {/* Dynamic Price */}
          <div className="product-info__price">
            <span className="text-lg">
              ${selectedVariant.price.toFixed(2)}
            </span>
          </div>

          {/* OFFER */}
          <div className="offer bg-custom text-custom">
            <div className="text-with-icon">
                <span style={{ width: 20, height: 20 }}><svg role="presentation" fill="none" focusable="false" stroke-width="2" width="24" height="24" class="icon icon-picto-percent" viewBox="0 0 24 24">
                    <path d="M12 22.714c6.857 0 10.714-3.857 10.714-10.714S18.857 1.286 12 1.286 1.286 5.143 1.286 12 5.143 22.714 12 22.714Z" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="m7.714 16.286 8.571-8.572" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M8.571 9.429a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715v0ZM15.428 16.286a.857.857 0 1 0 0-1.715.857.857 0 0 0 0 1.715Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg></span>
              <span className="bold text-sm">
                Discount
              </span>
            </div>

            <div className="prose text-sm">
              <p>Use code ANTS10 to receive 10% discount on your order</p>
            </div>
          </div>

           {/* VARIANTS */}
            <div className="product-info__variant-picker">
            <fieldset className="variant-picker__option">
                <legend className="text-subdued">
                Size: {selectedVariant.label}
                </legend>

                <div className="variant-picker__option-values wrap gap-2">
                <select
                    className="block-swatch"
                    value={selectedVariant.label}
                    onChange={(e) => {
                    const selected = variants.find(
                        (variant) => variant.label === e.target.value
                    );
                    if (selected) {
                        setSelectedVariant(selected);
                    }
                    }}
                    style={{
                    padding: "10px 14px",
                    width: "100%",
                    cursor: "pointer",
                    }}
                >
                    {variants.map((variant, index) => (
                    <option
                        key={index}
                        value={variant.label}
                        disabled={variant.disabled}
                    >
                        {variant.label}
                    </option>
                    ))}
                </select>
                </div>
            </fieldset>
            </div>

          {/* BUTTON */}
          <div className="product-info__buy-buttons">
            <button
              type="button"
              className="button button--xl"
              style={{
                background: "rgb(240,196,23)",
                color: "#111",
              }}
            >
              Add to cart
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}