// components/Newsletter.tsx
export default function Newsletter() {
  return (
    <section className="p-10 text-center">
      <h2 className="text-xl font-bold mb-4">
        Sign up for Newsletter
      </h2>
      <input
        type="text"
        placeholder="Your Email"
        className="border px-4 py-2 mr-2"
      />
      <button className="bg-blue-600 text-white px-4 py-2">
        Subscribe
      </button>
    </section>
  );
}