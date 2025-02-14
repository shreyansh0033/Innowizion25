import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import universityLogo from "/src/assets/logos/university-logo.png";
import iicLogo from "/src/assets/logos/iic-logo.png";
import uicLogo from "/src/assets/logos/uic-logo.png";
import sponsorLogo from "/src/assets/logos/sponsor-logo.png";
import WhatsAppButton from "./WhatsAppButton";
import TextScramble from "./TextScramble";

const Home: React.FC = () => {
  const [daysToGo, setDaysToGo] = useState<string>("");
  const { scrollY } = useScroll();

  // Create transform values for fade out and movement effect
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const titleY = useTransform(scrollY, [0, 300], [0, -100]);
  const taglineY = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const calculateDaysToGo = () => {
      const eventStart = new Date("2025-02-27");
      const eventEnd = new Date("2025-03-02");
      const today = new Date();

      if (today >= eventStart && today <= eventEnd) {
        setDaysToGo("Fest is Live!");
      } else if (today < eventStart) {
        const diffTime = Math.abs(eventStart.getTime() - today.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        setDaysToGo(`${diffDays} Days to Go!`);
      } else if (today > eventEnd) {
        setDaysToGo("Thank you for joining!");
      }
    };

    calculateDaysToGo();
  }, []);

  return (
    <>
      <section
        id="home"
        className="min-h-screen relative overflow-hidden bg-gray-900"
      >
        {/* Keep only the gradient background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,131,41,0.24),transparent_50%)]" />
        </div>

        {/* Main Content */}
        <div className="container mx-auto relative z-10 flex flex-col items-center justify-center min-h-screen pt-16">
          <motion.h1
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ y: titleY, opacity }}
            transition={{
              duration: 1,
              type: "spring",
              bounce: 0.5,
            }}
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 8px rgb(255,131,41)",
            }}
            className="font-orbitron text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-2 cursor-pointer"
          >
            <TextScramble text="INNOWIZION" />
            <span className="text-[#ff8329]">
              <TextScramble text="'25" delay={4000} />
            </span>
          </motion.h1>

          {/* Updated Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ y: taglineY, opacity }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 italic"
          >
            "annual innovation fest"
          </motion.p>

          {/* Container for Logos, Sponsor, and Date */}
          <div className="flex flex-col items-center mt-16">
            {/* Logos */}
            <div className="flex space-x-8 md:space-x-12">
              {[
                {
                  src: universityLogo,
                  alt: "University Logo",
                  href: "https://www.mmmut.ac.in/",
                },
                {
                  src: iicLogo,
                  alt: "IIC Logo",
                  href: "https://iic.mic.gov.in/",
                },
                {
                  src: uicLogo,
                  alt: "UIC Logo",
                  href: "https://www.instagram.com/uicmmmut/",
                },
              ].map((logo) => (
                <motion.div
                  key={logo.alt}
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gray-800 flex items-center justify-center
                              border-2 border-[#ff8329] hover:shadow-[0_0_15px_#ff8329]
                              transition-shadow duration-300 overflow-hidden p-2"
                >
                  <a
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-full object-contain"
                    />
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Sponsor Section */}
            <div className="flex flex-col items-center mt-8">
              <motion.a 
                href="https://www.instagram.com/terai_gorakhpur?igsh=MXh4OWRjbXhvc2s4eg==" 
                target="_blank" 
                rel="noopener noreferrer"
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ 
                  scale: 1.1,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-32 md:w-48">
                  <img
                    src={sponsorLogo}
                    alt="Sponsor Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.a>
              <motion.div
                className="text-sm relative overflow-hidden font-['Orbitron']"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 1.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <span className="text-white relative">Our</span>
                <span className="text-[#ff8329] relative"> Sponsor</span>

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
            </div>

            {/* Fest Dates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 text-center relative h-12"
            >
              <motion.div
                animate={{
                  opacity: [1, 0, 0, 1],
                  transition: {
                    duration: 8,
                    times: [0, 0.35, 0.65, 1],
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
                className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium"
              >
                <span className="text-[#ff8329]">27</span> Feb –{" "}
                <span className="text-[#ff8329]">2</span> March
              </motion.div>

              <motion.div
                animate={{
                  opacity: [0, 1, 1, 0],
                  transition: {
                    duration: 8,
                    times: [0, 0.35, 0.65, 1],
                    repeat: Infinity,
                    repeatDelay: 1.5,
                    ease: [0.4, 0, 0.2, 1],
                  },
                }}
                className="text-lg md:text-xl lg:text-2xl font-medium italic absolute top-0 left-0 right-0"
              >
                {daysToGo.includes("Days") ? (
                  <>
                    <span className="text-[#ff8329]">
                      {daysToGo.split(" ")[0]}
                    </span>
                    <span className="text-gray-300"> Days to Go!</span>
                  </>
                ) : (
                  <span className="text-gray-300">{daysToGo}</span>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <WhatsAppButton channelLink="https://whatsapp.com/channel/0029ValhY7V1dAw1FPIlSU2n" />
    </>
  );
};

export default Home;
