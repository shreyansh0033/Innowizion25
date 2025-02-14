import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

const Contact: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gray-900 py-12 px-4 sm:px-6"
    >
      <AnimatedBackground />

      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="flex items-center justify-center gap-3 mb-8">
          <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff8329]" />
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-['Orbitron']">
            Contact Us
          </h2>
        </div>
        <p className="text-sm sm:text-base text-gray-300 text-center mb-12">
          We'd love to hear from you! Reach out to us for inquiries,
          collaborations, or any assistance—we're here to help.
        </p>

        <div className="space-y-16">
          {/* Contact Information */}
          <div className="flex flex-col space-y-8 sm:space-y-0 sm:flex-row items-center justify-center sm:space-x-8">
            <div className="flex items-center text-white">
              <Mail className="mr-4 text-[#ff8329]" />
              <a
                href="mailto:contact@innowizion.com"
                className="hover:text-[#ff8329] transition-colors text-sm sm:text-base"
              >
                innowizioniicuic@gmail.com
              </a>
            </div>
            <div className="flex items-center text-white">
              <Phone className="mr-4 text-[#ff8329]" />
              <a
                href="tel:+911234567890"
                className="hover:text-[#ff8329] transition-colors text-sm sm:text-base"
              >
                +91 8953811864
              </a>
            </div>
            <div className="flex items-center text-white text-center">
              <MapPin className="mr-4 text-[#ff8329] flex-shrink-0" />
              <a
                href="https://www.google.com/maps/place/MMM+University+of+Technology/@26.7314295,83.4305527,17z/data=!4m6!3m5!1s0x39915ca3e2aa136b:0xc039bdf0211338a9!8m2!3d26.7314295!4d83.4331276!16zL20vMDQ0NWN4?entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base hover:text-[#ff8329] transition-colors"
              >
                MMMUT, Gorakhpur, U.P. (273010)
              </a>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center space-x-4 sm:space-x-8 mt-12">
            <motion.a
              href="https://in.linkedin.com/company/uicmmmut"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
                        border-2 border-[#ff8329] hover:shadow-[0_0_15px_#ff8329]
                        transition-shadow duration-300"
            >
              <Linkedin className="text-white w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/uicmmmut/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
                        border-2 border-[#ff8329] hover:shadow-[0_0_15px_#ff8329]
                        transition-shadow duration-300"
            >
              <Instagram className="text-white w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/uicmmmut"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
                        border-2 border-[#ff8329] hover:shadow-[0_0_15px_#ff8329]
                        transition-shadow duration-300"
            >
              <Facebook className="text-white w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://x.com/uicmmmut"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center
                        border-2 border-[#ff8329] hover:shadow-[0_0_15px_#ff8329]
                        transition-shadow duration-300"
            >
              <svg
                className="text-white w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
