"use client";

export default function NewsletterSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    console.log("Subscribe email:", email);
    // connect to Klaviyo / Mailchimp / API here
  };

  return (
    <section
      className="w-full py-20 news-letter-section">
      <div className="max-w-3xl mx-auto px-6 text-center news-inner">
        <h2 className="text-3xl font-bold">
          Get 10% off your first ANT order.
        </h2>

        <p className="mt-4">
          <strong>
            Are you ready to embark on the journey into the world of antkeeping?
          </strong>{" "}
          Planted Ants welcomes you with open arms and an exclusive offer – get
          10% off your first order!
        </p>

        <form
          className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            required
            placeholder="E-mail"
            className="w-full sm:w-80 px-4 py-3 rounded-md border border-gray-300"
          />

          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded-md"
          >
            Join the colony.
          </button>
        </form>
      </div>
    </section>
  );
}