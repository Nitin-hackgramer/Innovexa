'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Trophy,
  PieChart,
  Briefcase,
  Star,
} from 'lucide-react';

const activities = [
  {
    type: 'Dev of the Week',
    icon: Trophy,
    title: 'Neha Jangid wins Dev of the Week!',
    description: 'Recognized for outstanding contributions to the React Native project.',
    date: '2 days ago',
    badge: 'Achievement',
    badgeColor: 'bg-yellow-500',
  },
  {
    type: 'Poll',
    icon: PieChart,
    title: 'Most Popular Frontend Framework 2025',
    description: 'Cast your vote: React vs Vue vs Angular vs Svelte',
    date: '3 days ago',
    badge: 'Active Poll',
    badgeColor: 'bg-blue-500',
  },
  {
    type: 'Freelance',
    icon: Briefcase,
    title: 'New Project: E-commerce Platform',
    description: 'Looking for experienced full-stack developers. Budget: $5000',
    date: '4 days ago',
    badge: 'Opportunity',
    badgeColor: 'bg-green-500',
  },
  {
    type: 'Challenge',
    icon: Star,
    title: 'Weekly Coding Challenge',
    description: 'Build a responsive dashboard using Tailwind CSS',
    date: '5 days ago',
    badge: 'Challenge',
    badgeColor: 'bg-purple-500',
  },
];

export default function ActivityFeedSection() {
  return (
    <section id="activity" className="py-20 px-4 bg-muted/50">
      <div className="absolute top-0 left-0 w-full h-1">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600"></div>
      </div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-orange-400 to-purple-600 drop-shadow-md">
            Community Activities
          </h2>          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest happenings in our community. From challenges
            to opportunities, there's always something exciting going on!
          </p>
        </motion.div>

        <div className="space-y-6">
          {activities.map((activity) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <div className="transition-transform duration-200 hover:scale-[1.015] active:scale-[0.98]">
                <Card className="shadow-md transition-shadow hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="rounded-full p-2 bg-muted">
                        <activity.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{activity.title}</h3>
                          <div className="relative inline-block">
                            <span
                              className={`absolute animate-ping inline-flex h-full w-full rounded-full ${activity.badgeColor} opacity-75`}
                            />
                            <Badge className={`${activity.badgeColor} text-white relative z-10`}>
                              {activity.badge}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-2">{activity.description}</p>
                        <p className="text-sm text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
