import React from "react";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Tagline Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/logo_for_footer.png"
                  alt="Efesto Logo"
                  fill
                  className="object-contain"
                />
                
              </div>
              <div>
                    <h3 className="text-xl font-bold text-white mb-2">Efestoo.com</h3>
                </div>
              
            </div>
            <div>
                <h3 className="text-xl font-bold text-green-400 mb-2 mt-8">
                  Looking for your kind of people??
                </h3>
                <p className="text-sm text-gray-300">
                  Efesto has you covered—find your fest, find your tribe
                </p>
              </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Twitter className="w-5 h-5" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <span className="text-gray-300">
                  NIT, Sector 1, Rourkela, Odisha
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-300">+91-9572859261</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-gray-400" />
                <a
                  href="mailto:efesto@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  efesto@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-700">
          {[
            { value: "32K+", label: "Brands trust us" },
            { value: "50K+", label: "Active users" },
            { value: "100+", label: "Events monthly" },
            { value: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl font-bold text-green-400">{stat.value}</p>
              <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Copyright Notice */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
          © 2025 Efesto.com ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
