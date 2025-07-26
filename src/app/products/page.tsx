"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/lightswind/card";
import { Badge } from "@/components/lightswind/badge";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import Image from "next/image";
import {
  ShoppingCart, BarChart, Users, ShieldCheck, Rocket, ArrowRight, CheckCircle, Star, Zap
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
  const router = useRouter();

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <ProductsHero
        badge="Contact Us"
        heading="Get in Touch"
        subheading="We'd love to hear from you. Reach out for a quote or any questions."
        buttonText="Contact Now"
        onButtonClick={() => router.push('/contact')}
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
             content={products.map((product) => ({
               title: product.name,
               description: product.desc,
               content: (
                 <div className="flex flex-col items-center justify-center h-full p-8">
                   <div className="w-48 h-48 mb-8 relative">
                     <Image src={product.image} alt={product.name} fill className="rounded-2xl object-cover bg-neutral-800" />
                   </div>
                   <ul className="flex flex-wrap gap-3 justify-center mt-6">
                     {product.features.map((feature, i) => (
                       <li key={i} className="px-4 py-2 bg-neutral-800 rounded-full text-sm text-white border border-neutral-700">
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
                <Card className="bg-neutral-900/60 border-neutral-700 shadow group h-full flex flex-col items-center p-6">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 border border-blue-500/30">
                    {benefit.icon}
                  </div>
                  <CardContent className="flex-1 flex flex-col items-center text-center">
                    <CardTitle className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{benefit.title}</CardTitle>
                    <CardDescription className="text-neutral-300 text-base leading-relaxed">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, idx) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card className="bg-neutral-900/60 border-neutral-700 shadow group h-full flex flex-col items-center p-6">
                  <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6 border border-blue-500/30">
                    {step.icon}
                  </div>
                  <CardContent className="flex-1 flex flex-col items-center text-center">
                    <CardTitle className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">{step.title}</CardTitle>
                    <CardDescription className="text-neutral-300 text-base leading-relaxed">
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
            <MovingBorderButton size="lg" className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white">
              Get Demo
            </MovingBorderButton>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 