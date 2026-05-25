"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Briefcase,
  Lock,
  User,
  Loader2,
} from "lucide-react";

export default function EmployeeLogin() {
  const router = useRouter();

  const [employeeId, setEmployeeId] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // ✅ Session Check
  useEffect(() => {
    const role =
      localStorage.getItem("role");

    if (role === "employee") {
      router.push("/employee-dashboard");
    }
  }, [router]);

  // ✅ Login Handler
  const handleLogin = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/employee-login",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            id: employeeId,
            password,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem(
          "role",
          "employee"
        );

        router.push(
          "/employee-dashboard"
        );
      } else {
        alert(
          data.detail ||
            "Login Failed ❌"
        );
      }
    } catch (error) {
      console.error(error);

      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        relative flex min-h-screen
        items-center justify-center
        overflow-hidden px-4
      "
      style={{
        backgroundImage:
          "url('/Images/employee_login.jpg')",

        backgroundSize: "cover",

        backgroundPosition: "center",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Glow Effects */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>

      {/* Loading Overlay */}
      {loading && (
        <div
          className="
            absolute inset-0 z-50
            flex flex-col items-center
            justify-center bg-black/70
            backdrop-blur-md
          "
        >
          <Loader2
            size={60}
            className="animate-spin text-white"
          />

          <p className="mt-5 text-lg font-medium text-white">
            Authenticating...
          </p>
        </div>
      )}

      {/* Login Card */}
      <div
        className="
          relative z-10 w-full max-w-sm
          overflow-hidden rounded-3xl
          border border-white/20
          bg-white/10 p-6
          shadow-2xl backdrop-blur-xl
        "
      >

        {/* Header */}
        <div className="mb-6 text-center">

          <div
            className="
              mx-auto mb-4 flex
              h-16 w-16 items-center
              justify-center rounded-2xl
              bg-blue-600 shadow-lg
            "
          >
            <Briefcase
              size={30}
              className="text-white"
            />
          </div>

          <h1 className="text-2xl font-bold text-white">
            Employee Login
          </h1>

          <p className="mt-2 text-sm text-gray-200">
            Secure employee portal access
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          {/* Employee ID */}
          <div className="relative">

            <User
              size={18}
              className="
                absolute left-4 top-1/2
                -translate-y-1/2 text-gray-400
              "
            />

            <input
              type="text"
              placeholder="Employee ID"
              value={employeeId}
              onChange={(e) =>
                setEmployeeId(
                  e.target.value
                )
              }
              className="
                w-full rounded-2xl
                border border-white/20
                bg-white/10 py-3
                pl-12 pr-4 text-white
                placeholder:text-gray-300
                outline-none transition
                focus:border-blue-400
                focus:ring-2
                focus:ring-blue-500/30
              "
            />
          </div>

          {/* Password */}
          <div className="relative">

            <Lock
              size={18}
              className="
                absolute left-4 top-1/2
                -translate-y-1/2 text-gray-400
              "
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              className="
                w-full rounded-2xl
                border border-white/20
                bg-white/10 py-3
                pl-12 pr-4 text-white
                placeholder:text-gray-300
                outline-none transition
                focus:border-blue-400
                focus:ring-2
                focus:ring-blue-500/30
              "
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              flex w-full items-center
              justify-center gap-2
              rounded-2xl bg-gradient-to-r
              from-blue-600 to-indigo-600
              px-5 py-3 font-medium
              text-white shadow-lg
              transition hover:scale-[1.02]
              hover:from-blue-700
              hover:to-indigo-700
            "
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />

                Loading...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-5">

          <p className="text-center text-sm text-gray-300">
            Employee Access Only
          </p>

          <p className="mt-2 text-center text-xs text-gray-400">
            Authorized personnel only
          </p>
        </div>
      </div>
    </div>
  );
}