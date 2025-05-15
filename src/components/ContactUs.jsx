import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="py-8 bg-white pt-0">
      <div className="bg-yellow-300 text-center py-2 text-sm text-gray-800 font-medium">
        * BE AWARE OF FRAUDULENT EVENTS BEFORE REGISTERING, CHECK CAREFULLY AND
        LOOK FOR THE VERIFICATION BADGE. *
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between py-6 px-4 md:px-0 gap-8">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Contact us for any query:
          </h2>
          <p className="text-lg text-gray-700 mb-2">
            Email:{" "}
            <a href="mailto:iitfests@gmail.com" className="underline">
              iitfests@gmail.com
            </a>
          </p>
          <p className="text-lg text-gray-700">
            Ph no: <span className="font-medium">(+91) 84730-299</span>
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-sm rounded-lg flex items-center justify-center">
            <Image
              src="/contact-illustration.png"
              alt="Contact illustration"
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
