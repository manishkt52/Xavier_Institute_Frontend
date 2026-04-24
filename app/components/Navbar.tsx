// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-white text-black shadow">
      <h1 className="text-xl font-bold text-black">
        St. Xavier Institute
      </h1>

      <ul className="flex gap-6">
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
      </ul>
    </nav>
  );
}