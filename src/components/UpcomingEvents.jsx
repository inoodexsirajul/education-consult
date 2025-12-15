import React from "react";
import eventimg from "../assets/events/event.jpg";
import { Link } from "react-router";

const events = [
  {
    date: "10",
    day: "Sat",
    month: "JAN",
    time: "10:30 AM",
    title: "PFEC Global: Australia Education Expo Saturday",
    venue: "The Westin Dhaka",
    location: "05:00 PM",
    bannerImage:
      "https://educationtreeglobal.com/wp-content/uploads/2021/12/Rectangle-4263.png", // Promotional banner with Australia theme
  },
  {
    date: "11",
    day: "Sun",
    month: "JAN",
    time: "10:30 AM",
    title: "PFEC Global: Australia Education Expo",
    venue: "The Westin Dhaka",
    location: "05:00 PM",
    bannerImage: eventimg,
  },
  {
    date: "13",
    day: "Tue",
    month: "JAN",
    time: "11:00 AM",
    title: "PFEC Global: Australia Education Expo Saturday...",
    venue: "Radisson Blu Hotel, Chattogram Bay View",
    location: "05:00 PM",
    bannerImage:
      "https://www.shutterstock.com/image-vector/sydney-city-architecture-vector-illustration-260nw-524651185.jpg", // Sydney skyline illustration
  },
];

const UpcomingEvents = () => {
  return (
    <section className="py-12 bg-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-white font-bold text-center mb-10">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Banner Area with Image Background */}
              <div
                className="relative h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.bannerImage})` }}
              >
                {/* Dark overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-[#283e77]/90 to-[#283e77]/70"></div> */}
              </div>

              {/* Details Area */}
              <div className="p-6">
                <Link to="/events/event-details">
                  <h4
                    className="text-xl font-semibold mb-4"
                    style={{ color: "#283e77" }}
                  >
                    {event.title}
                  </h4>
                </Link>
                <div className="space-y-3 text-gray-700">
                  <p className="flex items-center gap-2">
                    <span className="text-blue-800 font-medium">🕒</span>
                    {event.time} – {event.location}
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-800 font-medium">📍</span>
                    Venue: {event.venue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
