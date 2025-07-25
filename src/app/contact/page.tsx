"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron, TorusKnot, Environment, OrbitControls } from "@react-three/drei";
import { Boxes } from "@/components/ui/bg-box";
import ProductsHero from "@/components/products-hero";

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
    <main className="bg-neutral-950 text-white min-h-screen">
      {/* Hero Section */}
      <ProductsHero
        badge="Contact Us"
        heading="Get in Touch"
        subheading="We'd love to hear from you. Fill out the form or reach us directly!"
        buttonText={undefined}
      />

      {/* Info Cards Section */}
      <section className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 pt-12">
        {/* Card 1: Email, Phone, Socials */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/20 flex flex-col justify-between min-h-[220px]">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white text-center">Contact</h3>
            <ul className="space-y-4 mb-4">
              {CONTACT_INFO.filter(i => i.label !== "Address").map((item, i) => (
                <li key={item.label} className="flex items-center gap-4 text-neutral-200 text-lg justify-center">
                  <item.icon className="w-6 h-6 text-blue-400" />
                  <span className="font-medium">{item.value}</span>
                  <button
                    onClick={() => copyToClipboard(item.value)}
                    className="ml-2 p-1 rounded hover:bg-blue-500/20 transition"
                    title="Copy"
                    type="button"
                  >
                    <Copy className="w-5 h-5 text-blue-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 justify-center mt-2">
            {SOCIALS.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-blue-600/80 transition shadow-lg border border-white/20"
              >
                <s.icon className="w-6 h-6 text-blue-300 group-hover:text-white transition" />
              </a>
            ))}
          </div>
        </div>
        {/* Card 2: Address */}
        <div className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-8 border border-white/20 flex flex-col justify-center min-h-[220px]">
          <h3 className="text-2xl font-semibold mb-4 text-white text-center">Address</h3>
          <div className="flex items-center gap-4 text-neutral-200 text-lg justify-center">
            <MapPin className="w-6 h-6 text-blue-400" />
            <span className="font-medium">{CONTACT_INFO.find(i => i.label === "Address")?.value}</span>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full max-w-5xl mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 flex flex-col justify-center border border-white/20">
          <h2 className="text-3xl font-bold mb-8 text-white text-center">Send us a message</h2>
          <form className="flex flex-col gap-7 max-w-2xl mx-auto w-full" onSubmit={handleSubmit} autoComplete="off">
            <div className="relative">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="peer w-full bg-transparent border-b-2 border-neutral-500 focus:border-blue-500 outline-none py-4 px-2 text-white placeholder-transparent text-lg transition"
                placeholder="Your Name"
              />
              <label className="absolute left-2 top-2 text-neutral-400 text-base transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-base pointer-events-none">
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
                className="peer w-full bg-transparent border-b-2 border-neutral-500 focus:border-blue-500 outline-none py-4 px-2 text-white placeholder-transparent text-lg transition"
                placeholder="Your Email"
              />
              <label className="absolute left-2 top-2 text-neutral-400 text-base transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-base pointer-events-none">
                Email
              </label>
            </div>
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="peer w-full bg-transparent border-b-2 border-neutral-500 focus:border-blue-500 outline-none py-4 px-2 text-white placeholder-transparent text-lg transition resize-none"
                placeholder="Your Message"
              />
              <label className="absolute left-2 top-2 text-neutral-400 text-base transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-lg peer-focus:top-2 peer-focus:text-base pointer-events-none">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl text-lg flex items-center justify-center gap-2 shadow-lg transition disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="animate-spin w-6 h-6 border-2 border-white border-t-transparent rounded-full"></span>
              ) : (
                <>
                  Send Message <Send className="w-5 h-5" />
                </>
              )}
            </button>
            {status && <div className="text-green-400 text-base mt-2 text-center">{status}</div>}
          </form>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="w-full py-12 px-0">
        <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83919893408!2d77.0688999!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3a1b6b7b7b7%3A0x7b7b7b7b7b7b7b7b!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
            width="100%"
            height="340"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[340px]"
          ></iframe>
        </div>
      </section>
    </main>
  );
} 