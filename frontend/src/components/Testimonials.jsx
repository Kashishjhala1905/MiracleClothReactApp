import React from "react";

export default function Testimonials() {
  return (
    <section className="py-24 bg-beige-50 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="font-serif text-3xl text-gold mb-10 tracking-wide">What Our Clients Say</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-beige-200">
            <p className="text-sm text-beige-800 italic mb-4">
              “The quality feels luxurious. Every piece fits beautifully!”
            </p>
            <h4 className="font-medium text-beige-900">— Priya Kapoor</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-beige-200">
            <p className="text-sm text-beige-800 italic mb-4">
              “Miracle has become my favorite boutique. Exquisite craftsmanship.”
            </p>
            <h4 className="font-medium text-beige-900">— Sanaya Mehra</h4>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-beige-200">
            <p className="text-sm text-beige-800 italic mb-4">
              “Elegant, classy, premium. True boutique experience.”
            </p>
            <h4 className="font-medium text-beige-900">— Riya Singh</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
