'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageSquare, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = 1 - Math.min(scrollY / 500, 0.6);
      setScrollOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Enhanced gradient background that aligns with text colors */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0f0921] to-[#1d124a]" />
      
      {/* Enhanced animated background elements that match text gradient */}
      <div className="absolute inset-0 -z-10">
        {/* Redesigned centered premium glow effect */}
        <div className="absolute w-[800px] h-[800px] -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-purple-500/25 to-indigo-500/20 rounded-full blur-3xl opacity-30 animate-pulse duration-8000" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/20 to-orange-400/10 rounded-full blur-3xl opacity-30 animate-pulse duration-6000 delay-1000" />
        </div>
        
        {/* Dynamic accent rings */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 border border-purple-500/10 rounded-full animate-ping duration-8000 opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 border border-orange-400/10 rounded-full animate-ping duration-6000 delay-500 opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 border border-indigo-500/10 rounded-full animate-ping duration-10000 delay-1000 opacity-20" />
        
        {/* Enhanced accent lines with matching colors */}
        <div className="absolute h-px w-1/3 top-20 left-0 bg-gradient-to-r from-transparent to-orange-400/40" />
        <div className="absolute h-px w-1/3 top-20 right-0 bg-gradient-to-l from-transparent to-indigo-500/40" />
        <div className="absolute h-px w-1/3 bottom-20 left-0 bg-gradient-to-r from-transparent to-purple-500/40" />
        <div className="absolute h-px w-1/3 bottom-20 right-0 bg-gradient-to-l from-transparent to-orange-400/40" />
      </div>

      {/* Enhanced subtle line pattern with reduced opacity */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />

      {/* Updated top accent line matching text gradient */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-orange-400/90 via-purple-500/90 to-indigo-500/90" />
      
      <div className="w-full max-w-6xl mx-auto text-center z-10 px-4 md:px-8" style={{ opacity: scrollOpacity }}>
        {/* Logo with enhanced premium animation */}
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
              type: "spring",
              stiffness: 100
            }}
            className="relative mx-auto w-fit"
          >
            {/* Premium logo glow effect matching text gradient */}
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400/20 via-purple-500/30 to-indigo-500/20 rounded-full blur-xl opacity-80 animate-pulse duration-4000" />
            <img
              src="/logo.png"
              alt="Innovexa Logo"
              className="h-28 md:h-36 relative z-10 drop-shadow-2xl"
            />
            {/* Enhanced light beam under logo */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-500/70 to-transparent blur-sm" />
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-orange-400 via-purple-500 to-indigo-500 text-transparent bg-clip-text tracking-tight"
        >
          Welcome to Innovexa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed"
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
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            {/* Premium button glow matching text gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 via-purple-500 to-indigo-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-500" />
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

      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center"
        >
          <p className="text-purple-400 text-sm mb-2 font-light tracking-wider uppercase">Discover</p>
          <ChevronDown className="h-6 w-6 text-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
