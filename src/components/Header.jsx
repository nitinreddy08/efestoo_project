import React, { useState } from "react";
import { Bell, Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 md:px-6 py-3 bg-white shadow-sm">
        <div className="flex items-center gap-4 flex-shrink-0">
          <span className="font-bold text-lg text-black whitespace-nowrap">
            Efestoo.com
          </span>
        </div>

        
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1 text-gray-600 whitespace-nowrap">
            <span className="text-lg">📍</span>
            <select className="bg-transparent outline-none cursor-pointer text-sm">
              <option>Hyderabad</option>
            </select>
          </div>

          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="Search"
              className="w-full max-w-sm px-4 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-black mr-2"
            />
            <button className="px-4 py-1 rounded-full text-sm bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap">
              search
            </button>
          </div>

          <a href="#" className="text-sm text-gray-700 hover:underline whitespace-nowrap">
            My Tickets
          </a>
          <button className="relative">
            <Bell className="w-6 h-6 text-gray-700" />
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition whitespace-nowrap">
            + Create event
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm whitespace-nowrap">
            NR
          </div>
        </div>

        <button
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4 border-b border-gray-200">
          <button
            className="p-2 rounded-md text-gray-700 hover:bg-gray-200 focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-6 px-6 pt-6 text-gray-700">
          <div className="flex items-center gap-2">
            <span className="text-lg">📍</span>
            <select className="bg-transparent outline-none cursor-pointer text-sm w-full">
              <option>Hyderabad</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow px-4 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
            <button className="px-4 py-1 rounded-full text-sm bg-blue-600 text-white hover:bg-blue-700 whitespace-nowrap">
              search
            </button>
          </div>

          <a href="#" className="hover:underline whitespace-nowrap">
            My Tickets
          </a>
          <button className="flex items-center gap-2">
            <Bell className="w-6 h-6 text-gray-700" />
            Notifications
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-700 transition whitespace-nowrap w-full text-center">
            + Create event
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold text-sm whitespace-nowrap">
            NR
          </div>
        </nav>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
