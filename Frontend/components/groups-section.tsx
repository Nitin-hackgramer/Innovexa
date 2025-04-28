 'use client';

import { motion } from 'framer-motion';
import { CardContent } from '@/components/ui/card';
import {
  Linkedin,
  PaintRoller,
  Gamepad2,
  Code2,
  Smartphone,
  Palette,
  Video,
  Bot,
  Link,
} from 'lucide-react';

const groups = [
  {
    name: 'Web Development',
    icon: Code2,
    description: 'Frontend, backend, and full-stack development expertise.',
    color: 'text-blue-500',
    link: 'https://chat.whatsapp.com/Jn6rstfF2UH86jZBhM3PjM',
  },
  {
    name: 'App Development',
    icon: Smartphone,
    description: 'Mobile app development for iOS and Android platforms.',
    color: 'text-green-500',
    link: 'https://chat.whatsapp.com/JMybqNOlcmZF6NurIHxZFE',
  },
  {
    name: 'UI/UX Design',
    icon: Palette,
    description: 'User interface and experience design principles.',
    color: 'text-purple-500',
    link: 'https://chat.whatsapp.com/BbnYQYSRQKe5kIdmGbpVeg',
  },
  {
    name: 'Build Connections',
    icon: Linkedin,
    description: 'Networking and collaboration opportunities.',
    color: 'text-red-500',
    link: 'https://chat.whatsapp.com/JE8LMh752jbHaMliM1ETf9',
  },
  {
    name: 'Video Editing',
    icon: Video,
    description: 'Professional video editing and motion graphics.',
    color: 'text-yellow-500',
    link: 'https://chat.whatsapp.com/LNfM3HaoZ2CL1kjHL9wmpx',
  },
  {
    name: 'Graphic Design',
    icon: PaintRoller,
    description: 'Visual storytelling through graphic design.',
    color: 'text-indigo-500',
    link: 'https://chat.whatsapp.com/Ek16S46Tb1TLIvWkE8JyfJ',
  },
  {
    name: 'Game Development',
    icon: Gamepad2,
    description: 'Game development and interactive experiences.',
    color: 'text-cyan-500',
    link: 'https://chat.whatsapp.com/HySw5AJ4ogaJaYmnIxD1Ak',
  },
  {
    name: 'General Discussion',
    icon: Bot,
    description: 'Open forum for all tech-related discussions.',
    color: 'text-orange-500',
    link: 'https://chat.whatsapp.com/BUYgEvBGCTL5Ocef2v2UPd',
  },
];

export default function GroupsSection() {
  return (
    <section id="groups" className="py-20 px-4 bg-muted/50"
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-orange-400 to-purple-600 drop-shadow-md">
            Specialized Groups
          </h2>

          {/* <h2 className="text-3xl md:text-4xl font-bold mb-4">Specialized Groups</h2> */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our tech groups to connect, learn, and grow with like-minded experts.
          </p>
        </motion.div>

        {/* Mobile Layout */}
        <div className="md:hidden overflow-x-auto space-x-4 flex snap-x snap-mandatory px-1 pb-4">
          {groups.map((group) => (
            <motion.div
              key={group.name}
              whileTap={{ scale: 0.95 }}
              className="snap-start min-w-[260px] max-w-[260px] shrink-0 bg-background rounded-xl shadow-md p-4 relative group transition duration-300 ease-out hover:scale-[1.03]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <group.icon className={`h-10 w-10 mb-3 mx-auto ${group.color}`} />
              <h3 className="text-lg font-semibold mb-1 text-center">{group.name}</h3>
              <p className="text-sm text-muted-foreground mb-3 text-center">{group.description}</p>
              <div className="text-center">
                <a
                  href={group.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm inline-flex gap-1 items-center text-indigo-600 hover:text-indigo-800"
                >
                  <Link className="w-4 h-4" /> Join Group
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {groups.map((group) => (
            <motion.div
              key={group.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="p-6 rounded-xl shadow bg-background text-center group relative overflow-hidden transition duration-300 ease-out hover:scale-[1.03]"
            >
              {/* Blue border effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-xl pointer-events-none group-hover:border-blue-500 transition duration-300 ease-out"></div>

              <group.icon className={`h-12 w-12 mb-4 mx-auto ${group.color}`} />
              <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
              <p className="text-muted-foreground mb-3">{group.description}</p>
              <a
                href={group.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800"
              >
                <Link className="w-4 h-4" /> Join Group
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
