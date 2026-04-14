export default function ImpactStatsSection() {
  return (
    <div
      className="section section-full bg-custom"
      style={{ "--background": "255 255 255" }}
    >
      <div>
        <div className="impact-text impact-text--center">
          
          <div className="snap-center">
            <h2 className="impact-text__text heading break-all">
              <impact-text
                count-up="4"
                reveal-js=""
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                  }}
                >
                  10
                </span>
              </impact-text>
            </h2>

            <div className="impact-text__content">
              <div className="prose">
                <h3 className="h4">millimeters long.</h3>
              </div>
            </div>
          </div>

          <div className="snap-center">
            <h2 className="impact-text__text heading break-all">
              <impact-text
                count-up="5"
                reveal-js=""
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                }}
              >
                <span
                  style={{
                    textAlign: "end",
                    display: "inline-block",
                  }}
                >
                  100
                </span>
                %
              </impact-text>
            </h2>

            <div className="impact-text__content">
              <div className="prose">
                <h3 className="h4">Beginner-friendly</h3>
              </div>
            </div>
          </div>

          <div className="snap-center">
            <h2 className="impact-text__text heading break-all">
              <impact-text
                count-up="2.1"
                reveal-js=""
                style={{
                  opacity: 1,
                  transform: "translateY(0px)",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                  }}
                >
                  5
                </span>
              </impact-text>
            </h2>

            <div className="impact-text__content">
              <div className="prose">
                <h3 className="h4">Year lifespan</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}