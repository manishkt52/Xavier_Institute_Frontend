"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 scale-105"
        style={{
          backgroundImage: `url(${images[current]}?auto=format&fit=crop&w=1600&q=80)`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-3xl">
          
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
            <span className="text-sm font-medium text-white">
              Empowering Students Across India
            </span>
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
            Skilling India
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              For a Better Future
            </span>
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl">
            Empowering youth with vocational training, industry-focused
            education, and career opportunities to build a brighter tomorrow.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/programs"
              className="
                inline-flex items-center justify-center gap-2
                rounded-2xl bg-blue-600 px-7 py-4
                text-sm font-semibold text-white
                shadow-lg shadow-blue-600/30
                transition hover:scale-105 hover:bg-blue-700
              "
            >
              Explore Programs
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="
                inline-flex items-center justify-center
                rounded-2xl border border-white/20
                bg-white/10 px-7 py-4
                text-sm font-semibold text-white
                backdrop-blur-md
                transition hover:bg-white/20
              "
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold text-white">10K+</h2>
              <p className="text-sm text-gray-300">
                Students Trained
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">95%</h2>
              <p className="text-sm text-gray-300">
                Placement Support
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white">50+</h2>
              <p className="text-sm text-gray-300">
                Skill Programs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`
              h-3 rounded-full transition-all duration-300
              ${
                current === i
                  ? "w-10 bg-white"
                  : "w-3 bg-white/50 hover:bg-white"
              }
            `}
          />
        ))}
      </div>

      {/* Bottom Blur Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
    </section>
  );
}