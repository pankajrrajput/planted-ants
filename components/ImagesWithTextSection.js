export default function ImagesWithTextSection() {
  return (
    <div className="section section--narrow section-blends section-full">

      {/* MOBILE VERSION */}
      <div className="images-scrolling-mobile scroll-area bleed sm:unbleed">

        <div className="images-scrolling-mobile__item snap-start">

          <img
            src="/images/image-text.webp"
            alt=""
            className="rounded-sm"
          />

          <div className="images-scrolling__content">

            <span className="images-scrolling__counter bold">01</span>

            <div className="prose" style={{ "--images-scrolling-item-icon-width": "48px" }}>
              <p className="h1">Check out our happy customers!</p>

              <p>
                Browse through our collection of happy testimonials and experience the excellence of our products/services firsthand down below!
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* DESKTOP VERSION */}
      <div className="images-scrolling-desktop">

        <div className="images-scrolling-desktop__content-list">

          <div className="images-scrolling__content">

            <span className="images-scrolling__counter bold">01</span>

            <div className="prose" style={{ "--images-scrolling-item-icon-width": "48px" }}>
              <p className="h1">Check out our happy customers!</p>

              <p>
                Browse through our collection of happy testimonials and experience the excellence of our products/services firsthand down below!
              </p>
            </div>

          </div>

        </div>

        <div className="images-scrolling-desktop__media-wrapper">

          <img
            src="/images/image-text.webp"
            alt=""
            className="rounded-sm"
          />

        </div>

      </div>

    </div>
  );
}