// components/Events.tsx

"use client";

import { CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
  {
    title: "Fire & Safety Training",
    date: "July 2025",
    description:
      "Hands-on industrial safety training program designed to prepare students for real-world workplace safety standards.",
  },
  {
    title: "AWS Guest Lecture",
    date: "Jan 2025",
    description:
      "Expert session on cloud computing, DevOps, and career opportunities in AWS technologies.",
  },
];

export default function Events() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24">
      
      {/* Background Blur */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100 blur-3xl opacity-40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16 text-center">
          
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
            <span className="text-sm font-medium text-blue-700">
              Latest Activities & Workshops
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            Upcoming Events
          </h2>

          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            Stay updated with our latest seminars, workshops, industrial
            training programs, and guest lectures designed to empower students.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {events.map((e, i) => (
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
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/10 opacity-0 transition group-hover:opacity-100" />

              {/* Date Badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2">
                <CalendarDays size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-blue-700">
                  {e.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-4 text-2xl font-bold text-gray-900 transition group-hover:text-blue-600">
                {e.title}
              </h3>

              {/* Description */}
              <p className="mb-8 leading-relaxed text-gray-600">
                {e.description}
              </p>

              {/* Button */}
              <Link
                href="/events"
                className="
                  inline-flex items-center gap-2
                  text-sm font-semibold text-blue-600
                  transition hover:gap-3
                "
              >
                View Details
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}