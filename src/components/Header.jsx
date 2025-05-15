import React from "react";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-6 py-2 bg-white shadow-sm">
      {/* Left: Logo and Location */}
      <div className="flex items-center gap-4">
        <span className="font-bold text-lg text-black">Efestoo.com</span>
        <div className="flex items-center gap-1 text-gray-600">
          <span className="text-lg">📍</span>
          <select className="bg-transparent outline-none cursor-pointer">
            <option>Hyderabad</option>
            {/* Add more locations as needed */}
          </select>
        </div>
      </div>
      {/* Center: Search Bar */}
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-72 px-4 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-black mr-2"
        />
        <button className="px-4 py-1 rounded-full text-sm bg-blue-600 text-white hover:bg-blue-700">
          search
        </button>
      </div>
      {/* Right: Nav, Bell, Button, Avatar */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-sm text-gray-700 hover:underline">
          My Tickets
        </a>
        <button className="relative">
          <Bell className="w-6 h-6 text-gray-700" />
          {/* Notification dot */}
          <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 border-2 border-white"></span>
        </button>
        <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition">
          + Create event
        </button>
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
          NR
        </div>
      </div>
    </header>
  );
};

export default Header;
