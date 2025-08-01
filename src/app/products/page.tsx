"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/lightswind/card";
import { Badge } from "@/components/lightswind/badge";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import Image from "next/image";
import {
  ShoppingCart, BarChart, Users, ShieldCheck, Rocket, ArrowRight, CheckCircle, Star, Zap, User, Mail, Phone, Building, MessageSquare, Send
} from "lucide-react";
import { Boxes } from "@/components/ui/bg-box";
import ProductsHero from "@/components/products-hero";
import { useRouter } from "next/navigation";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";

const products = [
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&crop=center",
    name: "Marketingpro",
    desc: "A comprehensive marketing automation suite to streamline campaigns, track analytics, and boost ROI.",
    features: ["Campaign Automation", "Real-Time Analytics", "Multi-Channel Management"]
  },
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=400&fit=crop&crop=center",
    name: "Aimindflow",
    desc: "AI-powered workflow automation for smarter, faster business processes and decision-making.",
    features: ["AI Workflow Engine", "Smart Integrations", "Process Optimization"]
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center",
    name: "Samvaani",
    desc: "Create original, high-quality music instantly with AI. Samvaani turns your ideas into professional soundtracks in just a few clicks.",
    features: ["Real-Time Chat", "Voice & Video Calls", "End-to-End Encryption"]
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
    name: "School CRM",
    desc: "Comprehensive school management system for student records, attendance, grades, and administrative tasks.",
    features: ["Student Management", "Attendance Tracking", "Grade Management"]
  },
  {
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop&crop=center",
    name: "Ludo Game",
    desc: "Multiplayer online Ludo game with real-time gameplay, chat features, and tournament modes.",
    features: ["Multiplayer Mode", "Real-Time Chat", "Tournament System"]
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop&crop=center",
    name: "Company CRM",
    desc: "Comprehensive customer relationship management system for businesses to manage leads, sales, and customer interactions.",
    features: ["Lead Management", "Sales Pipeline", "Customer Analytics"]
  },
];

const benefits = [
  {
    icon: <CheckCircle className="w-7 h-7 text-green-400" />,
    title: "Boost Productivity",
    desc: "Streamline your workflow and get more done in less time."
  },
  {
    icon: <Star className="w-7 h-7 text-yellow-400" />,
    title: "Intuitive Design",
    desc: "Modern, user-friendly interfaces for a seamless experience."
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-blue-400" />,
    title: "Secure & Reliable",
    desc: "Your data is protected with industry-leading security."
  },
  {
    icon: <Rocket className="w-7 h-7 text-purple-400" />,
    title: "Fast Onboarding",
    desc: "Get started quickly with easy setup and support."
  },
];

const howItWorks = [
  {
    icon: <ShoppingCart className="w-7 h-7 text-blue-400" />,
    title: "Choose Product",
    desc: "Select the product that fits your business needs."
  },
  {
    icon: <BarChart className="w-7 h-7 text-green-400" />,
    title: "Customize & Integrate",
    desc: "Tailor features and integrate with your existing tools."
  },
  {
    icon: <Users className="w-7 h-7 text-pink-400" />,
    title: "Invite Your Team",
    desc: "Add team members and set up roles and permissions."
  },
  {
    icon: <Zap className="w-7 h-7 text-yellow-400" />,
    title: "Launch & Grow",
    desc: "Go live and scale your business with our support."
  },
];

