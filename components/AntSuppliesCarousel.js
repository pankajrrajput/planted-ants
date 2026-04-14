export default function AntSuppliesCarousel() {
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
            image="/images/slider-1.png"
            link="/products/bloodburst-ant-nectar"
          />

          <ProductCard
            title="Fluon"
            price="$29.95"
            image="/images/slider-2.png"
            link="/products/floun"
          />

        </div>
      </div>
    </section>
  );
}

/* ✅ IMPORTANT: define it BELOW (or ABOVE) the component */

function ProductCard({ title, price, image, link }) {
  return (
    <div className="product-card">
      <a href={link}>
        <img src={image} alt={title} />
      </a>

      <div className="product-card__info">
        <div>{title}</div>
        <div>{price}</div>
      </div>

      <button>+ Quick add</button>
    </div>
  );
}