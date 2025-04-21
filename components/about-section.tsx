'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users2, Target, Rocket } from 'lucide-react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const adminProfiles = [
  {
    name: 'Nitin Sharma',
    role: 'Community Lead',
    description: 'Full-stack developer with 8+ years of experience in scaling tech communities.',
    image: '/Nitin1.jpg',
    linkedin: 'https://www.linkedin.com/in/nitin-sharma-a1a1a62ab/',
    twitter: 'https://x.com/NitinSh60345544',
  },
  {
    name: 'Parth Gupta',
    role: 'Community Lead',
    description: 'Senior software architect specializing in cloud infrastructure and DevOps.',
    image: '/prince.png',
    linkedin: 'https://www.linkedin.com/in/parth-gupta-041279323/',
    twitter: 'https://x.com/parthgupta027',
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
  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're a passionate group of tech professionals dedicated to building a collaborative
            community where talent meets opportunity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {adminProfiles.map((admin) => (
            <motion.div
              key={admin.name}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl border border-border bg-background shadow hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
            >
              <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500 group-hover:animate-borderPulse z-0"></span>
              <Card className="relative z-10 bg-background">
                <CardContent className="p-6 text-center">
                  <img
                    src={admin.image}
                    alt={admin.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-xl font-semibold mb-2">{admin.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{admin.role}</p>
                  <p className="text-sm mb-3">{admin.description}</p>
                  <div className="flex justify-center space-x-4 text-xl">
                    <a href={admin.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                      <FaLinkedin />
                    </a>
                    <a href={admin.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                      <FaTwitter />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[{
            icon: <Users2 className="h-12 w-12 mx-auto mb-4 text-orange-500" />,
            title: 'Community First',
            text: 'Building strong connections within the tech community through collaboration and support.',
          }, {
            icon: <Target className="h-12 w-12 mx-auto mb-4 text-pink-500" />,
            title: 'Focused Growth',
            text: 'Providing targeted opportunities for professional development and skill enhancement.',
          }, {
            icon: <Rocket className="h-12 w-12 mx-auto mb-4 text-purple-600" />,
            title: 'Innovation Drive',
            text: 'Fostering an environment that encourages creative solutions and cutting-edge technology.',
          }].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl border border-border bg-background shadow hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden"
            >
              <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-indigo-500 group-hover:animate-borderPulse z-0"></span>
              <div className="relative z-10">
                {item.icon}
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
