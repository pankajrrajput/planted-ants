export default function Banner() {
  return (
    <div
      className="slideshow"
      style={{ "--slideshow-controls-color": "255 255 255" }}
    >
      <div
        className="slideshow__carousel"
        data-reveal-on-scroll="true"
        data-selector=".slideshow__slide"
        data-transition="fade_with_text"
        data-autoplay="6"
        role="region"
      >
        {/* SLIDE 1 */}
        <div id="block-slide-1" className="slideshow__slide is-selected">

          <div
            className="content-over-media content-over-media--auto"
            style={{
              "--content-over-media-content-max-width": "520px",
              "--content-over-media-overlay": "0 0 0 / 0.3",
            }}
          >

            {/* Desktop Image */}
            <img
              src="/images/banner-img.webp"
              alt=""
              className="hidden sm:block"
            />

            {/* Mobile Image */}
            <img
              src="/images/banner-mobile.webp"
              alt=""
              className="sm:hidden"
            />

            {/* TEXT OVERLAY */}
            <div className="place-self-center text-center text-white">
              <div className="prose">
                <p className="bold">The Wonders Of</p>

                <p className="h0">
                  Ant-Keeping
                </p>

                <a
                  href="/collections/ants-for-sale"
                  className="button button--xl bg-white text-black px-6 py-3 inline-block mt-4"
                >
                  QUEEN ANTS FOR SALE
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}