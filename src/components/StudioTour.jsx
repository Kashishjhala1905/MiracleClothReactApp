import React from "react";

export default function StudioTour() {
  return (
    <section className="py-20 bg-beige-100 mt-16" id="studio">
      <div className="max-w-6xl mx-auto px-6">
        
        <h3 className="font-serif text-3xl text-center text-gold mb-6">
          Boutique Studio Tour
        </h3>

        <p className="text-center text-beige-700 mb-10">
          A behind-the-scenes look at our creative atelier — where every Miracle piece comes to life.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg border border-beige-200 overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1605217613423-0a61bd725c8a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Design desk"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="font-serif text-xl text-beige-900 mb-2">Design Desk</h4>
              <p className="text-beige-700 text-sm leading-relaxed">
                Hand-drawn sketches, fabric palettes and early-stage concepts take form here.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg border border-beige-200 overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?q=80&w=696&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sewing station"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="font-serif text-xl text-beige-900 mb-2">Sewing Atelier</h4>
              <p className="text-beige-700 text-sm leading-relaxed">
                Precision stitching and artisanal detailing — the heart of our craft.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-lg border border-beige-200 overflow-hidden hover:shadow-xl transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1673977134085-a14d9a36b87e?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Quality check"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h4 className="font-serif text-xl text-beige-900 mb-2">Final Quality Check</h4>
              <p className="text-beige-700 text-sm leading-relaxed">
                Each garment is inspected to ensure flawless quality before it reaches you.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
