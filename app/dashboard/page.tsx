// app/dashboard/page.tsx
export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white p-6 hidden md:block">
        <h2 className="text-2xl font-bold mb-10">Student Portal</h2>

        <ul className="space-y-4">
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Dashboard</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Courses</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Assignments</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Results</li>
          <li className="hover:bg-blue-700 p-2 rounded cursor-pointer">Profile</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Welcome, Student 👋</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Courses</h3>
            <p className="text-3xl font-bold text-blue-600">5</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Assignments</h3>
            <p className="text-3xl font-bold text-green-600">3</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-lg font-semibold">Attendance</h3>
            <p className="text-3xl font-bold text-purple-600">92%</p>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <ul className="space-y-3 text-gray-700">
            <li>📘 Submitted Assignment 1</li>
            <li>📝 Attended AWS Lecture</li>
            <li>📊 Viewed Results</li>
          </ul>
        </div>

      </main>
    </div>
  );
}