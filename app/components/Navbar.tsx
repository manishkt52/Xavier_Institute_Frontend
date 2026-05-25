// components/Navbar.tsx
"use client";
import ThemeToggle from "./ThemeToggle";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900/80 dark:bg-gray-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3">
          <div className="overflow-hidden rounded-full border shadow-sm">
            <Image
              src="/Images/xavier_logo.jpg"
              alt="logo"
              width={45}
              height={45}
              className="object-cover"
            />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
              St. Xavier Institute
            </h1>
            <p className="text-xs text-gray-500">
              Excellence in Education
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          {["Home", "About", "Programs", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href="/"
                className="relative text-sm font-medium text-gray-700 dark:text-gray-300 transition hover:text-blue-600"
              >
                {item}
              </Link>
            </li>
          ))}

           <li>
            <ThemeToggle />
          </li>

          {/* Login Dropdown */}
          <li className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition hover:border-blue-500 hover:text-blue-600"
            >
              Login
              <ChevronDown
                size={16}
                className={`transition ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-44 overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-xl">
                <Link
                  href="/employee-login"
                  className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 transition hover:bg-gray-100"
                >
                  Employee Login
                </Link>

                <Link
                  href="/student-login"
                  className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 transition hover:bg-gray-100"
                >
                  Student Login
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="rounded-lg border border-gray-200 dark:border-gray-800 p-2 md:hidden"
        >
          {mobileMenu ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="border-t bg-white dark:bg-gray-900 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              href="/"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              About
            </Link>

            <Link
              href="/"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Programs
            </Link>

            <Link
              href="/"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600"
            >
              Contact
            </Link>
            
            <div className="pt-2">
                <ThemeToggle />
            </div>

            <div className="mt-2 border-t pt-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Login
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/employee-login"
                  className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 text-sm font-medium transition hover:bg-gray-100"
                >
                  Employee Login
                </Link>

                <Link
                  href="/student-login"
                  className="rounded-xl border border-gray-200 dark:border-gray-800 px-4 py-3 text-sm font-medium transition hover:bg-gray-100"
                >
                  Student Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}