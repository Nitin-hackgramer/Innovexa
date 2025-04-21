'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LucideLinkedin } from 'lucide-react';
import { FaTwitter } from 'react-icons/fa';

const members = [
  {
    name: 'Neha Jangid',
    role: 'Frontend Developer',
    image: '/neha.jpg',
    achievement: 'Led the redesign of a major e-commerce platform',
    skills: ['React', 'TypeScript', 'Tailwind CSS'],
    linkedin: 'https://linkedin.com/in/nehajangid',
    twitter: 'https://twitter.com/nehajangid',
  },
  {
    name: 'Ranjan Kushwaha',
    role: 'UX Designer',
    image: '/ranjan.png',
    achievement: 'Improved user engagement by 40% through UX optimization',
    skills: ['Figma', 'User Research', 'Prototyping'],
    linkedin: 'https://linkedin.com/in/ranjankushwaha',
    twitter: 'https://twitter.com/ranjankushwaha',
  },
  {
    name: 'Nivesh Jain',
    role: 'Backend Developer',
    image: '/nivesh.png',
    achievement: 'Built a platform helping professionals focus on work',
    skills: ['React.js', 'Next.js', 'AWS'],
    linkedin: 'https://linkedin.com/in/niveshjain',
    twitter: 'https://twitter.com/niveshjain',
  },
  {
    name: 'Astitva Mishra',
    role: 'Mobile Developer',
    image: '/astitva.png',
    achievement: 'Published apps with 100K+ downloads',
    skills: ['React Native', 'Swift', 'Kotlin'],
    linkedin: 'https://linkedin.com/in/astitvamishra',
    twitter: 'https://twitter.com/astitvamishra',
  },
];

export default function MemberSpotlightSection() {
  return (
    <section className="py-20 px-4 bg-muted/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Member Spotlight</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet some of our outstanding community members and their achievements.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-6"
          animate={{ x: ['0%', '-100%'] }}
          transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
        >
            {[...members, ...members].map((member, index) => (
            <motion.div
              key={`${member.name}-${index}`}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] lg:min-w-[350px]"
            >
              <Card className="h-full shadow-md hover:shadow-lg transition duration-300">
                <CardContent className="p-6">
                <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-center mb-2">{member.role}</p>
                <p className="text-sm mb-3 text-center">{member.achievement}</p>
                <div className="flex flex-wrap gap-2 justify-center mb-3">
                {member.skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
                ))}
                </div>
                <div className="flex justify-center gap-4 mt-4">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <LucideLinkedin className="w-5 h-5 hover:scale-110 hover:text-yellow-500 transition-transform" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" title="Twitter">
                <FaTwitter className="w-5 h-5 hover:scale-110 hover:text-yellow-500 transition-transform" />
                </a>
                </div>
                </CardContent>
              </Card>
            </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}



