import { buildShopifyUrl } from "../lib/shopifyUrl";

export default function StartAdventureSection() {
  const products = [
    {
      title: "Mini Ruby Ants (C. discolor)",
      href: "/products/mini-ruby-ants-c-discolor",
      price: "From $51.99",
      img1: "//theantzone.com/cdn/shop/files/FullSizeRender2.heic?v=1690393638",
      img2: "//theantzone.com/cdn/shop/files/FullSizeRender3.png?v=1690340337",
    },
    {
      title: "Golden Tail Ants (C. sansabeanus)",
      href: "/products/goldentail-ants-for-sale",
      price: "From $92.99",
      img1: "//theantzone.com/cdn/shop/files/IMG_0962.jpg?v=1690414311",
      img2: "//theantzone.com/cdn/shop/files/IMG_0952.jpg?v=1690414348",
    },
    {
      title: "Sunrise Amber Ants (C. castaneus)",
      href: "/products/sunrise-amber-ants-c-castaneus",
      price: "From $82.99",
      img1: "//theantzone.com/cdn/shop/files/IMG_0969.jpg?v=1690393583",
      img2: "//theantzone.com/cdn/shop/files/IMG_0966.jpg?v=1690393562",
    },
  ];

  return (
    <section className="w-full py-16 bg-white product-section">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-4 top-head-inner">
        <div class="content">
          <h2 className="text-3xl font-bold">
            Start your adventure with a queen ant.
          </h2>
          <p className="mt-2">
            Now that you know about us, begin your adventure with an ant queen
            of your choice!
          </p>
          <p>Click a species down below to get started.</p>
        </div>
<div class="arrow-icon">
        <a
          href={buildShopifyUrl("/collections/ants-for-sale")}
          className="text-blue-600 font-medium flex items-center gap-2"
        >
          View all <div class="svg-arrow"><svg role="presentation" focusable="false" width="5" height="8" class="icon icon-chevron-right-small reverse-icon" viewBox="0 0 5 8">
        <path d="m.75 7 3-3-3-3" fill="none" stroke="currentColor" stroke-width="1.5"></path>
      </svg></div>
        </a>
        </div>
      </div>

      {/* Carousel (simple scroll row instead of Shopify scroll-carousel) */}
      <div className="mt-10 overflow-x-auto px-6 product-inner">
        <div className="flex gap-6 w-max about-product">
          {products.map((p, idx) => (
            <a
              key={idx}
              href={buildShopifyUrl(p.href)}
              className="w-[280px] bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0"
            >
              {/* Images */}
              <div className="relative">
                <img
                  src={p.img1}
                  alt={p.title}
                  className="w-full h-64 object-cover"
                />
                <img
                  src={p.img2}
                  alt={p.title}
                  className="absolute top-0 left-0 w-full h-64 object-cover opacity-0 hover:opacity-100 transition"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-gray-600 mt-1">{p.price}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}