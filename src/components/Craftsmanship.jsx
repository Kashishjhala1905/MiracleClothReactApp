import React from "react";

export default function Craftsmanship() {
  return (
    <section className="py-28 bg-white mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="font-serif text-4xl text-center text-gold mb-12 tracking-wide">
          Crafted With Precision & Love
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 bg-beige-100 rounded-xl shadow-sm border border-beige-200 text-center">
            <h4 className="font-serif text-xl mb-3 text-beige-900">Handpicked Fabrics</h4>
            <p className="text-beige-700 text-sm">Premium textiles offering elegance & durability.</p>
          </div>

          <div className="p-6 bg-beige-100 rounded-xl shadow-sm border border-beige-200 text-center">
            <h4 className="font-serif text-xl mb-3 text-beige-900">Artisanal Detailing</h4>
            <p className="text-beige-700 text-sm">Stitched & finished by expert boutique artisans.</p>
          </div>

          <div className="p-6 bg-beige-100 rounded-xl shadow-sm border border-beige-200 text-center">
            <h4 className="font-serif text-xl mb-3 text-beige-900">Timeless Silhouettes</h4>
            <p className="text-beige-700 text-sm">Styles created to outlast trends & seasons.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
