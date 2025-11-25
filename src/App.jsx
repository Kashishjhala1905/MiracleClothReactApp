import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import StorySection from "./components/StorySection";
import Craftsmanship from "./components/Craftsmanship";
import Testimonials from "./components/Testimonials";
import Lookbook from "./components/Lookbook";
import FeaturedOutfit from "./components/FeaturedOutfit";
import StudioTour from "./components/StudioTour";
import Preorder from "./components/Preorder";
import FloatingWhatsApp from "./components/FloatingWhatsapp";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-beige-50 text-gray-900">
      <Header />

      <main className="flex-1">
        <Hero />

        <section id="shop" className="max-w-7xl mx-auto px-6 py-20 bg-white rounded-2xl shadow-sm mt-10">
          <h2 className="text-4xl font-serif text-center mb-4 text-gold tracking-wide">Our Signature Collection</h2>
          <p className="max-w-3xl mx-auto text-center text-beige-700 mb-12">
            Curated in limited quantities — crafted for women who appreciate elegance.
          </p>
          <ProductGrid />
        </section>

        <FeaturedOutfit />
        <Lookbook />
        <StorySection />
        <Craftsmanship />
        <Testimonials />
        <StudioTour />
        <Preorder />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
