export default function ProductFaqSection() {
  const faqItems = [
    {
      question: "How does this whole thing work? I am confused?",
      answer: (
        <>
          <p>
            No worries! We provide fertilized queen ants that will lay eggs
            and start your very own colony.
          </p>
          <p>
            If you choose workers with your queen, you save about a month
            of waiting time.
          </p>
          <p>
            The queen helps create a long-term ant farm that can live for years.
          </p>
        </>
      ),
    },
    {
      question: "What are Mini Ruby Ants?",
      answer: (
        <p>
          Mini Ruby Ants (Camponotus discolor) are known for their ruby-colored
          bodies and fascinating colony behavior.
        </p>
      ),
    },
    {
      question: "How many ants should I start with?",
      answer: (
        <p>
          We recommend starting with a queen ant and 3–5 workers.
        </p>
      ),
    },
    {
      question: "Are there any specific temperature requirements?",
      answer: (
        <p>
          Best temperature range is 20°C (68°F) to 28°C (82°F).
        </p>
      ),
    },
    {
      question: "Do Mini Ruby Ants sting or bite?",
      answer: (
        <p>
          No, they do not sting and are considered safe for beginners.
        </p>
      ),
    },
    {
      question: "What happens if these ants escape?",
      answer: (
        <>
          <p>
            They usually cannot survive long outside captivity.
          </p>
          <p>
            You can also use fluon barrier protection.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="section section-blends section-full product-faq">
      <div className="section-stack section-stack--center faq-inner">
        {/* INTRO */}
        <div className="section-stack__intro">
          <div className="v-stack gap-10">
            <div className="prose text-center">
              <h2 className="h2">Mini Ruby Ants FAQ</h2>
              <p>
                Below, we've answered some common questions about antkeeping.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="section-stack__main">
          <div className="accordion-box rounded bg-secondary">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="accordion group"
              >
                <summary>
                  <div className="accordion__toggle bold">
                    <span>{item.question}</span>
                    <span className="circle-chevron">
                      <svg role="presentation" focusable="false" width="8" height="6" class="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
      </svg>
                    </span>
                  </div>
                </summary>

                <div className="accordion__content">
                  <div className="prose">
                    {item.answer}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* SUPPORT */}
        <div>
          <div className="faq-availability">
            <div className="v-stack gap-4">
              <img
                src="/images/contact-us.png"
                alt="Live Support"
                style={{ maxWidth: "160px" }}
              />

              <div className="v-stack">
                Our live customer support is available Monday to Friday:
                8am–8:30pm PST.
                <span className="text-subdued">
                  Average answer time: 5 minutes
                </span>
              </div>
            </div>

            <button
              type="button"
              className="button button--xl"
            >
              Contact Live Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}