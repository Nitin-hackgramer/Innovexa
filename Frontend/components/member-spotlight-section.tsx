'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideLinkedin } from 'lucide-react';
import { FaTwitter, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const members = [
  {
    name: 'Neha Jangid',
    role: 'Frontend Developer',
    image: '/neha.jpg',
    achievement: 'Led the redesign of a major e-commerce platform',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    linkedin: 'https://www.linkedin.com/in/neha-jangid-79a9b0327/',
    twitter: 'https://twitter.com/nehajangid',
  },
  {
    name: 'Ranjan Kushwaha',
    role: 'UX Designer',
    image: '/ranjan.png',
    achievement: 'Improved user engagement by 40% through UX optimization',
    skills: ['Figma', 'User Research', 'Prototyping'],
    linkedin: 'https://www.linkedin.com/in/ranjan-kumar-b65062323/',
    twitter: 'https://twitter.com/ranjankushwaha',
  },
  {
    name: 'Nivesh Jain',
    role: 'Backend Developer',
    image: '/nivesh.png',
    achievement: 'Built a platform helping professionals focus on work',
    skills: ['React.js', 'Next.js', 'AWS'],
    linkedin: 'https://www.linkedin.com/in/nivesh-jain-523104248/',
    twitter: 'https://twitter.com/niveshjain',
  },
  {
    name: 'Astitva Mishra',
    role: 'Mobile Developer',
    image: '/astitva.png',
    achievement: 'Published apps with 100K+ downloads',
    skills: ['React Native', 'Swift', 'Kotlin'],
    linkedin: 'https://www.linkedin.com/in/astitva-mishra-/',
    twitter: 'https://twitter.com/astitvamishra',
  },
];

export default function MemberSpotlightSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  
  const cardWidth = isDesktop ? 350 : 300;
  const cardGap = 24; // 6 in tailwind units = 24px
  
  // Combined members array for infinite scrolling
  const combinedMembers = [...members, ...members, ...members, ...members, ...members];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const newIndex = direction === 'left' 
        ? Math.max(0, currentIndex - 1) 
        : Math.min(combinedMembers.length - 1, currentIndex + 1);
      
      setCurrentIndex(newIndex);
      
      // Calculate the scroll position to center the card with peeking adjacent cards
      const containerWidth = scrollRef.current.clientWidth;
      const scrollTo = (newIndex * (cardWidth + cardGap)) - ((containerWidth - cardWidth) / 2) + (cardGap / 2);
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: 'smooth'
      });
    }
  };

  // Check if we're on desktop
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    
    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  // Auto scroll on desktop only with improved infinite loop
  useEffect(() => {
    const container = scrollRef.current;
    if (isDesktop && container && !isPaused) {
      let animationId: number;
      let scrollSpeed = 2.5; // Increased speed for faster movement
      
      const autoScroll = () => {
        if (container) {
          container.scrollLeft += scrollSpeed;
          
          // Check if we need to reset to avoid the back-and-forth issue
          if (container.scrollLeft >= container.scrollWidth * 0.75) {
            // Jump back to one-third position to create seamless loop
            container.scrollLeft = container.scrollWidth * 0.25;
          }
          
          animationId = requestAnimationFrame(autoScroll);
        }
      };
      
      animationId = requestAnimationFrame(autoScroll);
      
      return () => {
        cancelAnimationFrame(animationId);
      };
    }
  }, [isDesktop, isPaused]);

  // Handle card tap/click on mobile
  const handleCardTap = (index: number) => {
    if (!isDesktop) {
      setFocusedCard(focusedCard === index ? null : index);
      
      // Center the card
      if (scrollRef.current) {
        const containerWidth = scrollRef.current.clientWidth;
        const scrollTo = (index * (cardWidth + cardGap)) - ((containerWidth - cardWidth) / 2) + (cardGap / 2);
        
        scrollRef.current.scrollTo({
          left: scrollTo,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/50 to-muted/30 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600 drop-shadow-md"
          >
            Members Spotlight
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 mx-auto my-4 bg-gradient-to-r from-orange-400 to-purple-600 rounded-full"
          />
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Meet some of our outstanding community members and their achievements.
          </motion.p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fancy corner decorations */}
          <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-orange-400/30 rounded-tl-lg" />
          <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-purple-500/30 rounded-tr-lg" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-blue-500/30 rounded-bl-lg" />
          <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-orange-400/30 rounded-br-lg" />

          {/* Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:shadow-orange-400/20 hover:bg-background transition-all"
            onClick={() => scroll('left')}
          >
            <FaChevronLeft className="text-orange-500" />
          </motion.button>

          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 no-scrollbar scroll-smooth px-4 py-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {combinedMembers.map((member, index) => (
              <motion.div
                key={`${member.name}-${index}`}
                className="min-w-[300px] lg:min-w-[350px] shrink-0 flex justify-center transform-gpu"
                whileHover={isDesktop ? { 
                  scale: 1.05,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                } : {}}
                animate={focusedCard === index && !isDesktop ? { 
                  scale: 1.08,
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                } : focusedCard !== null && focusedCard !== index && !isDesktop ? {
                  scale: 0.92,
                  opacity: 0.7,
                  filter: "blur(2px)",
                  transition: { type: "spring", stiffness: 300 }
                } : {
                  scale: 1,
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { type: "spring", stiffness: 300 }
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => handleCardTap(index)}
              >
                <Card className="h-full w-full max-w-[300px] lg:max-w-[350px] shadow-md hover:shadow-xl overflow-hidden bg-background/90 backdrop-blur-sm border-t border-white/20 transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-3 relative">
                    {/* Floating decorative elements */}
                    <div className="absolute top-0 left-0 w-6 h-6 rounded-br-lg bg-gradient-to-br from-orange-400/20 to-transparent" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 rounded-tl-lg bg-gradient-to-tl from-purple-500/20 to-transparent" />
                    
                    <div className="relative">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(234, 88, 12, 0.3)"
                        }}
                        className="w-24 h-24 rounded-full mx-auto overflow-hidden relative z-10"
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className="absolute inset-0 flex items-center justify-center z-0">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-r from-orange-400/20 to-purple-600/20 blur-md" />
                      </div>
                    </div>
                    
                    <motion.h3
                      whileHover={{ scale: 1.03 }}
                      className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-purple-500"
                    >
                      {member.name}
                    </motion.h3>
                    
                    <p className="text-muted-foreground">{member.role}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{member.achievement}</p>
                    
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill) => (
                        <Badge key={skill} className="bg-orange-500/10 hover:bg-orange-500/20 text-orange-700 dark:text-orange-300 transition-colors duration-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-center gap-4 mt-2">
                      <motion.a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: 5,
                          color: "#0077B5" 
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <LucideLinkedin className="w-5 h-5 transition-transform" />
                      </motion.a>
                      <motion.a 
                        href={member.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: -5,
                          color: "#1DA1F2" 
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaTwitter className="w-5 h-5 transition-transform" />
                      </motion.a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-md p-3 rounded-full shadow-lg hover:shadow-purple-400/20 hover:bg-background transition-all"
            onClick={() => scroll('right')}
          >
            <FaChevronRight className="text-purple-500" />
          </motion.button>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-2">
          {members.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-2 h-2 rounded-full ${currentIndex % members.length === idx ? 'bg-orange-500' : 'bg-gray-300'} transition-all duration-300`}
              onClick={() => scroll(idx < currentIndex % members.length ? 'left' : 'right')}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
