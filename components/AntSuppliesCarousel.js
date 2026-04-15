import { buildShopifyUrl } from "../lib/shopifyUrl";

export default function AntSuppliesCarousel() {
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
            title="Appleburst Ant Nectar"
            price="$25.99"
            image="/images/slider-1.webp"
            image2="/images/slide-1-1.webp"
            link={buildShopifyUrl("products/bloodburst-ant-nectar")}
          />

          <ProductCard
            title="Fluon"
            price="$29.95"
            image="/images/slider-2.webp"
            link={buildShopifyUrl("products/floun")}
          />

        </div>
      </div>
    </section>
  );
}

/* ✅ IMPORTANT: define it BELOW (or ABOVE) the component */

function ProductCard({ title, price, image, image2, link }) {
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
        <div>{price}</div>
      </div>

      <button>+ Quick add</button>
    </div>
  );
}

