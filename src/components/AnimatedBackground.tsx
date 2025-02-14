import React from "react";
import { motion } from "framer-motion";
import { CircuitBoard, Brain, Rocket } from "lucide-react";

const AnimatedBackground: React.FC = () => {
  const icons = [
    ...Array(2).fill(CircuitBoard),
    ...Array(2).fill(Brain),
    ...Array(2).fill(Rocket),
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {icons.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Icon
            className="text-[#ff8329] opacity-10"
            size={Math.random() * 30 + 20}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
