export default function WhyBuySection() {
  const features = [
    {
      title: "Health and Quality.",
      description:
        "We take great care in nurturing our ants, ensuring they are in the best condition when they arrive at your doorstep.",
    },
    {
      title: "Expert Ant Guidance.",
      description:
        "PlantedANTS provides comprehensive 20-page book on ant care, colony setup, and maintenance.",
    },
    {
      title: "Safe Shipping.",
      description:
        "Rest assured, our shipping methods prioritize the safety and security of the queen ants during transit, ensuring they reach you in excellent condition.",
    },
  ];

  return (
    <div className="section section-blends section-full">
      <div className="section-stack">
        {/* HEADER */}
        <section-header className="section-header justify-start justify-items-start text-start">
          <div className="prose">
            <h2
              className="h2"
              reveal-on-scroll="true"
              style={{ opacity: 1 }}
            >
              <split-lines>Why buy from Planted ANTS?</split-lines>
            </h2>

            <p>
              <strong>You get the best value from us.</strong> With a focus on
              ethical practices, guaranteed live arrival, and safe shipping,
              PlantedANTS takes pride in providing educational resources in each
              package, engaging with fans at reptile conventions, and making
              ant-keeping an enriching experience for all.
            </p>
          </div>
        </section-header>

        {/* COLUMNS */}
        <div className="multi-column scroll-area bleed md:unbleed">
          {features.map((feature, index) => (
            <div
              key={index}
              className="multi-column__item justify-start snap-start"
              style={{
                "--multi-column-item-column-count": "span 4",
              }}
            >
              <div className="v-stack gap-4 text-start">
                <p className="h4">{feature.title}</p>

                <div className="prose">
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}