"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      // Replace this with your API route (e.g. /api/contact)
      await new Promise((res) => setTimeout(res, 1000));

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-16 bg-white">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">

        {/* LEFT TEXT */}
        <div>
          <p className="font-semibold text-sm mb-2">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Do you have any questions?
          </h2>
        </div>

        {/* FORM */}
        <div className="bg-gray-50 p-6 rounded-md">

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-md"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 border rounded-md resize-none"
            />

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
            >
              {loading ? "Sending..." : "Send message"}
            </button>

            {/* SUCCESS MESSAGE */}
            {success && (
              <p className="text-green-600 text-sm">
                Message sent successfully!
              </p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}