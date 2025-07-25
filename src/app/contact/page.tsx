"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Environment, OrbitControls } from "@react-three/drei";

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

const CONTACT_INFO = [
  { icon: Mail, label: "Email", value: "hello@yourcompany.com" },
  { icon: Phone, label: "Phone", value: "+1 234 567 8901" },
  { icon: MapPin, label: "Address", value: "123 Main St, New Delhi, India" },
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
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStatus("Thank you! We'll get back to you soon.");
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  }

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-start">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-16 md:py-24 bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 relative overflow-hidden">
        <Contact3DHero />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 pointer-events-none z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full min-h-[320px] text-center">
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-4xl md:text-6xl font-extrabold text-center mb-4 bg-gradient-to-r from-white via-blue-200 to-pink-200 bg-clip-text text-transparent drop-shadow-2xl">
            Get in Touch
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }} className="text-lg md:text-2xl text-neutral-200 text-center max-w-2xl mb-8">
            We'd love to hear from you. Fill out the form or reach us directly!
          </motion.p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="w-full max-w-5xl grid md:grid-cols-2 gap-10 px-4 py-12 md:py-20">
        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col justify-center border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b-2 border-neutral-500 focus:border-blue-500 outline-none py-3 px-2 text-white placeholder-transparent transition"
                placeholder="Your Name"
                autoComplete="off"
              />
              <label className="absolute left-2 top-1 text-neutral-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm pointer-events-none">
                Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b-2 border-neutral-500 focus:border-blue-500 outline-none py-3 px-2 text-white placeholder-transparent transition"
                placeholder="Your Email"
                autoComplete="off"
              />
              <label className="absolute left-2 top-1 text-neutral-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm pointer-events-none">
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="peer w-full bg-transparent border-b-2 border-neutral-500 focus:border-blue-500 outline-none py-3 px-2 text-white placeholder-transparent transition resize-none"
                placeholder="Your Message"
              />
              <label className="absolute left-2 top-1 text-neutral-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-sm pointer-events-none">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                <>
                  Send Message <Send className="w-4 h-4" />
                </>
              )}
            </button>
            {status && <div className="text-green-400 text-sm mt-2">{status}</div>}
          </form>
        </motion.div>

        {/* Contact Details & Map */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex flex-col gap-8 justify-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-6 border border-white/20">
            <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-4">
              {CONTACT_INFO.map((item, i) => (
                <li key={item.label} className="flex items-center gap-3 text-neutral-200">
                  <item.icon className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">{item.value}</span>
                  {item.label !== "Address" && (
                    <button
                      onClick={() => copyToClipboard(item.value)}
                      className="ml-2 p-1 rounded hover:bg-blue-500/20 transition"
                      title="Copy"
                      type="button"
                    >
                      <Copy className="w-4 h-4 text-blue-300" />
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-0 border border-white/20 overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83919893408!2d77.0688999!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a1b6b7b7b7%3A0x7b7b7b7b7b7b7b7b!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[220px] rounded-2xl"
            ></iframe>
          </div>
          <div className="flex gap-4 mt-2">
            {SOCIALS.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600/80 transition shadow-lg border border-white/20"
              >
                <s.icon className="w-5 h-5 text-blue-300 group-hover:text-white transition" />
              </a>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
} 