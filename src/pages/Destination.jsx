import { ArrowRight, GraduationCap } from "lucide-react";
import WhyStudyAbroad from "../components/destination/WhyStudyAbroad";
import FactorsToConsider from "../components/destination/FactorsToConsider";

const destinations = [
  { country: "Australia", landmark: "Sydney Opera House", delay: 0 },
  { country: "UK", landmark: "Big Ben", delay: 100 },
  { country: "USA", landmark: "Statue of Liberty", delay: 200 },
  { country: "Canada", landmark: "CN Tower", delay: 300 },
  { country: "Ireland", landmark: "Custom House", delay: 0 },
  { country: "New Zealand", landmark: "Sky Tower", delay: 100 },
  { country: "Japan", landmark: "Osaka Castle", delay: 200 },
  { country: "Malaysia", landmark: "Petronas Towers", delay: 300 },
];

export default function Destination() {
  return (
    <>
      <section className="py-24 px-6 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header with Decorative Lines */}
          <div className="text-center mb-16 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <GraduationCap className="w-32 h-32 text-blue" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-blue mb-4 relative">
              Study Abroad with <span className="text-gold">PFEC Global</span>
            </h2>
            <p className="text-2xl font-semibold text-gray-800 mb-3">
              Your Trusted Partner for International Education
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your Gateway to World-Class Education – Explore Top Study
              Destinations with PFEC Global
            </p>

            {/* Decorative wavy line */}
            <svg
              className="w-full max-w-2xl mx-auto mt-8 opacity-30"
              viewBox="0 0 800 100"
              fill="none"
            >
              <path
                d="M0 50 Q 200 10, 400 50 T 800 50"
                stroke="#c3a25d"
                strokeWidth="3"
              />
              <path
                d="M0 50 Q 200 90, 400 50 T 800 50"
                stroke="#283e77"
                strokeWidth="2"
              />
            </svg>
          </div>

          {/* Staggered Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {destinations.map((dest, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={dest.delay}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                {/* Image Placeholder (Replace with real images) */}
                <div className="aspect-w-3 aspect-h-4 bg-gradient-to-br from-gray-200 to-gray-400">
                  <div className="bg-gray-300 border-2 border-dashed border-gray-400 rounded-xl w-full h-64 flex items-center justify-center text-gray-600 font-bold">
                    {dest.landmark}
                  </div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold mb-2">
                    Study in{" "}
                    <span className="text-[#c3a25d]">{dest.country}</span>
                  </h3>
                  <button className="flex items-center gap-2 text-white font-medium group/btn mt-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>

                {/* Gold Border Accent on Hover */}
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#c3a25d] rounded-2xl transition-all duration-500 pointer-events-none" />

                {/* Top-left Gold Corner */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 border-[#c3a25d] rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 border-[#c3a25d] rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-3 px-10 py-5 bg-[#283e77] text-white font-bold text-lg rounded-full hover:bg-[#c3a25d] transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Explore All Destinations
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>
      <WhyStudyAbroad />
      <FactorsToConsider />
    </>
  );
}
