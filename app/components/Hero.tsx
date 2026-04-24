"use client";

import { useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  "https://images.unsplash.com/photo-1588072432836-e10032774350",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  "https://images.unsplash.com/photo-1577896851231-70ef18881754",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[70vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${images[current]}?auto=format&fit=crop&w=1600&q=80)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Skilling India for a Better Future
        </h1>
        <p className="text-lg mb-6">
          Empowering youth with vocational training & opportunities
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded">
          Learn More
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === i ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}