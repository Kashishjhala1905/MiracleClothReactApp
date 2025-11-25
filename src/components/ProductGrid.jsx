import React, { useEffect, useState } from "react";

const API_BASE = "https://short-rules-cover.loca.lt";
const PRODUCTS_URL = `${API_BASE}/api/products`;
const fallbackPublicImg = "/images/miracle.jpg";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(PRODUCTS_URL);
        if (!res.ok) throw new Error(`Failed to load products (${res.status})`);
        const data = await res.json();
        if (!mounted) return;
        setProducts(data);
        const cats = Array.from(new Set(data.map((p) => p.category).filter(Boolean)));
        setCategories(["All", ...cats]);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    load();
    return () => (mounted = false);
  }, []);

  const filtered = filter === "All" ? products : products.filter((p) => p.category === filter);

  function imgUrl(p) {
    if (!p) return fallbackPublicImg;
    if (p.img) {
      if (p.img.startsWith("/uploads")) return `${API_BASE}${p.img}`;
      return p.img;
    }
    return fallbackPublicImg;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="font-serif text-2xl text-beige-900">Collection</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${filter === c ? "bg-gold text-white shadow-md" : "bg-white border border-beige-200 text-beige-800 hover:bg-beige-100"}`}>{c}</button>
            ))}
          </div>
        </div>

        {loading && <div className="py-16 flex justify-center"><div className="text-beige-700">Loading products…</div></div>}
        {error && <div className="py-8 text-center text-red-600">Error loading products: {error}</div>}
        {!loading && !error && filtered.length === 0 && <div className="py-12 text-center text-beige-700">No products found.</div>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <article key={p._id || p.id} className="bg-white rounded-2xl overflow-hidden border border-beige-200 shadow-sm cursor-pointer hover:shadow-md transition">
              <div className="h-64 bg-gray-100 overflow-hidden">
                <img src={imgUrl(p)} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg text-beige-900">{p.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gold">{p.category}</span>
                  <span className="text-sm text-beige-700">{p.price}</span>
                </div>
                <p className="text-sm text-beige-600 mt-3 line-clamp-3">{p.desc}</p>

                <div className="mt-4 flex gap-3">
                  <button onClick={() => setSelected(p)} className="flex-1 px-4 py-2 rounded-full bg-gold text-white text-sm font-medium shadow">View</button>
                  <a href={`https://wa.me/918349439349?text=${encodeURIComponent(`Hi! I'm interested in the ${p.title} (${p.category}) priced at ${p.price}. Is it available?`)}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-beige-300 text-sm text-beige-800 hover:bg-beige-100">Order</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" aria-modal="true" role="dialog">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelected(null)} />
          <div className="relative z-10 w-full max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg" style={{ maxHeight: "95vh" }}>
            <div className="w-full h-80 md:h-96 overflow-hidden">
              <img src={imgUrl(selected)} alt={selected.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 overflow-auto" style={{ maxHeight: "calc(95vh - 380px)" }}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-beige-900">{selected.title}</h3>
                  <div className="text-sm text-gold">{selected.category}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-beige-700">Price</div>
                  <div className="font-semibold text-beige-900">{selected.price}</div>
                </div>
              </div>
              <p className="mt-4 text-beige-700">{selected.desc}</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href={`https://wa.me/918349439349?text=${encodeURIComponent(`Hi! I'm interested in the ${selected.title} (${selected.category}) priced at ${selected.price}. Please help with details and ordering.`)}`} target="_blank" rel="noreferrer" className="flex-1 px-6 py-3 rounded-full bg-gold text-white text-center font-medium shadow">Order on WhatsApp</a>
                <button onClick={() => setSelected(null)} className="flex-1 px-6 py-3 rounded-full border border-beige-300 text-beige-800 hover:bg-beige-50">Close</button>
              </div>
              <div className="mt-6 text-xs text-beige-500"><strong>Note:</strong> For custom orders or measurements, please include details in the WhatsApp message.</div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .fixed[aria-modal="true"] .relative.z-10 { width: 100%; height: 100%; border-radius: 0; max-width: 100%; max-height: 100%; }
          .fixed[aria-modal="true"] .w-full.h-80 { height: 45vh; }
        }
      `}</style>
    </>
  );
}
