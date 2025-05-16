import React from "react";
import { MapPin, Globe, Facebook, Instagram } from "lucide-react";
import Image from "next/image";

const Landing = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-100">
      <div
        className="w-full relative flex items-center justify-between bg-white shadow-sm py-4 min-h-[300px]"
        style={{
          backgroundImage: "url('/building.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/10 to-transparent z-0" />
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 relative z-10 px-4 sm:px-8 max-w-7xl w-full">
          <div className="flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-wide drop-shadow">
              Indian Institute of Technology
            </h1>
            <div className="flex items-center gap-1 text-gray-600 mt-1 justify-center sm:justify-start">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Hyderabad</span>
            </div>
          </div>
        </div>
        <div className="w-16 h-16 mr-8 z-0 hidden sm:block" />
      </div>

      <div className="w-full flex flex-col sm:flex-row items-center justify-between border-y border-gray-200 bg-white px-4 sm:px-8 py-3 max-w-full">
        <div className="flex flex-wrap gap-6 text-gray-600 text-sm justify-center sm:justify-start w-full sm:w-full">
          <a href="" className="hover:underline uppercase whitespace-nowrap">
            About
          </a>
          <a href="" className="hover:underline uppercase whitespace-nowrap">
            Our Library
          </a>
          <a href="" className="hover:underline uppercase whitespace-nowrap">
            Reviews & Ratings
          </a>
          <a href="" className="hover:underline uppercase whitespace-nowrap">
            Contact us
          </a>
        </div>
        <div className="flex items-center gap-4 mt-3 sm:mt-0">
          <a
            href="nitinreddy-portfolio.vercel.app"
            className="text-blue-600 text-sm flex items-center gap-1 hover:underline uppercase whitespace-nowrap"
          >
            View Website <Globe className="w-4 h-4 inline" />
          </a>
          <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer" />
          <Instagram className="w-5 h-5 text-gray-500 hover:text-pink-500 cursor-pointer" />
        </div>
      </div>

      <div className="w-full flex justify-center mt-16 mb-16 px-4 sm:px-0">
        <div className="w-full max-w-5xl">
          <div className="rounded-lg border border-gray-200 bg-white overflow-hidden">
            <div className="bg-blue-600 bg-[url('/pattern.svg')] bg-cover px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <span>About</span>
              </div>
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
