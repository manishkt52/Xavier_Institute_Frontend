"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  Trophy,
  User,
  LogOut,
  CreditCard,
  Menu,
  X,
} from "lucide-react";

export default function Dashboard() {
  const router = useRouter();

  const [checking, setChecking] =
    useState(true);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [
    showLogoutModal,
    setShowLogoutModal,
  ] = useState(false);

  // ✅ Session Check
  useEffect(() => {
    let mounted = true;

    const checkSession =
      async () => {
        try {
          const res =
            await fetch(
              "http://localhost:8000/protected",
              {
                credentials:
                  "include",
              }
            );

          if (
            !res.ok &&
            mounted
          ) {
            router.replace(
              "/student-login"
            );

            return;
          }
        } catch (error) {
          if (mounted) {
            router.replace(
              "/student-login"
            );
          }
        } finally {
          if (mounted) {
            setChecking(false);
          }
        }
      };

    checkSession();

    return () => {
      mounted = false;
    };
  }, [router]);

  // ✅ Load Razorpay
  useEffect(() => {
    const script =
      document.createElement(
        "script"
      );

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";

    script.async = true;

    document.body.appendChild(
      script
    );
  }, []);

  // ✅ Razorpay
  const handlePayment =
    async () => {
      try {
        const res =
          await fetch(
            "http://localhost:8000/create-order",
            {
              method: "POST",
              credentials:
                "include",
            }
          );

        const data =
          await res.json();

        if (!res.ok) {
          alert(
            "Failed to create order ❌"
          );

          return;
        }

        const options = {
          key:
            "rzp_test_SrY3grXmg3MEID",

          amount:
            data.order.amount,

          currency:
            data.order.currency,

          order_id:
            data.order.id,

          name:
            "St. Xavier Institute",

          description:
            "Course Purchase",

          handler:
            function (
              response: any
            ) {
              alert(
                "Payment Successful ✅"
              );

              console.log(
                response
              );
            },

          prefill: {
            name:
              "Student",

            email:
              "student@gmail.com",
          },

          theme: {
            color:
              "#2563eb",
          },
        };

        const razorpay =
          new (
            window as any
          ).Razorpay(
            options
          );

        razorpay.open();

      } catch (error) {
        console.error(
          error
        );

        alert(
          "Payment failed ❌"
        );
      }
    };

  // ✅ Logout
  const handleLogout =
    async () => {
      try {
        const res =
          await fetch(
            "http://localhost:8000/logout",
            {
              method:
                "POST",

              credentials:
                "include",
            }
          );

        if (res.ok) {
          setShowLogoutModal(
            false
          );

          router.replace(
            "/student-login"
          );

          router.refresh();
        } else {
          alert(
            "Logout failed ❌"
          );
        }

      } catch (error) {
        console.error(
          error
        );

        alert(
          "Server error ❌"
        );
      }
    };

  // loader
  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              Student Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              Welcome back 👋
            </p>
          </div>

          {/* Desktop Logout */}
          <button
            onClick={() =>
              setShowLogoutModal(
                true
              )
            }
            className="hidden items-center gap-2 rounded-xl bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600 md:flex"
          >
            <LogOut
              size={18}
            />
            Logout
          </button>

          {/* Mobile */}
          <button
            onClick={() =>
              setMobileMenu(
                !mobileMenu
              )
            }
            className="rounded-xl border p-2 md:hidden"
          >
            {mobileMenu ? (
              <X size={22} />
            ) : (
              <Menu
                size={22}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="border-t bg-white px-6 py-4 md:hidden">
            <button
              onClick={() =>
                setShowLogoutModal(
                  true
                )
              }
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-4 py-3 text-sm font-medium text-white"
            >
              <LogOut
                size={18}
              />
              Logout
            </button>
          </div>
        )}
      </header>

      <div className="mx-auto flex max-w-7xl">

        {/* Sidebar */}
        <aside className="hidden min-h-screen w-72 border-r bg-white p-6 md:block">

          <div className="mb-10">
            <h2 className="text-2xl font-bold text-blue-600">
              St. Xavier
            </h2>

            <p className="text-sm text-gray-500">
              Student Portal
            </p>
          </div>

          <nav className="space-y-3">

            <SidebarItem
              icon={
                <LayoutDashboard
                  size={
                    18
                  }
                />
              }
              title="Dashboard"
              active
            />

            <SidebarItem
              icon={
                <BookOpen
                  size={
                    18
                  }
                />
              }
              title="Courses"
            />

            <SidebarItem
              icon={
                <ClipboardList
                  size={
                    18
                  }
                />
              }
              title="Assignments"
            />

            <SidebarItem
              icon={
                <Trophy
                  size={
                    18
                  }
                />
              }
              title="Results"
            />

            <SidebarItem
              icon={
                <User
                  size={
                    18
                  }
                />
              }
              title="Profile"
            />
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 lg:p-10">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <StatsCard
              title="Courses Enrolled"
              value="12"
            />

            <StatsCard
              title="Assignments"
              value="8"
            />

            <StatsCard
              title="Results Published"
              value="5"
            />
          </div>

          {/* Course */}
          <div className="mt-10">

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-gray-900">
                Popular
                Courses
              </h2>
            </div>

            <div className="max-w-md overflow-hidden rounded-3xl border bg-white shadow-sm">

              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                  <CreditCard
                    size={
                      28
                    }
                  />
                </div>

                <h2 className="text-2xl font-bold">
                  AWS Cloud
                  Course
                </h2>

                <p className="mt-2 text-sm text-blue-100">
                  Learn AWS
                  with
                  projects.
                </p>
              </div>

              <div className="p-6">

                <h3 className="text-3xl font-bold text-blue-600">
                  ₹499
                </h3>

                <button
                  onClick={
                    handlePayment
                  }
                  className="mt-6 w-full rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-medium text-white"
                >
                  Purchase
                  Course
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">

          <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl">

            <h2 className="text-center text-xl font-bold text-gray-900">
              Logout
            </h2>

            <p className="mt-3 text-center text-gray-600">
              Are you sure
              you want to
              logout?
            </p>

            <div className="mt-6 flex gap-3">

              <button
                onClick={() =>
                  setShowLogoutModal(
                    false
                  )
                }
                className="flex-1 rounded-2xl border px-4 py-3 font-medium text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={
                  handleLogout
                }
                className="flex-1 rounded-2xl bg-red-500 px-4 py-3 font-medium text-white hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SidebarItem({
  icon,
  title,
  active = false,
}: any) {
  return (
    <button
      className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {icon}
      {title}
    </button>
  );
}

function StatsCard({
  title,
  value,
}: any) {
  return (
    <div className="rounded-3xl border bg-white p-6 shadow-sm">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h3 className="mt-2 text-3xl font-bold text-gray-900">
        {value}
      </h3>
    </div>
  );
}