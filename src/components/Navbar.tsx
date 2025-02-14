import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = ["Home", "Events", "Team", "Gallery", "Contact"];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (year: string) => {
    const element = document.getElementById(year);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-gray-900 bg-opacity-90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-white relative">Inspiring</span>
            <span className="text-[#ff8329] relative"> Individuals</span>

            {/* Shimmer effect overlay */}
            <motion.div
              className="absolute inset-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              animate={{
                translateX: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                className="text-white hover:text-[#ff8329] cursor-pointer transition-colors
                         relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                         after:w-0 after:h-[2px] after:bg-[#ff8329] after:transition-all
                         hover:after:w-full font-['Orbitron']"
                activeClass="text-[#ff8329] after:w-full"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-gray-800 rounded-lg
                     transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <div className="container mx-auto px-6 py-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col space-y-4"
              >
                {navItems.map((item) => (
                  <Link
                    key={item}
                    to={item.toLowerCase()}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={handleLinkClick}
                    className="text-white hover:text-[#ff8329] py-2 px-4 rounded-lg
                             hover:bg-gray-800 transition-colors font-['Orbitron']"
                    activeClass="text-[#ff8329] bg-gray-800"
                  >
                    {item}
                  </Link>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
