"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function EmployeeDashboard() {
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role !== "employee") {
      router.push("/employee-login"); // ❌ block access
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("role"); // ✅ clear session
    router.push("/");               // redirect to homepage
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-10">Employee Panel</h2>

        <ul className="space-y-4">
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Manage Students</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Reports</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Attendance</li>
          <li className="hover:bg-gray-700 p-2 rounded cursor-pointer">Settings</li>
        </ul>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="mt-10 bg-red-500 px-4 py-2 rounded hover:bg-red-600 w-full"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Employee Dashboard</h1>
          <p className="text-gray-600">Welcome, Admin 👋</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-3xl font-bold text-blue-600">120</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Active Courses</h3>
            <p className="text-3xl font-bold text-green-600">8</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Reports Generated</h3>
            <p className="text-3xl font-bold text-purple-600">15</p>
          </div>
        </div>

        {/* Activity Section */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <ul className="space-y-3 text-gray-700">
            <li>📊 Generated Monthly Report</li>
            <li>👨‍🎓 Added new student</li>
            <li>📅 Updated attendance records</li>
          </ul>
        </div>

      </main>
    </div>
  );
}