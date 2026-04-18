"use client";

import { useState } from "react";
import { buildShopifyUrl } from "../lib/shopifyUrl";

export default function FaqSection() {
  const faqs = [
    {
      question: "Are the ants safe to ship?",
      answer:
        "Yes, we ensure the safety and well-being of the ants during transit. They are shipped in insulated boxes and glass tubes to make sure they arrive healthy and active.",
    },
    {
      question: "How long will it take to get my orders?",
      answer:
        "Orders typically take 3-4 business days to arrive depending on your location. In some cases, shipments may be delayed due to temperature conditions.",
    },
    {
      question: "Can I customize my ant farm?",
      answer:
        "Absolutely! We offer customizable ant farms with different sizes and designs to suit your preferences.",
    },
    {
      question: "What if my ants arrive damaged or dead?",
      answer:
        "In rare cases, contact support within 24 hours of delivery and we will resolve it by sending replacements.",
    },
    {
      question: "Are the ant farms escape-proof?",
      answer:
        "Yes, our ant farms are carefully designed to be escape-proof for safety and security.",
    },
    {
      question: "Any questions?",
      answer:
        "You can contact us through our contact page and we will be happy to assist you.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-4 faq-section">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 inner-container">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planted ANTS FAQ
          </h2>
          <img src="/images/contact-us.png" alt="FAQ" width={500} height={300} className="mb-6" />

          <p className="text-gray-600 mb-8">
            Check out the most common questions our customers asked. Still have questions?{" "}
            <span className="font-semibold">Contact us at plantedants@gmail.com</span>
          </p>

          {/* Support Box */}
          <div className="hidden md:block bg-gray-50 p-4 rounded-md mb-6 remove-bg">
            <p className="text-sm text-gray-700">
              Our customer support is available Monday to Friday: 8am-8:30pm PST.
              Average answer time: 15 minutes
            </p>
          </div>

          <a
            href={buildShopifyUrl("/pages/contact")}
            className="inline-block px-6 py-3 bg-black text-white rounded-md"
          >
            Contact Live Support
          </a>
        </div>

        {/* RIGHT SIDE - ACCORDION */}
        <div className="space-y-3 faq_right">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="faq-content"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-4 py-3 flex justify-between items-center font-medium"
              >
                {item.question}

                <span
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                <svg role="presentation" focusable="false" width="8" height="6" className="icon icon-chevron-bottom-small" viewBox="0 0 8 6">
        <path d="m1 1.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5"></path>
      </svg>
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`px-4 text-gray-600 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 py-3"
                    : "max-h-0 py-0"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}