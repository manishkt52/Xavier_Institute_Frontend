// components/Newsletter.tsx

"use client";

export default function Newsletter() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-6">
        
        {/* Container */}
        <div className="rounded-3xl border border-gray-200 bg-gray-50 px-8 py-12 md:px-12">
          
          {/* Content */}
          <div className="mx-auto max-w-2xl text-center">
            
            {/* Heading */}
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
              Subscribe to Our Newsletter
            </h2>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Get updates about programs, workshops, events,
              and student opportunities.
            </p>

            {/* Form */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              
              {/* Input */}
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  h-12 flex-1 rounded-xl
                  border border-gray-300
                  bg-white px-4
                  text-sm text-gray-900
                  outline-none transition
                  placeholder:text-gray-400
                  focus:border-blue-500
                "
              />

              {/* Button */}
              <button
                className="
                  h-12 rounded-xl
                  bg-gray-900 px-6
                  text-sm font-medium text-white
                  transition hover:bg-black
                "
              >
                Subscribe
              </button>
            </div>

            {/* Bottom Text */}
            <p className="mt-4 text-sm text-gray-500">
              No spam. Only important updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}