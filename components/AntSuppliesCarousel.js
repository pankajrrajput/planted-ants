"use client";

import { buildShopifyUrl } from "../lib/shopifyUrl";
import { useCart } from "../contexts/CartContext";

export default function AntSuppliesCarousel() {
  const { addToCart } = useCart();
  const buttonHref = buildShopifyUrl("/collections/ants-for-sale");
  return (
    <section className="section section-blends section-full">
      <div className="section-stack">

        <header className="section-header">
          <div className="prose">
            <h2 className="h2">Ant Supplies For Sale</h2>
            <p>Need some ant supplies?</p>
          </div>
        </header>

        <div className="carousel">

          <ProductCard
            id={45686276423961}
            title="Appleburst Ant Nectar"
            price={25.99}
            displayPrice="$25.99"
            image="/images/slider-1.webp"
            image2="/images/slide-1-1.webp"
            link={buildShopifyUrl("products/bloodburst-ant-nectar")}
            addToCart={addToCart}
          />

          <ProductCard
            id={45686276686105}
            title="Fluon"
            price={29.95}
            displayPrice="$29.95"
            image="/images/slider-2.webp"
            link={buildShopifyUrl("products/floun")}
            addToCart={addToCart}
          />

        </div>
      </div>
    </section>
  );
}

/* ✅ IMPORTANT: define it BELOW (or ABOVE) the component */

function ProductCard({ id, title, price, displayPrice, image, image2, link, addToCart }) {
  return (
    <div className="product-card">
      <a href={link} className="block group">
        <div className="relative overflow-hidden">
          
          {/* First Image */}
          <img
            src={image}
            alt={title}
            className={`w-full h-auto object-cover transition-all duration-500 ${
              image2 ? "group-hover:opacity-0 group-hover:scale-105" : ""
            }`}
          />

          {/* Second Image Only If Exists */}
          {image2 && (
            <img
              src={image2}
              alt={`${title} hover`}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
            />
          )}
        </div>
      </a>

      <div className="product-card__info">
        <div>{title}</div>
        <div>{displayPrice}</div>
      </div>

      <button
        onClick={() => addToCart({
          id: id,
          name: title,
          price: price,
          image: image
        })}
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors text-sm quick-add"
      >
        + Quick add
      </button>
    </div>
  );
}

