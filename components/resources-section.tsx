'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Code, Lightbulb, Video } from 'lucide-react';

const resources = [
  {
    title: 'Basic Web Development',
    type: 'Course',
    level: 'Beginner',
    description: 'Learn HTML CSS & JavaScript from scratch with practical examples.',
    icon: Code,
    link: '#',
  },
  {
    title: 'Advanced TypeScript Patterns',
    type: 'Article',
    level: 'Advanced',
    description: 'Deep dive into TypeScript design patterns.',
    icon: BookOpen,
    link: '#',
  },
  {
    title: 'UI/UX Design Principles',
    type: 'Video',
    level: 'Intermediate',
    description: 'Master the fundamentals of user interface design.',
    icon: Video,
    link: '#',
  },
  {
    title: 'DevOps Best Practices',
    type: 'Guide',
    level: 'Advanced',
    description: 'Comprehensive guide to modern DevOps practices.',
    icon: Lightbulb,
    link: '#',
  },
];

export default function ResourcesSection() {
  const [selectedLevel, setSelectedLevel] = useState('all');

  const filteredResources = selectedLevel === 'all'
    ? resources
    : resources.filter(resource => resource.level.toLowerCase() === selectedLevel);

  return (
    <section id="resources" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-orange-400 to-purple-600 drop-shadow-md">
            Learning Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collection of learning materials, tutorials, and guides
            to enhance your technical skills.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 max-w-[400px] mx-auto">
            <TabsTrigger value="all" onClick={() => setSelectedLevel('all')}>
              All
            </TabsTrigger>
            <TabsTrigger value="beginner" onClick={() => setSelectedLevel('beginner')}>
              Beginner
            </TabsTrigger>
            <TabsTrigger value="intermediate" onClick={() => setSelectedLevel('intermediate')}>
              Intermediate
            </TabsTrigger>
            <TabsTrigger value="advanced" onClick={() => setSelectedLevel('advanced')}>
              Advanced
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <resource.icon className="h-6 w-6" />
                    <Badge>{resource.type}</Badge>
                    <Badge variant="outline">{resource.level}</Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}