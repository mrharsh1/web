"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Facebook, Twitter, Linkedin, Instagram, Send, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Environment, OrbitControls } from "@react-three/drei";
import { Boxes } from "@/components/ui/bg-box";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import ProductsHero from "@/components/products-hero";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/lightswind/card";
import { FaMapMarkerAlt } from "react-icons/fa";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "support@bavyaentrprises.com" },
  { icon: Phone, label: "Phone", value: "+91 90262 23490" },
  { icon: MapPin, label: "Address", value: "SCO 393, 2nd floor, Sector - 37 D, Chandigarh" },
];

const SOCIALS = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

function Contact3DHero() {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
          <Icosahedron args={[1.1, 0]}>
            <meshStandardMaterial color="#38bdf8" metalness={0.7} roughness={0.2} />
          </Icosahedron>
        </Float>
        <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.2}>
          <TorusKnot args={[0.4, 0.13, 64, 16]} position={[-1.7, 0.7, -0.5]}>
            <meshStandardMaterial color="#a21caf" metalness={0.8} roughness={0.2} />
          </TorusKnot>
        </Float>
        <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.1}>
          <Icosahedron args={[0.22, 0]} position={[1.5, -0.8, 0.3]}>
            <meshStandardMaterial color="#fbbf24" metalness={0.8} roughness={0.2} />
          </Icosahedron>
        </Float>
        <Environment preset="city" />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Debug: Log the form data being sent
    console.log('Sending form data:', formData);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: ""
        });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <ProductsHero
        badge="Contact Us"
        heading="Get in Touch"
        subheading="We'd love to hear from you. Fill out the form or reach us directly!"
        buttonText={undefined}
      />

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="bg-neutral-900/50 border-neutral-700">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-white font-bold">Send us a Message</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Contact Fields */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                          placeholder="Tell us how we can help you..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white font-semibold py-4 text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl border border-white/10 hover:border-white/20"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            Sending Message...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2 min-w-0">
                            <Send className="w-5 h-5 flex-shrink-0" />
                            <span className="truncate">Send Message</span>
                          </div>
                        )}
                      </button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Send className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-green-400">Message Sent Successfully!</h3>
                      <p className="text-neutral-300 mb-6">
                        Thank you for your message. Our team will get back to you within 24 hours.
                      </p>
                      <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
                        <p className="text-sm text-neutral-400">
                          <strong>What's next?</strong> You'll receive an email confirmation and our team will contact you soon.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Contact Info */}
              <Card className="bg-neutral-900/50 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white font-bold">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 p-3 bg-neutral-800/30 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-white">Call Us</p>
                      <p className="text-sm text-neutral-300">+91 90262 23490</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-neutral-800/30 rounded-lg">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-white">Call Us</p>
                      <p className="text-sm text-neutral-300">+91 84229761056</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-neutral-800/30 rounded-lg">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="font-medium text-white">Email Us</p>
                      <p className="text-sm text-neutral-300">support@techassistant.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-neutral-800/30 rounded-lg">
                    <FaMapMarkerAlt className="w-5 h-5 text-blue-400 mt-1" />
                    <div>
                      <p className="font-medium text-white">Visit Us</p>
                      <p className="text-sm text-neutral-300">III/12 Tikait Rai LDA Calony

                        <br /> Rajajipuram, Lucknow 226017</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-neutral-900/50 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white font-bold">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4 justify-center">
                    {SOCIALS.map((s, i) => (
                      <a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800/50 hover:bg-blue-600/30 transition-all duration-300 border border-neutral-600 hover:border-blue-500/50"
                      >
                        <s.icon className="w-6 h-6 text-blue-400 hover:text-blue-300 transition-colors" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="bg-neutral-900/50 border-neutral-700 overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl text-white font-bold">Our Location</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
             
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14239.299777528286!2d80.85939567147102!3d26.845519626994335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bff1ea169cc9f%3A0x6cae4b17a27fe16d!2sTikait%20Rai%20talab!5e0!3m2!1sen!2sin!4v1753892032451!5m2!1sen!2sin" 
            
               width="100%"
               height="400"
               style={{ border: 0 }}
               allowFullScreen
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               className="w-full h-[400px]"></iframe>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
} 