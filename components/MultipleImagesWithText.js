export default function MultipleImagesWithText() {
  return (
    <div className="section section-blends section-full">

      <div className="multiple-images-with-text">

        {/* IMAGE LIST */}
        <div className="multiple-images-with-text__image-list">

          <img
            src="/images/ants_honeypots.webp"
            alt=""
            className="rounded-sm shadow-sm reveal"
            style={{
              "--image-rotation": "-2deg",
              transform: "rotate(var(--image-rotation, 0deg))",
            }}
          />

        </div>

        {/* CONTENT */}
        <div className="multiple-images-with-text__content-with-nav">

          <div className="multiple-images-with-text__content-list">

            <div className="prose is-selected">

              <p className="bold">Ants for</p>

              <p className="h1">
                Beginner Ant Keepers
              </p>

              <p>
                Multiple species are available with queens, ranging from huge golden honeypots to ruby red harvesters.
                All Planted ANTS colonies will have a queen ant included!
              </p>

              <a
                href="/collections/ants-for-sale"
                className="button button--xl"
              >
                Beginner Ant Queens
              </a>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}