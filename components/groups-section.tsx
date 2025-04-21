'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
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
    color: 'https://chat.whatsapp.com/JMybqNOlcmZF6NurIHxZFE',
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
    description: 'Cloud infrastructure and DevOps practices.',
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
    <section id="groups" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Specialized Groups</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our specialized tech groups to connect with experts, share knowledge,
            and collaborate on projects in your field of interest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((group) => (
            <motion.div
              key={group.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative group text-center p-6 rounded-xl border border-border bg-background shadow hover:shadow-xl transition-transform duration-200 ease-in-out overflow-hidden"
            >
              <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500 group-hover:animate-borderFlow z-0"></span>
              <Card className="relative z-10 bg-background">
                <CardContent className="p-6 text-center">
                  <group.icon className={`h-12 w-12 mb-4 ${group.color}`} />
                  <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
                  <p className="text-muted-foreground mb-4">{group.description}</p>
                  <a
                    href={group.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
                  >
                    <Link className="w-4 h-4" /> Join Group
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
