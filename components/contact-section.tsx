'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const whatsappMessage = `Name: ${form.name}\nEmail: ${form.email}\nMessage: ${form.message}`;
    const encodedMsg = encodeURIComponent(whatsappMessage);

    window.open(`https://wa.me/919968358455?text=${encodedMsg}`, '_blank');
    setTimeout(() => window.open(`https://wa.me/917817060887?text=${encodedMsg}`, '_blank'), 1000);

    const mailtoLink = `mailto:nitinkumar12082005@gmail.com?subject=Community Inquiry from ${form.name}&body=${encodedMsg}`;
    window.open(mailtoLink, '_blank');
  };

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-orange-400 to-purple-600 drop-shadow-md">
            Get in Touch
          </h2>          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community or reach out to us with any questions. We're here
            to help you connect and grow in the tech industry.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Join Our Community</h3>
                <p className="text-muted-foreground mb-6">
                  Connect with fellow tech professionals, share opportunities,
                  and stay updated with the latest industry trends.
                </p>
                <div className="space-y-4">
                  {[
                    {
                      href: "https://chat.whatsapp.com/C8mxw1OQ8sg1nnCv8RpqiL",
                      text: "Join on WhatsApp Community",
                    },
                    {
                      href: "https://www.whatsapp.com/channel/0029Vb5xPBxJZg40EFGWkT32",
                      text: "Join on WhatsApp Channel",
                    },
                  ].map(({ href, text }, index) => (
                    <motion.div
                      key={index}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                        <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full h-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white text-lg py-2 px-4 rounded-md shadow-md hover:shadow-lg transition-all"
                        >
                        <MessageSquare className="mr-2 h-5 w-5" />
                        {text}
                        </a>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full transition-all hover:shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                  <Input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="min-h-[120px]"
                    required
                  />
                  <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                    <Button type="submit" className="w-full">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
