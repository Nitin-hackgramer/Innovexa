'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Subtle glowing background blur */}
      <div className="absolute -z-10 w-[500px] h-[500px] bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse top-[-100px] left-[50%] -translate-x-1/2" />

      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <img
            src="/logo.png"
            alt="Innovexa Logo"
            className="h-28 md:h-36 mx-auto mb-6 drop-shadow-lg"
          />

          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Welcome to Innovexa
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl mb-8 text-muted-foreground max-w-3xl mx-auto"
          >
            🚀 A place where <span className="font-semibold text-white">tech minds</span> connect, grow, and hustle together. Whether you’re a code wizard 🧙‍♂️ or a noob on the grind 💻—there’s space for you here.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:opacity-90 transition-opacity"
              onClick={() => window.open("https://chat.whatsapp.com/C8mxw1OQ8sg1nnCv8RpqiL", "_blank")}
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Join on WhatsApp Community
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
