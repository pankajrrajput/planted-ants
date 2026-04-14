"use client";

export default function MediaWithText1() {
  return (
    <section className="w-full bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div className="relative">
          <img
            src="https://theantzone.com/cdn/shop/files/honeypots_in_tubes.webp?v=1690408442"
            alt="Ant care tubes"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* TEXT */}
        <div className="text-center md:text-left space-y-4">

          {/* ICON */}
          <img
            src="https://theantzone.com/cdn/shop/files/ant_3.png?v=1690928430"
            alt="icon"
            className="w-12 h-12 mx-auto md:mx-0"
          />

          <h2 className="text-3xl md:text-4xl font-bold">
            Cared with love in California.
          </h2>

          <p className="text-gray-200 leading-relaxed">
            When we say "cared with love," we mean that we are very intentional
            about our processes and how we take care of our ants: health comes
            first.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Our ants are taken care of in large glass tubes with water and food
            supply access at all times. We also use specialized cut blue sponges
            to prevent mold, keeping the queen and babies safe and sound.
          </p>
        </div>
      </div>
    </section>
  );
}