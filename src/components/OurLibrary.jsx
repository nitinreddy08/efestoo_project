import React from "react";
import Image from "next/image";

const OurLibrary = () => {
  return (
    <div className="py-8 bg-gray-100">
      {/* Title and Subtitle */}
      <div className="text-center mb-10 mt-5">
        <h2 className="text-4xl font-bold text-gray-800">Our Library</h2>
        <p className="text-sm text-gray-500 mt-2">
          "Every event tells a story—our library preserves the moments that make
          history."
        </p>
      </div>

      {/* Image Carousel */}
      <div className="flex justify-center items-center space-x-4 mb-10">
        {/* Image 1 */}
        <div className="w-1/4 h-80 rounded-lg overflow-hidden">
          <Image
            src="/dance.jpg"
            alt="Dance Event"
            className="w-full h-full object-cover"
            width={400}
            height={192}
          />
        </div>

        {/* Image 2 */}
        <div className="w-1/4 h-100 rounded-lg overflow-hidden">
          <Image
            src="/anirudg.jpeg"
            alt="Anirudh Concert"
            className="w-full h-full object-cover"
            width={400}
            height={192}
          />
        </div>

        {/* Image 3 */}
        <div className="w-1/4 h-80 rounded-lg overflow-hidden">
          <Image
            src="/esports.jpg"
            alt="Esports Event"
            className="w-full h-full object-cover"
            width={400}
            height={192}
          />
        </div>
      </div>
    </div>
  );
};

export default OurLibrary;
