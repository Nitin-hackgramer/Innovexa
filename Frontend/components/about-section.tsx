'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Rocket, Sparkles } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const adminProfiles = [
  {
    name: 'Parth Gupta',
    role: 'Community Lead',
    description: 'Senior software architect specializing in cloud infrastructure and DevOps.',
    image: '/prince.png',
    linkedin: 'https://www.linkedin.com/in/parth-gupta-041279323/',
    twitter: 'https://x.com/parthgupta027',
  },
  {
    name: 'Nitin Sharma',
    role: 'Community Lead',
    description: 'Full-stack developer with 8+ years of experience in scaling tech communities.',
    image: '/Nitin1.jpg',
    linkedin: 'https://www.linkedin.com/in/nitin-sharma-a1a1a62ab/',
    twitter: 'https://x.com/NitinSh60345544',
  },
  {
    name: 'Prakash Madhok',
    role: 'Community Lead',
    description: 'Digital strategist focused on community engagement and professional development.',
    image: '/prakash.png',
    linkedin: 'https://www.linkedin.com/in/prakash-madhok-a22406324/',
    twitter: 'https://x.com/prakashmadhok54',
  },
];

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeMobileCard, setActiveMobileCard] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Handle mobile card tap
  const handleCardTap = (index: number) => {
    setActiveMobileCard(activeMobileCard === index ? null : index);
  };

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-muted/50 to-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600"></div>
      </div>
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-orange-400/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-600/10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-2 flex justify-center"
          >
            <Sparkles className="text-orange-400 mr-2" />
            <span className="uppercase tracking-wider text-sm font-medium text-muted-foreground">Leadership Team</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600 drop-shadow-md"
          >
            Meet our Admins
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "120px" } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-1 mx-auto my-4 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full"
          />
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We're a passionate group of tech professionals dedicated to building a collaborative
            community where talent meets opportunity.
          </motion.p>
        </motion.div>

        {/* Mobile Scrollable Admin Cards with Luxury Treatment */}
        <div className="block md:hidden overflow-x-hidden">
          <div 
            ref={scrollRef}
            className="flex space-x-6 px-2 pb-6 snap-x snap-mandatory overflow-x-auto no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {adminProfiles.map((admin, index) => (
              <motion.div
                key={admin.name}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleCardTap(index)}
                className="snap-center shrink-0 w-72 py-4"
                animate={activeMobileCard === index ? { 
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                } : activeMobileCard !== null && activeMobileCard !== index ? {
                  scale: 0.95,
                  opacity: 0.7,
                  transition: { type: "spring", stiffness: 300 }
                } : {
                  scale: 1,
                  opacity: 1,
                  transition: { type: "spring", stiffness: 300 }
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.4 }}
              >
                <Card className="rounded-xl border border-white/10 bg-background/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                  <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500 group-hover:animate-borderPulse z-0"></span>
                  <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
                  <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
                  
                  <CardContent className="p-6 text-center relative z-10">
                    <div className="relative mb-2">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 25px rgba(234, 88, 12, 0.4)"
                        }}
                        className="w-24 h-24 rounded-full mx-auto overflow-hidden relative z-10"
                      >
                        <img
                          src={admin.image}
                          alt={admin.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </motion.div>
                      <div className="absolute inset-0 flex items-center justify-center z-0">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-r from-orange-400/20 via-pink-500/20 to-purple-600/20 blur-md"></div>
                      </div>
                    </div>
                    
                    <motion.h3 
                      whileHover={{ scale: 1.03 }}
                      className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500"
                    >
                      {admin.name}
                    </motion.h3>
                    
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-purple-500/10">
                        {admin.role}
                      </span>
                    </p>
                    
                    <p className="text-sm mb-4 leading-relaxed">{admin.description}</p>
                    
                    <div className="flex justify-center space-x-5 text-xl">
                      <motion.a 
                        href={admin.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-foreground/70 hover:text-blue-500 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaLinkedin />
                      </motion.a>
                      <motion.a 
                        href={admin.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-foreground/70 hover:text-sky-400 transition-colors"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaTwitter />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile navigation dots */}
          <div className="flex justify-center mt-2 gap-2">
            {adminProfiles.map((_, idx) => (
              <motion.button
                key={idx}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-2 h-2 rounded-full ${activeMobileCard === idx ? 'bg-orange-500' : 'bg-gray-300'} transition-all duration-300`}
                onClick={() => handleCardTap(idx)}
              />
            ))}
          </div>
        </div>

        {/* Grid layout for md+ devices with luxury treatment */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-16">
          {adminProfiles.map((admin, index) => (
            <motion.div
              key={admin.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="p-2"
            >
              <Card className="w-full rounded-xl border border-white/10 bg-background/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden h-full">
                <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500 group-hover:animate-borderPulse z-0"></span>
                <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
                <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
                
                {/* Decorative corner elements */}
                <div className="absolute top-0 left-0 w-6 h-6 rounded-br-lg bg-gradient-to-br from-orange-400/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 rounded-tl-lg bg-gradient-to-tl from-purple-500/20 to-transparent"></div>
                
                <CardContent className="p-6 text-center relative z-10">
                  <div className="relative mb-2">
                    <motion.div
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 0 25px rgba(234, 88, 12, 0.4)"
                      }}
                      className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden relative z-10"
                    >
                      <img
                        src={admin.image}
                        alt={admin.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </motion.div>
                    <div className="absolute inset-0 flex items-center justify-center z-0">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-orange-400/20 via-pink-500/20 to-purple-600/20 blur-md"></div>
                    </div>
                  </div>
                  
                  <motion.h3 
                    whileHover={{ scale: 1.03 }}
                    className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500"
                  >
                    {admin.name}
                  </motion.h3>
                  
                  <p className="text-sm font-medium text-muted-foreground mb-2">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-purple-500/10">
                      {admin.role}
                    </span>
                  </p>
                  
                  <p className="text-sm mb-4 leading-relaxed">{admin.description}</p>
                  
                  <div className="flex justify-center space-x-5 text-xl">
                    <motion.a 
                      href={admin.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-foreground/70 hover:text-blue-500 transition-colors"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaLinkedin />
                    </motion.a>
                    <motion.a 
                      href={admin.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-foreground/70 hover:text-sky-400 transition-colors"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaTwitter />
                    </motion.a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Core Values Section with Luxury Treatment */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Users className="h-10 w-10 text-orange-400" />,  // Removed bg-clip-text and text-transparent
              title: 'Community First',
              text: 'Building strong connections within the tech community through collaboration and support.',
            },
            {
              icon: <Target className="h-10 w-10 text-pink-400" />,  // Adjusted for visible gradient colors
              title: 'Focused Growth',
              text: 'Providing targeted opportunities for professional development and skill enhancement.',
            },
            {
              icon: <Rocket className="h-10 w-10 text-purple-400" />,  // Adjusted for visible gradient colors
              title: 'Innovation Drive',
              text: 'Fostering an environment that encourages creative solutions and cutting-edge technology.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
          y: -10,
          boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)",
          transition: { type: "spring", stiffness: 300 },
              }}
              className="text-center p-6 rounded-xl border border-white/10 bg-background/90 backdrop-blur-sm shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500 group-hover:animate-borderPulse z-0"></span>
              <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
              <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

              <div className="relative z-10">
          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: [0, 5, -5, 0],
              transition: { duration: 0.5 },
            }}
            className="mb-4 mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-orange-400/10 to-purple-600/10"
          >
            <div className="flex items-center justify-center h-full">{item.icon}</div>
          </motion.div>

          <motion.h3
            whileHover={{ scale: 1.03 }}
            className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500"
          >
            {item.title}
          </motion.h3>

          <p className="text-gray-600">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
