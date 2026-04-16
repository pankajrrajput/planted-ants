export default function IncludedPackageSection() {
  return (
    <div
      className="section section-boxed bg-custom yellow-text-iamge-section"
      style={{ "--background": "255 183 74" }}
    >
      <div className="section-stack">
        <div className="justify-self-center">
          <h2 className="h3">Included in your package:</h2>
        </div>

        <div className="text-with-icons">
          <scroll-carousel
            className="text-with-icons__list scroll-area full-bleed md:unbleed"
            id="carousel-template-package"
            role="region"
          >
            <div
              id="package-item-1"
              className="text-with-icons__item snap-center"
              role="group"
              aria-label="Item 1 of 3"
            >
              <div className="icon-block rounded-full bg-secondary">
                <img
                  src="/images/open-book.png"
                  alt=""
                  srcSet="/images/open-book.png 32w, /images/open-book.png 64w"
                  width="512"
                  height="512"
                  loading="eager"
                  sizes="32px"
                  style={{
                    "--mobile-icon-max-width": "24px",
                    "--icon-max-width": "32px",
                  }}
                  className="image-icon"
                />
              </div>

              <div className="text-with-icons__text-wrapper">
                <div className="prose">
                  <p className="h5">20-Page Care Book</p>
                </div>
              </div>
            </div>

            <div
              id="package-item-2"
              className="text-with-icons__item snap-center"
              role="group"
              aria-label="Item 2 of 3"
            >
              <div className="icon-block rounded-full bg-secondary">
                <img
                  src="/images/ant_1.png2"
                  alt=""
                  srcSet="/images/ant_1.png?width=32 32w, /images/ant_1.png?width=64 64w"
                  width="512"
                  height="512"
                  loading="eager"
                  sizes="32px"
                  style={{
                    "--mobile-icon-max-width": "24px",
                    "--icon-max-width": "32px",
                  }}
                  className="image-icon"
                />
              </div>

              <div className="text-with-icons__text-wrapper">
                <div className="prose">
                  <p className="h5">Mini Ruby Queen Ant</p>
                </div>
              </div>
            </div>

            <div
              id="package-item-3"
              className="text-with-icons__item snap-center"
              role="group"
              aria-label="Item 3 of 3"
            >
              <div className="icon-block rounded-full bg-secondary">
                <img
                  src="/images/dishes.png?width=512"
                  alt=""
                  srcSet="/images/dishes.png?width=32 32w, /images /dishes.png?width=64 64w"
                  width="512"
                  height="512"
                  loading="lazy"
                  sizes="32px"
                  style={{
                    "--mobile-icon-max-width": "24px",
                    "--icon-max-width": "32px",
                  }}
                  className="image-icon"
                />
              </div>

              <div className="text-with-icons__text-wrapper">
                <div className="prose">
                  <p className="h5">Mystery Gift</p>
                </div>
              </div>
            </div>
          </scroll-carousel>

          <page-dots
            aria-controls="carousel-template-package"
            className="page-dots peer-not-scrollable:hidden"
          >
            <button type="button" className="tap-area" aria-current="true">
              <span className="sr-only">Go to item 1</span>
            </button>

            <button type="button" className="tap-area" aria-current="false">
              <span className="sr-only">Go to item 2</span>
            </button>

            <button type="button" className="tap-area" aria-current="false">
              <span className="sr-only">Go to item 3</span>
            </button>
          </page-dots>
        </div>
      </div>
    </div>
  );
}