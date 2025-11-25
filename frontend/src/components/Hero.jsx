import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-white to-beige-50">
      <div className="max-w-6xl mx-auto px-6 py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="font-serif text-6xl text-beige-900 mb-6">
            Quiet Luxury, Crafted for You
          </h2>
          <div className="w-20 h-[2px] bg-gold mx-auto mb-6"></div>
          <p className="text-beige-700 max-w-2xl mx-auto text-lg">
            Discover timeless elegance — where minimal design meets boutique
            craftsmanship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-xl border border-beige-200"
        >
          <img
            src="https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Miracle Boutique"
            className="w-full h-[540px] object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
