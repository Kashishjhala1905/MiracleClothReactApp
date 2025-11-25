import React from "react";

export default function StorySection() {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-beige-100 to-beige-50 mt-16"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="font-serif text-4xl text-gold mb-6 tracking-wide">
            Our Story
          </h3>
          <p className="text-beige-800 leading-relaxed mb-4">
            Miracle began as a boutique atelier with a vision — to redefine
            feminine elegance through minimal, luxurious, timeless silhouettes.
          </p>
          <p className="text-beige-700 leading-relaxed mb-4">
            Each garment is created in limited numbers, ensuring exclusivity and
            individuality.
          </p>
          <p className="text-beige-700 leading-relaxed">
            More than fashion — Miracle is an experience of sophistication and
            quiet confidence.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg border border-beige-200">
          <img
            src="https://plus.unsplash.com/premium_photo-1664202526336-9edbfc8e2886?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Miracle Story"
            className="w-full h-[420px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
