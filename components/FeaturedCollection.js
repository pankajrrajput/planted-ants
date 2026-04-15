"use client";

import { buildShopifyUrl } from "../lib/shopifyUrl";
import { useCart } from "../contexts/CartContext";

export default function FeaturedCollection() {
  const { addToCart } = useCart();
  const products = [
    {
      id: 1,
      title: "Mini Ruby Ants (C. discolor)",
      price: 51.99,
      displayPrice: "From $51.99",
      link: "/products/mini-ruby-ants-c-discolor",
      image1: "/images/1.jpeg",
      image2: "/images/1.1.png",
    },
    {
      id: 2,
      title: "Golden Tail Ants",
      price: 92.99,
      displayPrice: "From $92.99",
      link: "/products/goldentail-ants-for-sale",
      image1: "/images/2.jpg",
      image2: "/images/2.2.jpg",
    },
    {
      id: 3,
      title: "Sunrise Amber Ants",
      price: 82.99,
      displayPrice: "From $82.99",
      link: "/products/sunrise-amber-ants-c-castaneus",
      image1: "/images/3.jpg",
      image2: "/images/3.3.jpg",
    },
  ];

  return (
    <div className="section section-blends section-full">
      <div className="section-stack">
        
        {/* HEADER */}
        <div className="flex items-end justify-between mb-6">
          <div className="prose">
            <h2 className="h2">Ants For Sale</h2>
            <p>Check out all the queen ants we have available!</p>
          </div>

          <a
            href={buildShopifyUrl("/collections/ants-for-sale")}
            className="flex items-center gap-2 group"
          >
            <span className="group-hover:underline">View all</span>
            <span>›</span>
          </a>
        </div>

        {/* PRODUCTS */}
        <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4">
          {products.map((product, index) => (
            <div key={index} className="min-w-[260px] bg-white">
            
                <a
                  href={buildShopifyUrl(product.link)}
                  className="block group"
                >
                  <div className="relative w-full h-[260px] overflow-hidden">
                    
                    {/* Main Image */}
                    <img
                      src={product.image1}
                      alt={product.title}
                      className="w-full h-full object-cover transition duration-500 group-hover:opacity-0"
                    />

                    {/* Hover Image */}
                    <img
                      src={product.image2}
                      alt={product.title}
                      className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                    />
                  </div>

                  <div className="mt-3">
                    <p className="font-bold">{product.title}</p>
                    <p className="text-gray-600">{product.displayPrice}</p>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        addToCart({
                          id: product.id,
                          name: product.title,
                          price: product.price,
                          image: product.image1
                        });
                      }}
                      className="mt-2 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors text-sm"
                    >
                      Add to Cart
                    </button>
                  </div>
                </a>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

