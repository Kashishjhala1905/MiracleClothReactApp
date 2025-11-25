import React from "react";

export default function FeaturedOutfit() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 mt-12 bg-gradient-to-b from-beige-50 to-white rounded-2xl">
      <div className="grid md:grid-cols-2 gap-8 items-center">

        <div>
          <h3 className="font-serif text-3xl text-gold mb-4">Featured Outfit of the Month</h3>
          <p className="text-beige-700 mb-6">
            A curated look embodying refined elegance and effortless luxury.
          </p>
          <ul className="text-beige-700 text-sm mb-6 space-y-2">
            <li>• Silk Slip Dress</li>
            <li>• Light trench layering</li>
            <li>• Cashmere scarf styling</li>
          </ul>
          <a href="#shop" className="px-6 py-3 bg-gold text-white rounded-full">Shop the Look</a>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg border border-beige-200">
          <img src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=711&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full h-80 object-cover" />
        </div>

      </div>
    </section>
  );
}
