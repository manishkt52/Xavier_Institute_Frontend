// components/Events.tsx
const events = [
  {
    title: "Fire & Safety Training",
    date: "July 2025",
  },
  {
    title: "AWS Guest Lecture",
    date: "Jan 2025",
  },
];

export default function Events() {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-6">Latest Events</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((e, i) => (
          <div key={i} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{e.title}</h3>
            <p className="text-gray-500">{e.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}