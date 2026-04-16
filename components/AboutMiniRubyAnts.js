export default function AboutMiniRubyAnts() {
  return (
    <div className="section section-blends section-full about-ant">
      <div className="section-stack section-stack--horizontal wrap-container">
        <div className="section-stack__intro">
          <div className="prose">
            <p className="bold">About Mini Ruby Ants:</p>
            <p>
              On a personal note, Mini Ruby ants hold a special place in our
              hearts, and we're excited to share some intriguing facts about
              these ants!
            </p>
          </div>
        </div>

        <div className="section-stack__main">
          <feature-chart
            max-rows="5"
            className="feature-chart bg-custom text-custom"
            style={{
              "--background": "244 244 244",
              "--text-color": "26 26 26",
            }}
          >
            <div className="feature-chart__table divide-y scroll-area">
              <div className="feature-chart__table-row">
                <div className="feature-chart__heading bold">
                  Beginner Friendly?
                </div>
                <div className="feature-chart__value prose text-subdued">
                  <p>
                    <strong>Yes!</strong> They are also child-safe. (no biting
                    or stinging)
                  </p>
                </div>
              </div>

              <div className="feature-chart__table-row">
                <div className="feature-chart__heading bold">
                  Soldier Ants?
                </div>
                <div className="feature-chart__value prose text-subdued">
                  <p>
                    <strong>Yes!</strong> In two months, you will see soldier
                    ants in your colony.
                  </p>
                </div>
              </div>

              <div className="feature-chart__table-row">
                <div className="feature-chart__heading bold">
                  Special Traits?
                </div>
                <div className="feature-chart__value prose text-subdued">
                  <p>
                    <strong>Yes!</strong> Workers have a black tail with a
                    ruby-colored body.
                  </p>
                </div>
              </div>

              <div className="feature-chart__table-row">
                <div className="feature-chart__heading bold">Diet?</div>
                <div className="feature-chart__value prose text-subdued">
                  <p>
                    <strong>No</strong> special diet. They are omnivorous and
                    have a diverse diet, which includes scavenging for small
                    insects, feeding on honeydew produced by aphids, and
                    foraging for plant material.
                  </p>
                </div>
              </div>
            </div>
          </feature-chart>
        </div>
      </div>
    </div>
  );
}