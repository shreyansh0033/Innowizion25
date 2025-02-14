import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-6 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-white font-['Orbitron'] text-sm sm:text-base">
            Innowizion'25 - <span className="text-[#ff8329]">Innovate, Inspire, Impact</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
