"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        flex h-10 w-10 items-center justify-center
        rounded-xl
        border border-gray-200
        bg-white
        text-gray-700
        transition-all duration-300
        hover:bg-gray-100
        dark:border-gray-800
        dark:bg-gray-900
        dark:text-gray-200
        dark:hover:bg-gray-800
      "
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}