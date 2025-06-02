import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans">
      {/* Navbar */}
      <header className="p-6 flex justify-between items-center border-b border-neutral-800">
        <h1 className="text-2xl font-bold tracking-widest">VEIL CARTER</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#products" className="hover:underline">Products</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#try" className="hover:underline">Virtual Try</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h2 className="text-5xl font-semibold mb-4">Minimal. Bold. You.</h2>
        <p className="max-w-xl text-neutral-400 mb-8">
          Redefining fashion with simplicity and soul. Oversized comfort meets aesthetic storytelling.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
          Shop Now
        </button>
      </section>

      {/* Product Section */}
      <section id="products" className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center mb-12">Featured Drops</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-neutral-900 p-4 rounded-2xl shadow-md hover:scale-105 transition">
              <div className="bg-neutral-800 h-64 rounded-xl mb-4"></div>
              <h4 className="text-xl font-semibold mb-2">Oversized Tee {item}</h4>
              <p className="text-neutral-400 text-sm mb-1">Minimalist | Unisex</p>
              <p className="text-white font-bold">₹999</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 text-center bg-neutral-900">
        <h3 className="text-3xl font-semibold mb-6">Our Story</h3>
        <p className="max-w-2xl mx-auto text-neutral-400">
          Veil Carter was born to blend aesthetic fashion with soul. We believe in
          timeless, slow fashion — built to feel good and look even better.
        </p>
      </section>

      {/* Virtual Trial Room */}
      <section id="try" className="py-16 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-6">Virtual Try-On Room</h3>
        <p className="text-neutral-400 mb-6">
          Use our upcoming AI-powered try-on system to preview how our clothes fit you.
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
          Coming Soon
        </button>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center text-neutral-500 text-sm border-t border-neutral-800">
        © 2025 Veil Carter. All rights reserved.
      </footer>
    </div>
  );
}
