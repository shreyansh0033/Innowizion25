import React, { useEffect, useState } from 'react';

interface TextScrambleProps {
  text: string;
  delay?: number;
}

const TextScramble: React.FC<TextScrambleProps> = ({ text, delay = 3000 }) => {
  const [displayText, setDisplayText] = useState(text);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
  const scrambleSpeed = 50;
  const staggerDelay = 100;
  const pauseDuration = 5000; // Exactly 5 seconds pause

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    
    const scrambleText = (index: number, finalChar: string) => {
      let iterations = 0;
      const maxIterations = 10;
      
      const interval = setInterval(() => {
        setDisplayText(prev => {
          return prev.split('').map((char, i) => {
            if (i === index) {
              if (iterations >= maxIterations - 1) {
                clearInterval(interval);
                return finalChar;
              }
              return characters[Math.floor(Math.random() * characters.length)];
            }
            return char;
          }).join('');
        });

        iterations++;
      }, scrambleSpeed);

      timeouts.push(setTimeout(() => clearInterval(interval), scrambleSpeed * maxIterations));
    };

    const startAnimation = () => {
      const runAnimation = () => {
        // Initialize with random characters
        setDisplayText(text.split('').map(() => 
          characters[Math.floor(Math.random() * characters.length)]
        ).join(''));

        // Scramble each character one by one
        text.split('').forEach((char, index) => {
          timeouts.push(setTimeout(() => {
            scrambleText(index, char);
          }, index * staggerDelay));
        });

        // Calculate total animation time
        const totalAnimationTime = (text.length * staggerDelay) + (10 * scrambleSpeed);
        
        // Schedule next animation after exact 5-second pause
        timeouts.push(setTimeout(() => {
          runAnimation();
        }, totalAnimationTime + pauseDuration));
      };

      // Start the initial animation after the specified delay
      timeouts.push(setTimeout(runAnimation, delay));
    };

    startAnimation();

    // Cleanup function
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, [text, delay]); // Dependencies array

  return (
    <span className="font-orbitron relative group">
      {displayText.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-200 animate-glow"
          style={{
            textShadow: '0 0 10px rgba(255,131,41,0.5), 0 0 20px rgba(255,131,41,0.3)',
            animation: `glow 2s ease-in-out infinite alternate ${index * 0.1}s`
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default TextScramble;
