export default function FeaturedCollection() {
  return (
    <div className="section section-blends section-full">
      <div className="section-stack">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-6">
          <div className="prose">
            <h2 className="h2">Ants For Sale</h2>
            <p>Check out all the queen ants we have available!</p>
          </div>

          <a href="/collections/ants-for-sale" className="flex items-center gap-2 group">
            <span className="group-hover:underline">View all</span>
            <span>›</span>
          </a>
        </div>

        {/* SCROLL CONTAINER */}
        <div className="flex gap-6 overflow-x-auto scroll-smooth pb-4">

          {/* PRODUCT 1 */}
          <div className="min-w-[260px] bg-white">
            <a href="/products/mini-ruby-ants-c-discolor">
              <img
                src="//theantzone.com/cdn/shop/files/FullSizeRender2.heic?v=1690393638"
                alt="Mini Ruby Ants"
                className="w-full aspect-square object-cover"
              />
              <img
                src="//theantzone.com/cdn/shop/files/FullSizeRender3.png?v=1690340337"
                alt=""
                className="w-full aspect-square object-cover mt-2"
              />
            </a>

            <div className="mt-3">
              <p className="font-bold">Mini Ruby Ants (C. discolor)</p>
              <p className="text-gray-600">From $51.99</p>
            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="min-w-[260px] bg-white">
            <a href="/products/goldentail-ants-for-sale">
              <img
                src="//theantzone.com/cdn/shop/files/IMG_0962.jpg?v=1690414311"
                alt="Golden Tail Ants"
                className="w-full aspect-square object-cover"
              />
              <img
                src="//theantzone.com/cdn/shop/files/IMG_0952.jpg?v=1690414348"
                alt=""
                className="w-full aspect-square object-cover mt-2"
              />
            </a>

            <div className="mt-3">
              <p className="font-bold">Golden Tail Ants</p>
              <p className="text-gray-600">From $92.99</p>
            </div>
          </div>

          {/* PRODUCT 3 */}
          <div className="min-w-[260px] bg-white">
            <a href="/products/sunrise-amber-ants-c-castaneus">
              <img
                src="//theantzone.com/cdn/shop/files/IMG_0969.jpg?v=1690393583"
                alt="Sunrise Amber Ants"
                className="w-full aspect-square object-cover"
              />
              <img
                src="//theantzone.com/cdn/shop/files/IMG_0966.jpg?v=1690393562"
                alt=""
                className="w-full aspect-square object-cover mt-2"
              />
            </a>

            <div className="mt-3">
              <p className="font-bold">Sunrise Amber Ants</p>
              <p className="text-gray-600">From $82.99</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}