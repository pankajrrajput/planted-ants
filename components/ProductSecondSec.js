"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../contexts/CartContext";
import { buildShopifyUrl } from "../lib/shopifyUrl";

export default function ProductSecondSec() {
  const router = useRouter();
  const { addToCart } = useCart();

  const productImages = [
    { thumb: "/images/mini-ruby-1.jpeg", large: "/images/mini-ruby-large-1.jpeg" },
    { thumb: "/images/mini-ruby-2.png", large: "/images/mini-ruby-large-2.png" },
    { thumb: "/images/mini-ruby-3.png", large: "/images/mini-ruby-large-3.png" },
    { thumb: "/images/mini-ruby-4.png", large: "/images/mini-ruby-large-4.png" },
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
                <img
                  src={img.thumb}
                  alt={`mini-ruby-${i}`}
                  className="rounded"
                />
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
              <span className="bold text-sm">
                Discount
              </span>
            </div>

            <div className="prose text-sm">
              <p>Use code ANTS10 to receive 10% discount on your order</p>
            </div>
          </div>

          {/* VARIANT DROPDOWN */}
          <div className="product-info__variant-picker">
            <fieldset className="variant-picker__option">
              <legend className="text-subdued">
                Size: {selectedVariant.label}
              </legend>

              <div className="variant-picker__option-values wrap gap-2">
                <select
                  value={selectedVariant.variantId}
                  onChange={(e) => {
                    const selected = variants.find(
                      (variant) =>
                        variant.variantId === e.target.value
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
                      value={variant.variantId}
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

        </div>
      </div>
    </div>
  );
}