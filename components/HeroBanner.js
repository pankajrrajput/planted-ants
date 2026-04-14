export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden">

      {/* BACKGROUND IMAGE (fixed) */}
      <img
        src="/images/hero-sec.png"
        alt="Planted Ants Story"
        className="w-full h-[500px] md:h-[650px] object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-2xl">

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Planted ANTS - Our Story
          </h1>

          <p className="text-base md:text-lg mb-6 opacity-90">
            plantedANTS was founded on this simple premise—ants make us happy
          </p>

          <a
            href="/pages/planted-ants-story"
            className="inline-block px-6 py-3 rounded-md bg-green-600 hover:bg-green-700 transition"
          >
            Our Story
          </a>

        </div>
      </div>

    </section>
  );
}