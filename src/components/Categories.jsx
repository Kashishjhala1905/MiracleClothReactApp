import React from "react";

export default function Categories({ setFilter }) {
  return (
    <div className="flex justify-center gap-6 mb-10">
      <button onClick={() => setFilter("Exclusive Custom Dresses")} className="px-4 py-2 border border-beige-300 rounded-full hover:bg-beige-100">
        Exclusive Custom Dresses
      </button>

      <button onClick={() => setFilter("Heavy Dress")} className="px-4 py-2 border border-beige-300 rounded-full hover:bg-beige-100">
        Heavy Dress
      </button>

      <button onClick={() => setFilter("Winter Collection")} className="px-4 py-2 border border-beige-300 rounded-full hover:bg-beige-100">
        Winter Collection
      </button>

      <button onClick={() => setFilter(null)} className="px-4 py-2 border border-beige-300 rounded-full hover:bg-beige-100">
        All
      </button>
    </div>
  );
}
