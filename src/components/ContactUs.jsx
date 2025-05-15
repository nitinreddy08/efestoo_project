import React from 'react';
import Image from 'next/image';

const ContactUs = () => {
  return (
    <div className="py-8 bg-[rgb(255,255,255)] pt-0">
      {/* Warning Banner */}
      <div className="bg-yellow-300 text-center py-2 text-sm text-gray-800 font-medium">
        * BE AWARE OF FRAUDULENT EVENTS BEFORE REGISTERING, CHECK CAREFULLY AND
        LOOK FOR THE VERIFICATION BADGE. *
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto flex items-center justify-between py-6">
        {/* Contact Info */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contact us for any query:
          </h2>
          <p className="text-lg text-gray-700">
            Email: <a href="mailto:iitfests@gmail.com" className="underline">iitfests@gmail.com</a>
          </p>
          <p className="text-lg text-gray-700">
            Ph no: <span className="font-medium">(+91) 84730-299</span>
          </p>
        </div>

        {/* Illustration Placeholder */}
        <div className="flex-1 flex justify-center">
          <div className="w-100 h-100 rounded-lg flex items-center justify-center">
            <Image
              src="/contact-illustration.png"
              alt="Contact illustration"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;