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
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
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
      <section className="relative overflow-hidden">
        <Boxes />
        {/* If you have a 3D hero, wrap it like this: */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none"><About3DHero /></div> */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30  pointer-events-none z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-24 lg:py-32">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
              About Bhaviya
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Building the Future
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              We're a team of innovators, creators, and problem-solvers dedicated to transforming businesses through cutting-edge technology and exceptional design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Our Story
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-neutral-600 text-neutral-300 hover:bg-neutral-800">
                Meet Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
                <div className="flex items-center justify-center mb-4 text-blue-400">
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
              Founded in 2020, Bhaviya started as a small team with big dreams. Today, we're proud to be at the forefront of digital innovation.
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
              <Card className="bg-neutral-900/50 border-neutral-700">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-neutral-400">2020 - Founded</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-neutral-400">2021 - First 100 Clients</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-neutral-400">2022 - International Expansion</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm text-neutral-400">2023 - AI Innovation Hub</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-neutral-400">2024 - Future Forward</span>
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
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-neutral-900/50 border-neutral-700 overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-blue-400 text-sm mb-3">{member.role}</p>
                    <p className="text-neutral-300 text-sm mb-4">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
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
                <Card className="bg-neutral-900/50 border-neutral-700 h-full group hover:border-blue-500/30 transition-colors">
                  <CardContent className="p-8">
                    <div className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
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
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Your Journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-neutral-600 text-neutral-300 hover:bg-neutral-800">
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 