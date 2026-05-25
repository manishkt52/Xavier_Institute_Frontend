"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import {
  GraduationCap,
  Lock,
  User,
  Loader2,
} from "lucide-react";

export default function StudentLogin() {
  const router = useRouter();

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Session Check
  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/protected`,
          {
            credentials: "include",
          }
        );

        if (res.ok) {
          router.replace("/dashboard");
        }
      } catch (error) {
        console.log("Not logged in");
      }
    };

    checkSession();
  }, [router]);

  // ✅ Normal Login
  const handleLogin = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/student-login-id`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",

          body: JSON.stringify({
            user_id: studentId,
            password: password,
          }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        router.replace("/dashboard");
      } else {
        alert(data.detail || "Login Failed ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Server error ❌");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Google Login
  const handleGoogleLogin = async (
    token: string
  ) => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/google`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          credentials: "include",

          body: JSON.stringify({ token }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        router.replace("/dashboard");
      } else {
        alert(
          data.detail ||
            "Google Login Failed ❌"
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
          "url('/Images/student_login.avif')",
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
            <GraduationCap
              size={30}
              className="text-white"
            />
          </div>

          <h1 className="text-2xl font-bold text-white">
            Student Login
          </h1>

          <p className="mt-2 text-sm text-gray-200">
            Access your dashboard
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          {/* Student ID */}
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
              placeholder="Student ID"
              value={studentId}
              onChange={(e) =>
                setStudentId(e.target.value)
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
                setPassword(e.target.value)
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

        {/* Divider */}
        <div className="my-5 flex items-center gap-4">

          <div className="h-px flex-1 bg-white/20"></div>

          <span className="text-sm text-gray-300">
            OR
          </span>

          <div className="h-px flex-1 bg-white/20"></div>
        </div>

        {/* Google Login */}
        <div className="flex justify-center">

          <div
            className={
              loading
                ? "pointer-events-none opacity-50"
                : ""
            }
          >
            <GoogleLogin
              onSuccess={(
                credentialResponse
              ) => {
                if (
                  credentialResponse.credential
                ) {
                  handleGoogleLogin(
                    credentialResponse.credential
                  );
                }
              }}

              onError={() => {
                alert(
                  "Google Login Failed ❌"
                );
              }}
            />
          </div>
        </div>

        {/* Footer */}
        <p className="mt-5 text-center text-sm text-gray-300">
          Forgot password?
        </p>
      </div>
    </div>
  );
}