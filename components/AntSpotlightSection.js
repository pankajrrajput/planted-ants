export default function AntSpotlightSection() {
  return (
    <div className="section section-blends section-full">
      <div className="section-stack">
        <div
          className="content-over-media full-bleed text-custom"
          style={{ "--text-color": "255 255 255" }}
        >
          <img
            src="/images/spotlight-sec.png"
            alt=""
            srcSet="/images/spotlight-sec.png 1062w, /images/spotlight-sec-400.png 400w, /images/spotlight-sec-800.png 800w"
            width="1062"
            height="328"
            loading="lazy"
            className="hidden md:block"
            sizes="100vw"
          />

          <img
            src="/images/spotlight-sec.png"
            alt=""
            srcSet="/images/spotlight-sec.png 1062w, /images/spotlight-sec-400.png 400w, /images/spotlight-sec-800.png 800w"
            width="1062"
            height="328"
            loading="lazy"
            className="md:hidden"
            sizes="100vw"
          />

          {/* Hot Spot 1 */}
          <div
            id="block-template-item-1"
            className="hot-spot"
          >
            <button
              type="button"
              aria-controls="popover-item-1"
              aria-expanded="false"
              className="hot-spot__dot tap-area"
              aria-haspopup="dialog"
            >
              <span className="sr-only">Read more</span>
              <svg
                role="presentation"
                focusable="false"
                strokeWidth="2"
                width="8"
                height="8"
                className="icon icon-plus"
                viewBox="0 0 12 12"
              >
                <path d="M6 0V12" fill="none" stroke="currentColor" />
                <path d="M0 6L12 6" fill="none" stroke="currentColor" />
              </svg>
            </button>

            <x-popover
              id="popover-item-1"
              className="hot-spot-popover popover"
              anchor-vertical="center"
              anchor-horizontal="start"
              role="dialog"
            >
              <div className="prose">
                <p className="h6">Digging Masters</p>
                <p>
                  Mini Ruby ants typically create subterranean nests,
                  constructing intricate tunnel systems beneath the soil's
                  surface to house their colonies.
                </p>
              </div>
            </x-popover>
          </div>

          {/* Hot Spot 2 */}
          <div
            id="block-template-item-2"
            className="hot-spot"
          >
            <button
              type="button"
              aria-controls="popover-item-2"
              aria-expanded="false"
              className="hot-spot__dot tap-area"
              aria-haspopup="dialog"
            >
              <span className="sr-only">Read more</span>
              <svg
                role="presentation"
                focusable="false"
                strokeWidth="2"
                width="8"
                height="8"
                className="icon icon-plus"
                viewBox="0 0 12 12"
              >
                <path d="M6 0V12" fill="none" stroke="currentColor" />
                <path d="M0 6L12 6" fill="none" stroke="currentColor" />
              </svg>
            </button>

            <x-popover
              id="popover-item-2"
              className="hot-spot-popover popover"
              anchor-vertical="center"
              anchor-horizontal="end"
              role="dialog"
            >
              <div className="prose">
                <p className="h6">Named after their upper body.</p>
                <p>
                  Mini Ruby ants derive their name from their striking
                  ruby-colored head.
                </p>
              </div>
            </x-popover>
          </div>

          {/* Hot Spot 3 */}
          <div
            id="block-template-item-3"
            className="hot-spot"
          >
            <button
              type="button"
              aria-controls="popover-item-3"
              aria-expanded="false"
              className="hot-spot__dot tap-area"
              aria-haspopup="dialog"
            >
              <span className="sr-only">Read more</span>
              <svg
                role="presentation"
                focusable="false"
                strokeWidth="2"
                width="8"
                height="8"
                className="icon icon-plus"
                viewBox="0 0 12 12"
              >
                <path d="M6 0V12" fill="none" stroke="currentColor" />
                <path d="M0 6L12 6" fill="none" stroke="currentColor" />
              </svg>
            </button>

            <x-popover
              id="popover-item-3"
              className="hot-spot-popover popover"
              anchor-vertical="center"
              anchor-horizontal="start"
              role="dialog"
            >
              <div className="prose">
                <p className="h6">Defense is better than offense.</p>
                <p>
                  Golden-tailed ants exhibit polymorphism, meaning they have
                  different-sized castes within the same colony.
                </p>
              </div>
            </x-popover>
          </div>
        </div>
      </div>
    </div>
  );
}