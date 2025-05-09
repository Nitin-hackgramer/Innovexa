'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Search, Share2, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Spot an Opportunity',
    description: 'Find freelance projects and opportunities that match your expertise.',
  },
  {
    icon: Share2,
    title: 'Share & Earn',
    description: 'Pass along opportunities to the community and earn referral rewards.',
  },
  {
    icon: CheckCircle2,
    title: 'Success',
    description: 'Community members pick up projects and deliver excellent results.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[93%] h-1">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-500 to-blue-600"></div>
      </div>
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
            How it Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our community thrives on collaboration and shared success. Here's how
            our freelance opportunity sharing system works.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
                )}
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
