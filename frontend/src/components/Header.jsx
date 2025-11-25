import React, { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-sm border-b border-beige-200 py-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">

        {/* Centered Brand Name */}
        <h1 className="font-serif text-4xl tracking-[4px] text-gold uppercase text-center">
          Miracle
        </h1>
        <p className="text-xs tracking-widest text-beige-700 uppercase font-light mt-1">
          Boutique Collection
        </p>

        {/* Centered Nav */}
        <nav className="hidden md:flex gap-10 mt-5 text-sm font-medium text-beige-800">
          <a href="#shop" className="hover:text-gold transition">Shop</a>
          <a href="#about" className="hover:text-gold transition">About</a>
          <a href="#contact" className="hover:text-gold transition">Contact</a>
        </nav>

        {/* Mobile menu icon */}
        <button onClick={() => setOpen(true)} className="md:hidden mt-4 px-3 py-2">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/30">
          <div className="absolute right-0 w-64 bg-white h-full shadow-xl p-6">
            <button className="mb-6" onClick={() => setOpen(false)}>✕ Close</button>

            <nav className="flex flex-col gap-4 text-lg">
              <a href="#shop" onClick={() => setOpen(false)}>Shop</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
