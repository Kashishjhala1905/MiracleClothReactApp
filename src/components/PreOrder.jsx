import React, { useState } from "react";

export default function Preorder() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-sm">

        <h3 className="font-serif text-3xl text-gold mb-4">Pre-order & Custom Requests</h3>
        <p className="text-beige-700 mb-6">Request custom colors, sizes, or designs.</p>

        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="grid gap-4"
          >
            <input placeholder="Full name" className="p-3 border border-beige-200 rounded-md" required />
            <input placeholder="Email" className="p-3 border border-beige-200 rounded-md" required />
            <textarea placeholder="Describe your customization" rows={4} className="p-3 border border-beige-200 rounded-md" />

            <button className="px-6 py-3 bg-gold text-white rounded-full">Send Request</button>
          </form>
        ) : (
          <p className="text-center py-6 text-beige-800">Thank you! We'll contact you shortly.</p>
        )}

      </div>
    </section>
  );
}
