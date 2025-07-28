"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/lightswind/card";
import { Badge } from "@/components/lightswind/badge";
import { Button } from "@/components/lightswind/button";
import { 
  Users, 
  Target, 
  Award, 
  Lightbulb, 
  Globe, 
  Shield, 
  Zap, 
  Heart,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react";
import { Boxes } from "@/components/ui/bg-box";
import ProductsHero from "@/components/products-hero";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Visionary leader with 15+ years in tech innovation",
    skills: ["Strategy", "Leadership", "Innovation"]
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "/logo.png", // Use local image for Sarah Chen
    bio: "Technical architect driving digital transformation",
    skills: ["Architecture", "AI/ML", "Cloud"]
  },
  {
    name: "Marcus Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Creative director crafting exceptional user experiences",
    skills: ["UX/UI", "Branding", "Prototyping"]
  },
  {
    name: "Priya Patel",
    role: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Engineering leader building scalable solutions",
    skills: ["Backend", "DevOps", "Team Leadership"]
  }
];

const values = [
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation First",
    description: "We constantly push boundaries to create cutting-edge solutions that solve real-world problems."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "People Centered",
    description: "Our team and clients are at the heart of everything we do. We build for humans, not just users."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trust & Security",
    description: "We maintain the highest standards of security and transparency in all our operations."
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Impact",
    description: "We create solutions that make a positive difference in communities worldwide."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Speed & Agility",
    description: "We move fast, adapt quickly, and deliver results that exceed expectations."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion Driven",
    description: "We're passionate about technology and its power to transform businesses and lives."
  }
];

const stats = [
  { number: "500+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
  { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
  { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
  { number: "24/7", label: "Support Available", icon: <Zap className="w-6 h-6" /> }
];

export default function AboutPage() {
  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <ProductsHero
        badge="About Bavya Entrprises"
        heading="Building the Future"
        subheading="We're a team of innovators, creators, and problem-solvers dedicated to transforming businesses through cutting-edge technology and exceptional design."
        buttonText={undefined}
      />

      {/* Stats Section */}
      <section className="py-16 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="flex items-center justify-center mb-4 text-blue-400 w-12 h-12 mx-auto bg-blue-900/20 rounded-full">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-400 text-sm lg:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              Our Journey
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              From Vision to Reality
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Founded in 2020, Bavya Entrprises started as a small team with big dreams. Today, we're proud to be at the forefront of digital innovation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-neutral-300">
                      To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                    <p className="text-neutral-300">
                      To be the leading force in digital transformation, creating a future where technology seamlessly enhances human potential and business success.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-neutral-900/50 border-neutral-700 shadow-lg hover:border-blue-500/30 transition-colors">
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-white mb-2">Our Journey Timeline</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Key milestones that shaped our growth
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      <div className="w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
                      <div>
                        <span className="text-sm font-medium text-blue-400">2020</span>
                        <p className="text-sm text-neutral-300">Founded</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-purple-500/10 border border-purple-500/20">
                      <div className="w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
                      <div>
                        <span className="text-sm font-medium text-purple-400">2021</span>
                        <p className="text-sm text-neutral-300">First 100 Clients</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="w-4 h-4 bg-green-500 rounded-full shadow-lg"></div>
                      <div>
                        <span className="text-sm font-medium text-green-400">2022</span>
                        <p className="text-sm text-neutral-300">International Expansion</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-lg"></div>
                      <div>
                        <span className="text-sm font-medium text-yellow-400">2023</span>
                        <p className="text-sm text-neutral-300">AI Innovation Hub</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                      <div className="w-4 h-4 bg-red-500 rounded-full shadow-lg animate-pulse"></div>
                      <div>
                        <span className="text-sm font-medium text-red-400">2024</span>
                        <p className="text-sm text-neutral-300">Future Forward</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              Meet Our Team
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Minds Behind the Magic
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Our diverse team brings together expertise from around the world, united by a shared passion for innovation and excellence.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8, boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)' }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-neutral-900/50 border-neutral-700 overflow-hidden group hover:border-blue-500/40 transition-colors duration-300 shadow-lg">
                  <div className="relative overflow-hidden flex items-center justify-center h-48 bg-neutral-800">
                    <img
                      src={member.image}
                      alt={member.name + ' profile photo'}
                      className="w-28 h-28 object-cover rounded-full border-4 border-neutral-900 shadow-lg group-hover:scale-105 transition-transform duration-300 mx-auto"
                      style={{ marginTop: '1.5rem', marginBottom: '1rem' }}
                    />
                  </div>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                    <p className="text-neutral-300 text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs bg-neutral-800 text-neutral-300">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              Our Values
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              These core values guide every decision we make and every solution we create.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-neutral-900/50 border-neutral-700 h-full group hover:border-blue-500/30 transition-colors shadow-lg">
                  <CardContent className="p-8 flex flex-col items-center text-center mt-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 mb-6 group-hover:bg-blue-500/30 transition-colors border border-blue-500/30">
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        {value.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{value.title}</h3>
                    <p className="text-neutral-300 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their digital presence with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MovingBorderButton size="lg" className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white">
                Get Started
              </MovingBorderButton>
              <MovingBorderButton size="lg" className="bg-neutral-900/60 border-neutral-600 text-neutral-300 hover:bg-neutral-800 hover:border-neutral-500">
                Learn More
              </MovingBorderButton>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 