// components/Footer.tsx

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Institute Info */}
          <div>
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
              St. Xavier Institute
            </h2>

            <p className="mb-6 leading-relaxed text-gray-600">
              Empowering students through skill-based education,
              vocational training, and industry-focused learning.
            </p>

            <div className="space-y-3 text-sm text-gray-600">
              
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-blue-600" />
                <span>New Delhi, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-600" />
                <span>stxavier.delhi43@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-600" />
                <span>+91 XXXXX XXXXX</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <Link
                href="/"
                className="text-gray-600 transition hover:text-blue-600"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="text-gray-600 transition hover:text-blue-600"
              >
                About
              </Link>

              <Link
                href="/programs"
                className="text-gray-600 transition hover:text-blue-600"
              >
                Programs
              </Link>

              <Link
                href="/contact"
                className="text-gray-600 transition hover:text-blue-600"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              Stay Connected
            </h3>

            <p className="mb-5 text-sm leading-relaxed text-gray-600">
              Get updates about workshops, training programs,
              and student opportunities.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-12 rounded-xl border border-gray-300
                  px-4 text-sm outline-none
                  transition
                  focus:border-blue-500
                  focus:ring-4 focus:ring-blue-100
                "
              />

              <button
                className="
                  h-12 rounded-xl
                  bg-blue-600 px-5
                  text-sm font-medium text-white
                  transition hover:bg-blue-700
                "
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-row">
            
            <p>
              © 2026 St. Xavier Institute. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="transition hover:text-blue-600"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition hover:text-blue-600"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}