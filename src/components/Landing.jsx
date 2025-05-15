import React from "react";
import { MapPin, Globe, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-100 ">
      {/* Header Image Section with background */}
      <div
        className="w-full relative flex items-center justify-between bg-white shadow-sm py-4 min-h-[260px]"
        style={{
          backgroundImage: "url('/building.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Strong white and blur on left, both decrease gradually and end at 60% */}
        <div
          className="absolute inset-y-0 left-0 z-0 pointer-events-none"
          style={{ width: "60%" }}
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(255,255,255,255) 0%, rgb(255,255,255) 20%, rgba(255,255,255,255) 40%, rgba(255,255,255,0.85) 55%, rgba(255,255,255,0.60) 100%)",
              maskImage:
                "linear-gradient(90deg, black 0%, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(90deg, black 0%, black 85%, transparent 100%)",
            }}
          />
        </div>
        {/* Right half: dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent z-0" />
        {/* Left: Logo and Info */}
        <div className="flex items-center gap-4 relative z-10 px-8">
          {/* Logo */}
          <Image src="/logo.png" alt="Logo" width={150} height={150} />
          <div>
            <h1 className="text-xl font-bold text-gray-800 uppercase tracking-wide drop-shadow">
              Indian Institute of Technology
            </h1>
            <div className="flex items-center gap-1 text-gray-600 mt-1">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Hyderabad</span>
            </div>
          </div>
        </div>
        {/* Right: Empty for spacing/alignment */}
        <div className="w-16 h-16 mr-8 z-0" />
      </div>

      {/* Navigation Bar */}
      <div className="w-full flex items-center justify-between border-y border-gray-200 bg-white px-8 py-3">
        <div className="flex gap-6 text-gray-600 text-sm">
          <a href="#" className="hover:underline uppercase">
            About
          </a>
          <a href="#" className="hover:underline uppercase">
            Our Library
          </a>
          <a href="#" className="hover:underline uppercase">
            Reviews & Ratings
          </a>
          <a href="#" className="hover:underline uppercase">
            Contact us
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-blue-600 text-sm flex items-center gap-1 hover:underline uppercase"
          >
            View Website <Globe className="w-4 h-4 inline" />
          </a>
          <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer" />
          <Instagram className="w-5 h-5 text-gray-500 hover:text-pink-500 cursor-pointer" />
        </div>
      </div>

      {/* About Section */}
      <div className="w-full flex justify-center mt-16 mb-16">
        <div className="w-[90%]">
          <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
            {/* Blue patterned background */}
            <div className="bg-blue-600 bg-[url('/pattern.svg')] bg-cover px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <span>About</span>
              </div>
              {/* Small logo */}
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/small-logo.jpg"
                  alt="Small Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
            </div>
            {/* Description */}
            <div className="px-6 py-4 text-gray-700 text-sm">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-black">
                  Hyderabad
                </span>
              </div>
              <div className="text-gray-600 leading-relaxed">
                My Music My Country proudly presents Anirudh Ravichander, the
                musical sensation behind chart-topping hits like Vaathi Coming,
                Arabic Kuthu, and the Leo Anthem, in a spectacular live concert
                organized by Hyderabad Talkies! Get ready for an electrifying
                night as Anirudh, one of India's most celebrated music composers
                and singers, takes the stage for an unforgettable performance!
                Known for his high-energy beats and soul-stirring melodies, this
                concert promises an experience like never before.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
