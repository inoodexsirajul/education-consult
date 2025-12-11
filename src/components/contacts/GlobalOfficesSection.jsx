"use client";

import React, { useState } from "react";
import { MapPin, Phone, Calendar } from "lucide-react";

const offices = [
  {
    id: "1",
    country: "Bangladesh",
    city: "Dhanmondi",
    address:
      "SIMA Blossom (5th Floor) Plot 390 (Old), 03 (New), Road-27 (Old) 16, New, Dhaka 1209, Bangladesh",
    phone: "+880 9609 80 03 00",
  },
  {
    id: "2",
    country: "Bangladesh",
    city: "Banani",
    address:
      "RSR Tower (7th Floor), House no. 50, Block C, Rd No. 11, Banani, Dhaka 1213",
    phone: "+880 9609 80 07 00",
  },
  {
    id: "3",
    country: "Bangladesh",
    city: "Chattogram",
    address:
      "5th floor, Equity Centrium, O R Nizam Road, GEC Circle, Chattogram",
    phone: "+880 9609 80 04 00",
  },
  {
    id: "4",
    country: "Bangladesh",
    city: "Uttara",
    address:
      "Level 8, RM Plaza, 20 Sonargaon Jonopath Road, Sector 11, Dhaka 1230",
    phone: "+880 9609 80 05 00",
  },
  {
    id: "5",
    country: "Australia",
    city: "Melborne",
    address:
      "Level 8, RM Plaza, 20 Sonargaon Jonopath Road, Sector 11, Dhaka 1230",
    phone: "+880 9609 80 05 00",
  },
  {
    id: "6",
    country: "India",
    city: "Mumbai",
    address:
      "Level 8, RM Plaza, 20 Sonargaon Jonopath Road, Sector 11, Dhaka 1230",
    phone: "+880 9609 80 05 00",
  },
  {
    id: "7",
    country: "India",
    city: "Delhi",
    address:
      "Level 8, RM Plaza, 20 Sonargaon Jonopath Road, Sector 11, Dhaka 1230",
    phone: "+880 9609 80 05 00",
  },
];

const countries = ["Bangladesh", "Australia", "India", "Sri Lanka"];

export default function GlobalOfficesSection() {
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");

  const filteredOffices = offices.filter(
    (office) => office.country === selectedCountry
  );

  return (
    <>
      <section className="py-16 px-6 bg-gradient-to-b from-gold/30 to-gold/80">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-4xl font-bold text-[#283e77] mb-4">
              Our Services can be Availed in 4 Countries
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto font-mont">
              Pick a country and get the details to connect with our team
              located near you.
            </p>
          </div>

          {/* Country Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {countries.map((country) => (
              <button
                key={country}
                onClick={() => setSelectedCountry(country)}
                className={`px-6 py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 flex items-center gap-2 shadow-md ${
                  selectedCountry === country
                    ? "bg-[#283e77] text-white shadow-xl scale-105"
                    : "bg-white text-[#283e77] hover:bg-[#283e77] hover:text-white border-2 border-[#283e77]"
                }`}
              >
                <span
                  className={`fi fi-${
                    country === "Bangladesh"
                      ? "bd"
                      : country === "Australia"
                      ? "au"
                      : country === "India"
                      ? "in"
                      : "lk"
                  } fis`}
                ></span>
                {country}
              </button>
            ))}
          </div>

          {/* Office Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredOffices.length > 0 ? (
              filteredOffices.map((office) => (
                <div
                  key={office.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
                >
                  <div className="p-8">
                    {/* City Name */}
                    <h3 className="text-2xl font-bold text-[#283e77] mb-4 group-hover:text-[#c3a25d] transition-colors">
                      {office.city}
                    </h3>

                    {/* Address */}
                    <div className="flex items-start gap-3 mb-4 text-gray-600">
                      <MapPin className="w-5 h-5 text-[#c3a25d] mt-1 flex-shrink-0" />
                      <p className="text-sm leading-relaxed">
                        {office.address}
                      </p>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3 mb-6 text-gray-700">
                      <Phone className="w-5 h-5 text-[#c3a25d]" />
                      <a
                        href={`tel:${office.phone.replace(/[^0-9+]/g, "")}`}
                        className="font-medium hover:text-[#283e77] transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-gradient-to-r from-[#c3a25d] to-[#d4b86a] text-white font-semibold py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group">
                      <Calendar className="w-5 h-5" />
                      Schedule a Virtual Meeting
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <p className="text-xl text-gray-500">
                  Offices coming soon in {selectedCountry}!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
