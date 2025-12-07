import React from "react";
import { MapPin, Phone, Building2 } from "lucide-react";

const offices = [
  {
    area: "Dhanmondi",
    address:
      "SIMA Blossom (5th Floor) Plot 390 (Old), 03 (New), Road-27 (Old) 16, New, Dhaka 1209, Bangladesh",
    phone: "+880 9609 80 03 00",
    tel: "tel:+8809609800300",
  },
  {
    area: "Banani",
    address:
      "PSR Tower (7th Floor), House no. 50, Block C, Rd No 11, Banani, Dhaka 1213",
    phone: "+880 9609 80 07 00",
    tel: "tel:+8809609800700",
  },
  {
    area: "Chattogram",
    address:
      "5th floor, Equity Centrium, Q R Nizam Road, GEC Circle, Chattogram",
    phone: "+880 9609 80 04 00",
    tel: "tel:+8809609800400",
  },
  {
    area: "Uttara",
    address:
      "Level 8, RM Plaza, 20 Sonargaon Jonopath Road, Sector 11, Dhaka 1230",
    phone: "+880 9609 80 05 00",
    tel: "tel:+8809609800500",
  },
];

const OfficeLocations = () => {
  return (
    <section className="py-20 lg:py-28 bg-linear-to-b from-white via-[#283e77]/5 to-white">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-5xl font-bold text-blue mb-4">
            PFEC Global{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c3a25d] to-[#d4b86b]">
              Offices in Bangladesh
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Visit any of our 4 conveniently located branches across the country
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {offices.map((office, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl 
                transition-all duration-500 border border-gray-100 hover:border-gold/50
                p-4 text-center cursor-pointer overflow-hidden"
            >
              {/* Golden Shine Effect */}
              <div
                className="absolute inset-0 bg-linear-to-r from-transparent via-[#c3a25d]/10 to-transparent 
                -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
              />

              {/* Location Pin */}
              <div
                className="inline-flex p-5 rounded-full bg-gradient-to-br from-[#283e77] to-[#1e2d5a] text-white mb-6 
                shadow-xl group-hover:from-[#c3a25d] group-hover:to-[#d4b86b] transition-all duration-500"
              >
                <MapPin className="w-10 h-10" />
              </div>

              {/* Area Name */}
              <h3 className="text-2xl font-bold text-[#283e77] mb-4 group-hover:text-[#c3a25d] transition-colors duration-500">
                {office.area}
              </h3>

              {/* Address */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {office.address}
              </p>

              {/* Phone */}
              <a
                href={office.tel}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#283e77] text-white font-bold 
                  shadow-lg hover:bg-[#c3a25d] hover:shadow-[#c3a25d]/30 transition-all duration-500 hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                {office.phone}
              </a>

              {/* Bottom Gold Line */}
              <div
                className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c3a25d] to-transparent 
                scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center"
              />
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 text-[#283e77] text-lg font-semibold">
            <Building2 className="w-8 h-8 text-[#c3a25d]" />
            <span>4 Branches • Serving Students Nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
