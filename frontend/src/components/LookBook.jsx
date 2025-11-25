import React from "react";

const lookbook = [
  "https://plus.unsplash.com/premium_photo-1760580333396-3d24af18f004?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1735553816668-8a92834309ad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1687485794069-25ce04c50357?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661433069978-ce5985411e7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1695604460839-024ffff818e3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1693988110900-1e44ebd20697?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

export default function Lookbook() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="font-serif text-3xl text-center text-gold mb-6">Lookbook</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {lookbook.map((src, i) => (
            <div key={i} className="lookbook-item rounded-xl overflow-hidden shadow-md border border-beige-200">
              <img src={src} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
