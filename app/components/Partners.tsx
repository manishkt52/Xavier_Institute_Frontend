// components/Partners.tsx

"use client";

import Image from "next/image";
import { Handshake, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Partners() {
  const partners = [
    "/Images/image_1.jpg",
    "/Images/image_2.jpg",
    "/Images/image_3.png",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-24">
      
      {/* Background Blur Effects */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <Handshake size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              Trusted Industry Collaborations
            </span>
          </div>

          {/* Heading */}
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Our Partners
          </h2>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            We collaborate with leading organizations and industry experts to
            provide quality education, practical exposure, and career
            opportunities for students.
          </p>
        </div>

        {/* Partner Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((src, i) => (
            <div
              key={i}
              className="
                group relative overflow-hidden
                rounded-3xl border border-gray-200
                bg-white/80 p-8
                shadow-sm backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >
              
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

              {/* Logo */}
              <div className="flex h-40 items-center justify-center">
                <Image
                  src={src}
                  alt={`Partner ${i + 1}`}
                  width={180}
                  height={100}
                  className="
                    object-contain
                    grayscale transition duration-300
                    group-hover:grayscale-0
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-gray-100" />

              {/* Partner Info */}
              <div className="text-center">
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  Industry Partner
                </h3>

                <p className="mb-5 text-sm leading-relaxed text-gray-600">
                  Collaborating to deliver skill-based education and
                  real-world industry experience.
                </p>

                <Link
                  href="/partners"
                  className="
                    inline-flex items-center gap-2
                    text-sm font-semibold text-blue-600
                    transition hover:gap-3
                  "
                >
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}