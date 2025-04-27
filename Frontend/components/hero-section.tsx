'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageSquare, ChevronDown } from 'lucide-react';

// Move star data generation to a separate client component or use a useEffect
// to avoid hydration errors
const StarBackground = () => {
  type Star = {
    id: string;
    size: number;
    top: number;
    left: number;
    opacity: number;
    delay: number;
    duration: number;
  };
  
  type FixedStar = {
    id: string;
    size: number;
    top: number;
    left: number;
    opacity: number;
    duration: number;
    delay: number;
  };
  
  type ShootingStar = {
    id: string;
    startPosition: number;
    distance: number;
    duration: number;
    delay: number;
    size: number;
  };
  
  const [stars, setStars] = useState<Star[]>([]);
  const [fixedStars, setFixedStars] = useState<FixedStar[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate stars on client-side to avoid hydration mismatch
    setStars(generateStars(200));
    setFixedStars(generateFixedStars(180));
    setShootingStars(generateShootingStars(8));
  }, []);

  const generateStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `star-${i}`,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.7 + 0.3,
      delay: Math.random() * 3,
      duration: Math.random() * 3 + 2,
    }));
  };

  const generateFixedStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `fixed-star-${i}`,
      size: Math.random() * 1.5 + 0.5,
      top: Math.random() * 100,
      left: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.2,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 5,
    }));
  };

  const generateShootingStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => {
      // Position shooting stars outside the visible area for better entry and exit
      const startPosition = Math.random() * 360; // Random start angle
      const distance = 100 + Math.random() * 40; // Start outside viewport
      const duration = Math.random() * 3 + 3;
      const delay = Math.random() * 8 + i * 2;
      const size = Math.random() * 120 + 80;
      
      return {
        id: `shooting-star-${i}`,
        startPosition,
        distance,
        duration,
        delay,
        size,
      };
    });
  };

  return (
    <>
      {/* Slow rotating starfield */}
      <motion.div
      className="absolute inset-0 -z-10 overflow-hidden"
      animate={{ rotate: 360 }}
      transition={{ 
        repeat: Infinity, 
        ease: 'linear', 
        duration: 180
      }}
      >
      <div className="relative w-full h-full">
        {/* Static stars with subtle twinkling effect */}
        {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
          width: `${star.size}px`,
          height: `${star.size}px`,
          top: `${star.top}%`,
          left: `${star.left}%`,
          opacity: star.opacity,
          }}
          animate={{
          opacity: [star.opacity, star.opacity + 0.5, star.opacity],
          }}
          transition={{
          duration: star.duration,
          repeat: Infinity,
          delay: star.delay,
          ease: "easeInOut",
          }}
        />
        ))}
      </div>
      </motion.div>

      {/* Additional non-rotating static stars for depth */}
        {fixedStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full z-[-5]"
          style={{
          width: `${star.size}px`,
          height: `${star.size}px`,
          top: `${star.top}%`,
          left: `${star.left}%`,
          opacity: star.opacity,
          }}
          animate={{
          opacity: [
            star.opacity,
            star.opacity + 0.2,
            star.opacity,
          ],
          }}
          transition={{
          duration: star.duration,
          repeat: Infinity,
          delay: star.delay,
          ease: "easeInOut",
          }}
        />
        ))}

        {/* Fixed shooting stars that move from right to left */}
        {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{
          top: `${Math.random() * 100}%`,
          left: `-100px`,
          width: `${star.size}px`,
          height: '2px',
          }}
          animate={{
          x: ["-100px", "120vw"],
          opacity: [0, 0.8, 0],
          }}
          transition={{
          duration: star.duration,
          repeat: Infinity,
          repeatDelay: star.delay,
          ease: "easeInOut",
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-white rounded-full" />
        </motion.div>
        ))}
    </>
  );
};

export default function HeroSection() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Deep space background with subtle color gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a0a1a] via-[#151736] to-[#1e1c45]" />

      {/* Star background with client-side rendering */}
      <StarBackground />

      {/* Nebula glow effects for depth */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-1/4 h-1/4 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="w-full max-w-6xl mx-auto text-center z-10 px-4 md:px-8" style={{ opacity: scrollOpacity }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative mb-12 pt-16"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1.2,
              type: 'spring',
              stiffness: 100,
            }}
            className="relative mx-auto w-fit"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          >
            {/* Logo glow animation */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-purple-500/20 to-indigo-500/20 rounded-full blur-xl z-0"
              animate={{
                opacity: [0.4, 0.7, 0.4],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <img
              src="/logo.png"
              alt="Innovexa Logo"
              className="h-28 md:h-36 relative z-10 drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text tracking-tight"
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          Welcome to Innovexa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.2 }
          }}
        >
          🚀 A place where <span className="font-semibold text-purple-400">tech minds</span> connect, grow, and hustle together. Whether you're a code wizard 🧙‍♂️ or a noob on the grind 💻—there's space for you here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            {/* Enhanced button glow with animation */}
            <motion.div 
              className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 via-purple-500 to-indigo-500 rounded-lg blur opacity-60 group-hover:opacity-100"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <Button
              size="lg"
              className="relative bg-[#1d124a] hover:bg-[#271a5e] text-white shadow-xl px-8 py-6 text-lg font-medium border border-purple-500/20"
              onClick={() => window.open("https://chat.whatsapp.com/C8mxw1OQ8sg1nnCv8RpqiL", "_blank")}
            >
              <MessageSquare className="mr-3 h-5 w-5 text-purple-400" />
              <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                Join on WhatsApp Community
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator with enhanced hover effect */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
        whileHover={{ 
          scale: 1.1,
          opacity: 1,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <p className="text-purple-400 text-sm mb-2 font-light tracking-wider uppercase">Discover</p>
          <motion.div
            whileHover={{
              y: 5,
              transition: { duration: 0.2, repeat: Infinity, repeatType: "reverse" }
            }}
          >
            <ChevronDown className="h-6 w-6 text-purple-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}