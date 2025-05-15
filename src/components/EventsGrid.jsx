import React from "react";
import { MapPin, Clock, Heart } from "lucide-react";

const eventsData = [
  {
    event_name: "Sanskriti Utsav 2025",
    location: "NIT Dhanbadh hall",
    registration_deadline: "20 April",
    price: "free",
    image_url: "/Sankranthi.jpg",
  },
  {
    event_name: "Cultural Fest 2025",
    location: "IIT Hyderabad",
    registration_deadline: "15 April",
    price: 200,
    image_url: "/Sankranthi.jpg",
  },
  {
    event_name: "Tech Summit 2025",
    location: "JNTU Auditorium",
    registration_deadline: "10 April",
    price: 400,
    image_url: "/Sankranthi.jpg",
  },
  {
    event_name: "Spring Carnival 2025",
    location: "Osmania University Grounds",
    registration_deadline: "25 April",
    price: "free",
    image_url: "/Sankranthi.jpg",
  },
  {
    event_name: "Music Mania 2025",
    location: "Gachibowli Stadium",
    registration_deadline: "18 April",
    price: 200,
    image_url: "/Sankranthi.jpg",
  },
  {
    event_name: "Art Expo 2025",
    location: "Shilparamam",
    registration_deadline: "22 April",
    price: 400,
    image_url: "/Sankranthi.jpg",
  },
  {
    event_name: "Dance Fiesta 2025",
    location: "NIT Warangal",
    registration_deadline: "12 April",
    price: "free",
    image_url: "/Sankranthi.jpg",
  },
  {
    event_name: "Literary Fest 2025",
    location: "EFLU Campus",
    registration_deadline: "30 April",
    price: 200,
    image_url: "/Sankranthi.jpg",
  },
];

const EventsGrid = () => {
  return (
    <div className="w-full bg-white">
      <div className="bg-white p-6 pt-10 px-20">
        {/* Header */}
        <div className="flex justify-center items-center mb-10 mt-5">
          <h2 className="text-4xl font-bold text-gray-800">
            Events you may like
          </h2>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="relative text-black">
              <input
                type="text"
                placeholder="Search here"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 "
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">
              Free
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">
              Time
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200">
              Highest
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-4 gap-6">
          {eventsData.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              {/* Event Image */}
              <div className="w-full h-40 bg-gray-200">
                <img
                  src={event.image_url}
                  alt={event.event_name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Event Details */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-semibold text-gray-800">
                    {event.event_name}
                  </h3>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      event.price === "free"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {event.price === "free" ? "FREE" : `₹${event.price}`}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Register by: {event.registration_deadline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600">
                    Register now
                  </button>
                  <Heart className="w-5 h-5 text-blue-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Static Pagination */}
        <div className="flex justify-center mt-10 mb-6">
          <nav
            className="inline-flex items-center space-x-2"
            aria-label="Pagination"
          >
            <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200">
              &lt;
            </button>
            <button className="px-3 py-1 rounded-lg bg-blue-500 text-white font-semibold">
              1
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
              2
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
              3
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
              4
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200">
              5
            </button>
            <button className="px-3 py-1 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200">
              &gt;
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default EventsGrid;
