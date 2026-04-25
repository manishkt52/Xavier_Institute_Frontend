// components/Navbar.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white text-black shadow">
      
      {/* Logo + Title */}
      <div className="flex items-center gap-2">
        <Image
          src="/Images/xavier_logo.jpg"   // 👈 your logo path
          alt="logo"
          width={40}
          height={40}
        />
        <h1 className="text-xl font-bold text-black">
          St. Xavier Institute
        </h1>
      </div>

      <ul className="flex gap-6 items-center">
        <li className="cursor-pointer hover:text-blue-600 transition">
          Home
        </li>
        <li className="cursor-pointer hover:text-blue-600 transition">
          About
        </li>
        <li className="cursor-pointer hover:text-blue-600 transition">
          Programs
        </li>
        <li className="cursor-pointer hover:text-blue-600 transition">
          Contact
        </li>

        {/* Login Dropdown */}
        <li className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="cursor-pointer hover:text-blue-600 transition flex items-center gap-1"
          >
            Login
            <span>{open ? "▲" : "▼"}</span>
          </div>

          {open && (
            <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow">
              <p className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Employee
              </p>
                <Link
                    href="/student-login"
                    className="block px-4 py-2 hover:bg-gray-100"
                >
              Student
              </Link>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}