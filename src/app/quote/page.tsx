"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/lightswind/card";
import { Badge } from "@/components/lightswind/badge";
import { Button } from "@/components/lightswind/button";
import { 
  Quote, 
  Send, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Shield,
  Zap
} from "lucide-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Boxes } from "@/components/ui/bg-box";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import ProductsHero from "@/components/products-hero";

const services = [
  { id: "web-development", name: "Web Development", description: "Custom websites and web applications" },
  { id: "mobile-app", name: "Mobile App Development", description: "iOS and Android applications" },
  { id: "ui-ux-design", name: "UI/UX Design", description: "User interface and experience design" },
  { id: "digital-marketing", name: "Digital Marketing", description: "SEO, PPC, and social media marketing" },
  { id: "ecommerce", name: "E-commerce Solutions", description: "Online store development and optimization" },
  { id: "cloud-services", name: "Cloud Services", description: "AWS, Azure, and Google Cloud solutions" },
  { id: "ai-ml", name: "AI & Machine Learning", description: "Artificial intelligence and automation" },
  { id: "consulting", name: "IT Consulting", description: "Technology strategy and planning" }
];

const benefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Quick Response",
    description: "Get your quote within 24 hours"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure Process",
    description: "Your information is protected"
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Expert Team",
    description: "Work with industry professionals"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Fast Delivery",
    description: "Quick turnaround times"
  }
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Schedule Call Form State
  const [showScheduleForm, setShowScheduleForm] = useState(false);
  const [scheduleFormData, setScheduleFormData] = useState({
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });
  const [isScheduleSubmitting, setIsScheduleSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleScheduleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setScheduleFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsScheduleSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...scheduleFormData,
          type: 'schedule_call',
          message: `Schedule Call Request - Preferred Date: ${scheduleFormData.preferredDate}, Preferred Time: ${scheduleFormData.preferredTime}. ${scheduleFormData.message}`
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit schedule request');
      }

      setIsScheduleSubmitting(false);
      setShowScheduleForm(false);
      setScheduleFormData({
        name: "",
        phone: "",
        email: "",
        preferredDate: "",
        preferredTime: "",
        message: ""
      });
      alert('Schedule request submitted successfully! We will contact you soon.');
    } catch (error) {
      console.error('Schedule submission error:', error);
      setIsScheduleSubmitting(false);
      alert('Failed to submit schedule request. Please try again.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'quote'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit quote request');
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
          service: "",
          message: ""
        });
      }, 3000);
    } catch (error) {
      console.error('Quote submission error:', error);
      setIsSubmitting(false);
      alert('Failed to submit quote request. Please try again.');
    }
  };

  return (
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <ProductsHero
        badge="Get Your Quote"
        heading="Request a Quote"
        subheading="Tell us about your project and we'll provide you with a detailed quote tailored to your needs. Our team of experts is ready to bring your vision to life."
        buttonText="Get Started"
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
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">Project Details</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Fill out the form below and we'll get back to you with a custom quote
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

                      {/* Service Dropdown */}
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                          <Zap className="w-4 h-4" />
                          Service Required *
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 pr-12 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none cursor-pointer hover:border-neutral-500"
                            style={{ backgroundImage: 'none' }}
                          >
                            <option value="" className="text-neutral-400 bg-neutral-800">Select a service</option>
                            {services.map((service) => (
                              <option key={service.id} value={service.id} className="text-white bg-neutral-800">
                                {service.name}
                              </option>
                            ))}
                            <option value="custom" className="text-white bg-neutral-800">Custom Solution</option>
                          </select>
                          
                          {/* Custom Dropdown Arrow */}
                          <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none z-10">
                            <svg className="w-5 h-5 text-neutral-400 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          
                          {/* Selected Service Display
                          {formData.service && (
                            <div className="mt-3 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-400" />
                                <span className="text-sm text-blue-300 font-medium">
                                  Selected: {services.find(s => s.id === formData.service)?.name || 'Custom Solution'}
                                </span>
                              </div>
                              {formData.service !== 'custom' && (
                                <p className="text-xs text-neutral-400 mt-1 ml-6">
                                  {services.find(s => s.id === formData.service)?.description}
                                </p>
                              )}
                            </div>
                          )} */}
                        </div>
                      </div>

                      {/* Message Field */}
                      <div className="space-y-2">
                        <label className="text-sm  font-medium text-neutral-300 flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Project Details *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                          placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
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
                            Sending Request...
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2 min-w-0">
                            <Send className="w-5 h-5 flex-shrink-0" />
                            <span className="truncate">Send Quote Request</span>
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
                        <CheckCircle className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-green-400">Request Sent Successfully!</h3>
                      <p className="text-neutral-300 mb-6">
                        Thank you for your quote request. Our team will review your project details and get back to you within 24 hours with a custom quote.
                      </p>
                      <div className="bg-neutral-800/50 rounded-lg p-4 border border-neutral-600">
                        <p className="text-sm text-neutral-400">
                          <strong>What's next?</strong> You'll receive an email confirmation and our team will contact you to discuss your project in detail.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              {/* Benefits */}
              <Card className="bg-neutral-900/50 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{benefit.title}</h4>
                        <p className="text-sm text-neutral-400">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
              {/* Contact Info */}
              <Card className="bg-neutral-900/50 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-xl text-white font-bold">Need Immediate Help?</CardTitle>
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
                  <button 
                    onClick={() => setShowScheduleForm(true)}
                    className="w-full bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white font-semibold py-3 px-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    Schedule a Call
                  </button>
                </CardContent>
              </Card>
            </div>
          </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
              Don't wait! Get your custom quote today and take the first step towards bringing your vision to life.
            </p>
            <MovingBorderButton size="lg" className="bg-gradient-to-br from-blue-600/40 via-purple-600/40 to-pink-600/40 hover:from-blue-500/50 hover:via-purple-500/50 hover:to-pink-500/50 text-white font-bold shadow-xl hover:shadow-blue-500/20 border border-white/10 hover:border-white/20">
              Get Started Now
            </MovingBorderButton>
          </motion.div>
        </div>
      </section>

      {/* Schedule Call Form Popup */}
      {showScheduleForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-neutral-900/95 border border-neutral-700 rounded-2xl p-8 max-w-md w-full backdrop-blur-xl"
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Schedule a Call</h3>
              <p className="text-neutral-300">Fill in your details and preferred time for a consultation call</p>
            </div>
            
            <form onSubmit={handleScheduleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={scheduleFormData.name}
                  onChange={handleScheduleFormChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={scheduleFormData.phone}
                    onChange={handleScheduleFormChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={scheduleFormData.email}
                    onChange={handleScheduleFormChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={scheduleFormData.preferredDate}
                    onChange={handleScheduleFormChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    name="preferredTime"
                    value={scheduleFormData.preferredTime}
                    onChange={handleScheduleFormChange}
                    required
                    className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                  >
                    <option value="" className="text-neutral-400 bg-neutral-800">Select time</option>
                    <option value="09:00 AM" className="text-white bg-neutral-800">09:00 AM</option>
                    <option value="10:00 AM" className="text-white bg-neutral-800">10:00 AM</option>
                    <option value="11:00 AM" className="text-white bg-neutral-800">11:00 AM</option>
                    <option value="12:00 PM" className="text-white bg-neutral-800">12:00 PM</option>
                    <option value="01:00 PM" className="text-white bg-neutral-800">01:00 PM</option>
                    <option value="02:00 PM" className="text-white bg-neutral-800">02:00 PM</option>
                    <option value="03:00 PM" className="text-white bg-neutral-800">03:00 PM</option>
                    <option value="04:00 PM" className="text-white bg-neutral-800">04:00 PM</option>
                    <option value="05:00 PM" className="text-white bg-neutral-800">05:00 PM</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Additional Notes
                </label>
                <textarea
                  name="message"
                  value={scheduleFormData.message}
                  onChange={handleScheduleFormChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-neutral-800/50 border-2 border-neutral-600 rounded-xl text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none"
                  placeholder="Any specific topics you'd like to discuss during the call..."
                />
              </div>
              
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowScheduleForm(false)}
                  className="flex-1 px-4 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isScheduleSubmitting}
                  className="flex-1 px-4 py-3 bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isScheduleSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Scheduling...
                    </div>
                  ) : (
                    "Schedule Call"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </main>
  );
} 