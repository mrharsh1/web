"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/lightswind/card";
import { Badge } from "@/components/lightswind/badge";
import { Button } from "@/components/lightswind/button";
import Image from "next/image";
import {
  ShoppingCart, BarChart, Users, ShieldCheck, Rocket, ArrowRight, CheckCircle, Star, Zap
} from "lucide-react";
import { Boxes } from "@/components/ui/bg-box";

const products = [
  {
    image: "https://via.placeholder.com/240x240?text=Marketingpro",
    name: "Marketingpro",
    desc: "A comprehensive marketing automation suite to streamline campaigns, track analytics, and boost ROI.",
    features: ["Campaign Automation", "Real-Time Analytics", "Multi-Channel Management"]
  },
  {
    image: "https://via.placeholder.com/240x240?text=Aimindflow",
    name: "Aimindflow",
    desc: "AI-powered workflow automation for smarter, faster business processes and decision-making.",
    features: ["AI Workflow Engine", "Smart Integrations", "Process Optimization"]
  },
  {
    image: "https://via.placeholder.com/240x240?text=Samvaani",
    name: "Samvaani",
    desc: "A secure, real-time communication platform for seamless team collaboration and messaging.",
    features: ["Real-Time Chat", "Voice & Video Calls", "End-to-End Encryption"]
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
  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <Boxes  />
        {/* If you have a 3D hero, wrap it like this: */}
        {/* <div className="absolute inset-0 z-0 pointer-events-none"><Products3DHero /></div> */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30  pointer-events-none z-10" />
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge variant="secondary" className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
              Our Products
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Tools to Power Your Business
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Discover our suite of innovative products designed to help you grow, collaborate, and succeed.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Request a Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, idx) => (
              <motion.div key={product.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card className="bg-neutral-900/60 border-neutral-700 hover:border-blue-500/30 transition-colors shadow-xl group flex flex-col items-center">
                  <div className="w-32 h-32 mb-6 relative">
                    <Image src={product.image} alt={product.name} fill className="rounded-xl object-cover bg-neutral-800" />
                  </div>
                  <CardHeader className="flex flex-col items-center">
                    <CardTitle className="text-2xl font-semibold mb-2 text-center group-hover:text-blue-400 transition-colors">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-neutral-300 text-center mb-4">
                      {product.desc}
                    </CardDescription>
                    <ul className="flex flex-wrap gap-2 justify-center">
                      {product.features.map((feature, i) => (
                        <li key={i} className="px-3 py-1 bg-neutral-800 rounded-full text-xs text-neutral-300 border border-neutral-700">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((benefit, idx) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card className="bg-neutral-900/60 border-neutral-700 shadow group flex flex-col items-center">
                  <div className="mb-4">{benefit.icon}</div>
                  <CardContent className="flex-1 flex flex-col items-center">
                    <CardTitle className="text-xl font-semibold mb-2 text-center group-hover:text-blue-400 transition-colors">{benefit.title}</CardTitle>
                    <CardDescription className="text-neutral-300 text-center">
                      {benefit.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {howItWorks.map((step, idx) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card className="bg-neutral-900/60 border-neutral-700 shadow group flex flex-col items-center">
                  <div className="mb-4">{step.icon}</div>
                  <CardContent className="flex-1 flex flex-col items-center">
                    <CardTitle className="text-xl font-semibold mb-2 text-center group-hover:text-blue-400 transition-colors">{step.title}</CardTitle>
                    <CardDescription className="text-neutral-300 text-center">
                      {step.desc}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Get a Free Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 