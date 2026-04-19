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

        <p className="mt-4 content-newslatter">
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
           <svg role="presentation" fill="none" focusable="false" strokeWidth="2" width="18" height="18" className="icon icon-picto-envelope" viewBox="0 0 24 24">
        <path d="M1.77 18.063a3.586 3.586 0 0 0 3.174 3.11c2.278.24 4.637.49 7.056.49 2.417 0 4.778-.252 7.056-.49a3.584 3.584 0 0 0 3.175-3.11c.243-1.96.483-3.987.483-6.063 0-2.074-.24-4.102-.483-6.063a3.586 3.586 0 0 0-3.175-3.112c-2.278-.236-4.639-.487-7.056-.487s-4.778.252-7.056.49a3.583 3.583 0 0 0-3.175 3.11c-.243 1.96-.483 3.988-.483 6.062 0 2.074.24 4.102.483 6.063Z" fill="currentColor" fill-opacity=".12" stroke="currentColor" stroke-linejoin="round"></path>
        <path d="m1.817 5.493 8.06 6.356a3.428 3.428 0 0 0 4.245 0l8.06-6.356" stroke="currentColor" stroke-linejoin="round"></path>
      </svg> Join the colony.
          </button>
        </form>
      </div>
    </section>
  );
}