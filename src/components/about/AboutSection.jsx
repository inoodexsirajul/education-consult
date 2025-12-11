import React from "react";
import aboutimg from "../../assets/about/about2.webp";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold text-blue mb-6 font-mont leading-1">
                Who are we?
              </h2>
              <div className="w-24 h-1 bg-gold rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p className="font-mont">
                Our journey started with a single office in{" "}
                <span className="font-semibold text-blue">
                  2006 in Melbourne, Australia
                </span>
                and since then we have expanded to different geographies —
                Sydney, Adelaide and Perth in Australia, Dhaka and Chattogram
                offices in Bangladesh, and Ahmedabad & Kolkata offices in India
                and Colombo office in Sri Lanka.
              </p>
              <p className="font-mont">
                Our multiplied growth across these segments is a testimony to
                our commitment to professionalism, persistent hard work, as well
                as efficient and effective teamwork.
              </p>

              <div className="bg-blue-50 border-l-4 border-gold pl-6 py-4">
                <p className="text-blue font-semibold text-xl font-mont">
                  At present, INSAF Immigration represents over
                  <span className="text-gold">
                    550 educational institutions
                  </span>{" "}
                  globally.
                </p>
              </div>

              <div>
                <p className="font-medium text-blue mb-3 font-mont">
                  Our partners include:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    "Renowned universities",
                    "TAFEs",
                    "Colleges and tertiary schools all across the world.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-gold rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-lg font-semibold text-blue font-mont">
                Since 2006, PFEC Global has helped realize the dreams of{" "}
                <span className="text-gold">22,000+ students</span> from
                different nationalities with the help of our partners.
              </p>
            </div>
          </div>

          {/* Right Column - ICEF Badge + Visual Emphasis */}
          <div className="flex flex-col items-center justify-center space-y-10">
            {/* ICEF Accredited Badge */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-blue to-gold rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700"></div>

              <div className="relative bg-white p-10 rounded-3xl shadow-2xl border-4 border-blue">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue uppercase tracking-wider">
                    ICEF Accredited
                  </h3>
                  <div className="mt-6 w-48 h-48 mx-auto">
                    <img
                      src={aboutimg}
                      alt="ICEF Agency Status Badge #2660"
                      className="w-full h-full object-contain drop-shadow-lg"
                    />
                  </div>
                  <div className="mt-6">
                    <p className="text-4xl font-black text-blue">#2660</p>
                    <p className="text-lg font-bold text-gold uppercase tracking-wider">
                      Trusted Agency
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Highlight */}
            <div className="text-center bg-blue text-white p-8 rounded-2xl shadow-xl max-w-md">
              <p className="text-5xl font-black text-gold">22,000+</p>
              <p className="text-xl font-semibold mt-2">
                Students Placed Worldwide
              </p>
              <p className="text-sm mt-3 opacity-90">
                Since 2006 • Trusted by Thousands
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
