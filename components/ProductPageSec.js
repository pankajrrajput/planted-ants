"use client";

import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { buildShopifyUrl } from "../lib/shopifyUrl";

export default function ProductPage() {
  const { addToCart } = useCart();

  const productImages = [
    { thumb: "/images/thumb-1.webp", large: "/images/large-1.webp" },
    { thumb: "/images/thumb-2.png", large: "/images/large-2.png" },
    { thumb: "/images/thumb-3.png", large: "/images/large-3.png" },
    { thumb: "/images/thumb-4.png", large: "/images/large-4.png" },
  ];

  const variants = [
    {
      label: "Queen + Eggs",
      price: 51.99,
      variantId: "45970358665497",
      disabled: false,
    },
    {
      label: "Queen + 1-5 Workers",
      price: 68.99,
      variantId: "45970358698265",
      disabled: false,
    },
    {
      label: "Queen + 5-10 Workers",
      price: 108.99,
      variantId: "45970358731033",
      disabled: true,
    },
  ];

  const [activeImage, setActiveImage] = useState(productImages[0].large);

  // Default first variant on refresh
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  const handleAddToCart = () => {
    addToCart({
      id: selectedVariant.variantId,
      name: `Mini Ruby Ants (${selectedVariant.label})`,
      price: selectedVariant.price,
      image: activeImage
    });
  };

  return (
    <div className="section section--tight section-blends section-full main-porduct-section">
      <div className="product">

        {/* LEFT SIDE */}
        <div className="product-left-side">

          {/* MAIN IMAGE */}
          <div class="product-wrap">
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
                <img src={img.thumb} alt={`thumb-${i}`} className="rounded" />
              </div>
            ))}
          </div>
          </div>


           {/* DESCRIPTION */}
          <div style={{ marginTop: "20px" }}>
            <div className="product-info__description">
              <div className="prose">
                <p>
                  Mini Ruby Ants are a beautiful smaller species in the Camponotus genus. They are very beginner friendly and very fast growing. All you need is to start off with a queen ant! Then your queen ant will lay eggs, leading to your first ever colony. These ants live up to 4-5 years and are great beginner species!
                </p>
                <p>
                  Your queen will be fertilized beforehand. Beautiful red and black coloration really make these ants stand out!
                </p>
              </div>
            </div>
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

           {/* VARIANTS */}
          <div className="product-info__variant-picker">
            <fieldset className="variant-picker__option">
              
              {/* Dynamic Size Text */}
              <legend className="text-subdued">
                Size: {selectedVariant.label}
              </legend>

              <div className="variant-picker__option-values wrap gap-2">
                {variants.map((variant, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`block-swatch ${
                      selectedVariant.variantId === variant.variantId
                        ? "is-selected"
                        : ""
                    } ${variant.disabled ? "is-disabled" : ""}`}
                    onClick={() => {
                      if (!variant.disabled) {
                        setSelectedVariant(variant);
                      }
                    }}
                    style={{
                      cursor: variant.disabled ? "not-allowed" : "pointer",
                    }}
                    disabled={variant.disabled}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>

          {/* BUTTON */}
          <div className="product-info__buy-buttons">
            <button
              type="button"
              onClick={handleAddToCart}
              className="button button--xl"
              style={{
                background: "rgb(240,196,23)",
                color: "#111",
              }}
            >
              Add to cart
            </button>
          </div>

          {/* OFFER */}
          <div className="offer bg-custom text-custom">
            <div className="text-with-icon">
              <span style={{ width: 20, height: 20 }}><svg role="presentation" fill="none" focusable="false" strokeWidth="2" width="24" height="24" className="icon icon-picto-coupon" viewBox="0 0 24 24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.89 21.975c-1.325.974-3.176.9-4.391-.209a131.923 131.923 0 0 1-9.792-9.94 3.17 3.17 0 0 1-.753-1.5C1.56 8.293.727 3.222 1.976 1.972c1.25-1.25 6.32-.416 8.352-.022.56.111 1.078.371 1.502.752a131.922 131.922 0 0 1 9.94 9.792c1.109 1.214 1.18 3.067.209 4.392-.701.955-1.442 1.914-2.31 2.78-.865.865-1.823 1.607-2.778 2.308ZM9.458 6.523a2.073 2.073 0 1 1-2.93 2.931 2.073 2.073 0 0 1 2.93-2.931Z" fill="currentColor" fill-opacity=".12" stroke="currentColor"></path>
      </svg></span>
              <span className="bold text-sm">
                Free Shipping above $99
              </span>
            </div>

            <div className="prose text-sm">
              <p>Enjoy Free Shipping on orders over $99.</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}