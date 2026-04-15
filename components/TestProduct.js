"use client";

import { useCart } from "../contexts/CartContext";

export default function TestProduct() {
  const { addToCart } = useCart();
  const sampleProducts = [
    {
      id: 1,
      name: "Beginner Ant Colony",
      price: 29.99,
      image: "/images/ants_for_sale.webp"
    },
    {
      id: 2,
      name: "Ant Nest Kit",
      price: 49.99,
      image: "/images/supplies.webp"
    },
    {
      id: 3,
      name: "Ant Food Bundle",
      price: 19.99,
      image: "/images/placeholder-product.jpg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Test Products (Click to Add to Cart)</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
