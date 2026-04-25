// components/Partners.tsx
import Image from "next/image";

export default function Partners() {
  const partners = [
    "/Images/image_1.jpg",
    "/Images/image_2.jpg",
    "/Images/image_3.png",
  ];

  return (
    <section className="bg-gray-100 p-10 text-center">
      <h2 className="text-2xl font-bold mb-6 text-black">Our Partners</h2>

      <div className="flex justify-center gap-8 flex-wrap items-center">
        {partners.map((src, i) => (
          <div
            key={i}
            className="flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`Partner ${i + 1}`}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}