export default function ProductsPage() {
  const router = useRouter();
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    message: ""
  });
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleDemoFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDemoFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...demoFormData,
          email: "demo@example.com", // Default email for demo requests
          message: "Demo request from products page",
          type: "demo"
        }),
      });

      if (response.ok) {
        // Redirect to specific product section
        window.location.href = '#marketingpro';
        setShowDemoForm(false);
        setDemoFormData({ name: "", phone: "" });
      } else {
        throw new Error('Failed to submit demo request');
      }
    } catch (error) {
      console.error('Demo form submission error:', error);
      alert('Failed to submit demo request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/products-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit inquiry');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          product: "",
          message: ""
        });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      alert('Failed to submit inquiry. Please try again.');
    }
  };

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <ProductsHero
        badge="Our Products"
        heading="Discover Our Solutions"
        subheading="Explore our range of innovative products designed to meet your business needs."
        buttonText="Get Demo"
        onButtonClick={() => setShowDemoForm(false)}
      />



      {/* Product List Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              What We Offer
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Our Core Products
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Each product is built for performance, security, and ease of use.
            </p>
          </motion.div>
          <StickyScroll
            content={products.map((product, index) => ({
              title: product.name,
              description: product.desc,
              content: (
                <div id={product.name.toLowerCase().replace(/\s+/g, '')} className="flex flex-col items-center justify-center h-full p-8">
                  <div className="w-48 h-48 mb-8 relative">
                    <Image src={product.image} alt={product.name} fill className="rounded-2xl object-cover bg-neutral-800" />
                  </div>
                  <ul className="flex flex-wrap gap-3 justify-center mt-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="px-4 py-2 bg-neutral-800/80 rounded-full text-sm text-white border border-neutral-700 backdrop-blur-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ),
            }))}
            contentClassName="bg-neutral-900"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-neutral-900/30">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              Why Choose Our Products
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Benefits & Features
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Our products are designed to give you a competitive edge.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <div className="relative group">
                  {/* Moving Border Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 via-green-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt-reverse"></div>

                  <Card className="relative bg-neutral-900/80 border-neutral-700 shadow-xl h-80 w-full flex flex-col items-center p-6 hover:shadow-2xl hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full flex items-center justify-center mb-6 border border-green-500/30 group-hover:border-green-400/50 transition-colors">
                      {/* Animated border around icon */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        {benefit.icon}
                      </div>
                    </div>
                    <CardContent className="flex-1 flex flex-col items-center text-center justify-center px-4">
                      <CardTitle className="text-xl font-bold mb-3 text-white group-hover:text-green-400 transition-colors">{benefit.title}</CardTitle>
                      <CardDescription className="text-neutral-300 text-base leading-relaxed">
                        {benefit.desc}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              How It Works
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Get Started in 4 Easy Steps
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Simple onboarding and fast results.
            </p>
          </motion.div>
          <div className="relative">
            {/* Connecting Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/30 via-yellow-500/30 to-red-500/30 transform -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {howItWorks.map((step, idx) => (
                <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                  <div className="relative group">
                    {/* Moving Border Effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 via-yellow-600 to-red-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-orange-600 to-yellow-600 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt-reverse"></div>

                    <Card className="relative bg-neutral-900/80 border-neutral-700 shadow-xl h-80 w-full flex flex-col items-center p-6 hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300 backdrop-blur-sm">
                      {/* Step Number Badge with Progress Line */}
                      <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg border-2 border-white/20">
                        {idx + 1}
                      </div>

                      {/* Progress Indicator */}
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500/50 to-red-500/50 rounded-full opacity-60"></div>

                      <div className="relative w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center mb-6 border border-orange-500/30 group-hover:border-orange-400/50 transition-colors mt-8">
                        {/* Animated border around icon */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
                        <div className="relative z-10">
                          {step.icon}
                        </div>
                      </div>
                      <CardContent className="flex-1 flex flex-col items-center text-center justify-center px-4">
                        <CardTitle className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">{step.title}</CardTitle>
                        <CardDescription className="text-neutral-300 text-base leading-relaxed">
                          {step.desc}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Progress Bar */}
            <div className="hidden mt-8 mb-4">
              <div className="flex justify-between items-center px-4">
                {howItWorks.map((_, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xs">
                      {idx + 1}
                    </div>
                    {idx < howItWorks.length - 1 && (
                      <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500/50 to-red-500/50 mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Try Our Products?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Contact us for a free demo and see how our products can transform your business.
            </p>
            <MovingBorderButton 
              size="lg" 
              className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white cursor-pointer"
              onClick={() => setShowDemoForm(true)}
            >
              Get Demo
            </MovingBorderButton>
          </motion.div>
        </div>
      </section>

      {/* Demo Form Popup */}
      {showDemoForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-neutral-900/95 border border-neutral-700 rounded-2xl p-8 max-w-md w-full backdrop-blur-xl"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Get Your Free Demo</h3>
              <p className="text-neutral-300">Fill in your details and we'll redirect you to the product demo</p>
            </div>
            
            <form onSubmit={handleDemoSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={demoFormData.name}
                  onChange={handleDemoFormChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={demoFormData.phone}
                  onChange={handleDemoFormChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowDemoForm(false)}
                  className="flex-1 px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-4 py-3 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Submitting...
                    </div>
                  ) : (
                    "Get Demo"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

      {/* CSS Animations for Moving Borders */}
      <style jsx global>{`
        @keyframes tilt {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          75% {
            transform: rotate(-0.5deg);
          }
        }
        
        @keyframes tilt-reverse {
          0%, 50%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(-0.5deg);
          }
          75% {
            transform: rotate(0.5deg);
          }
        }
        
        .animate-tilt {
          animation: tilt 10s infinite linear;
        }
        
        .animate-tilt-reverse {
          animation: tilt-reverse 8s infinite linear;
        }
      `}</style>
    </main>
  );
} 