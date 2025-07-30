"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import { useState, useEffect } from "react";
import confetti from 'canvas-confetti';

export default function Footer() {
  const [email, setEmail] = useState("");

  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Multiple confetti effects for spectacular celebration
    
    // 1. Main confetti blast with random directions
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      angle: 90,
      startVelocity: 45,
      gravity: 0.8,
      ticks: 200,
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#800080']
    });

    // 2. Realistic confetti with different shapes
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
      angle: 60,
      startVelocity: 35,
      gravity: 1,
      ticks: 150,
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd'],
      shapes: ['circle', 'square']
    });

    // 3. Stars confetti effect
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.5 },
      angle: 120,
      startVelocity: 40,
      gravity: 0.6,
      ticks: 250,
      colors: ['#ffd700', '#ffed4e', '#fff200', '#ffeb3b', '#fdd835'],
      shapes: ['star']
    });

    // 4. Snow effect
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.8 },
      angle: 90,
      startVelocity: 30,
      gravity: 0.5,
      ticks: 300,
      colors: ['#ffffff', '#f0f8ff', '#e6f3ff', '#f5f5f5'],
      shapes: ['circle']
    });

    // 5. School pride colors (blue and white)
    confetti({
      particleCount: 60,
      spread: 80,
      origin: { y: 0.6 },
      angle: 90,
      startVelocity: 50,
      gravity: 0.9,
      ticks: 180,
      colors: ['#1e3a8a', '#3b82f6', '#60a5fa', '#93c5fd', '#dbeafe', '#ffffff', '#f8fafc'],
      shapes: ['circle', 'square']
    });

    // 6. Random direction burst
    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 360,
        origin: { y: 0.5, x: 0.5 },
        angle: 0,
        startVelocity: 60,
        gravity: 0.7,
        ticks: 200,
        colors: ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#8b5cf6', '#ec4899']
      });
    }, 200);

    // 7. Diagonal burst
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 45,
        origin: { y: 0.6 },
        angle: 45,
        startVelocity: 55,
        gravity: 0.8,
        ticks: 220,
        colors: ['#dc2626', '#ea580c', '#d97706', '#16a34a', '#0891b2', '#7c3aed', '#be185d']
      });
    }, 400);

    // Clear the email input
    setEmail("");
    
    // Smooth scroll to top after a short delay to show confetti first
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 1000);
  };

  // Custom blast confetti effect


  return (
    <footer className="w-full bg-black border-t border-neutral-800 px-6 md:px-12 pt-16 pb-8 text-white">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-extrabold mb-2 tracking-tight"> <img src="/logo.png" alt="Bhavya Entrprises " width={100} height={100} /></h2>
          <p className="text-gray-400 text-base mb-2">
           Bhavya Entrprises   is a creative technology company delivering modern, scalable digital solutions for businesses worldwide. We blend innovation, design, and engineering to help you grow.
          </p>
        </div>
        {/* Addresses */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2">Our Offices</h3>
          <div className="flex items-start gap-2 text-gray-300">
            <FaMapMarkerAlt className="mt-1 text-gray-400" />
            <div>
              <span className="font-semibold text-white">SCO 393, 2nd floor </span><br />
                 

                         sector - 37 D Chandigarh
            </div>
          </div>
        </div>
        {/* Contact & Support */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2">Contact & Support</h3>
          <div className="flex items-center gap-2 text-gray-300">
            <FaEnvelope className="text-gray-400" />
            <a href="mailto:support@Bhavya Entrprises .com" className="hover:text-white transition">support@bhavyaentrprises .com</a>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaPhoneAlt className="text-gray-400" />
            <span>+91 90268 49414</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <FaHeadset className="text-gray-400" />
            <a href="#" className="hover:text-white transition">24/7 Live Chat</a>
          </div>
          <div className="flex gap-4 mt-2 text-2xl">
            <a href="#" aria-label="Facebook" className="hover:text-gray-200 transition"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-gray-200 transition"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-gray-200 transition"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-200 transition"><FaLinkedin /></a>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex flex-col gap-6">
          <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
          <p className="text-gray-400 text-base">Get the latest updates, tips, and offers from Bhavya Entrprises  in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2 mt-2" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded bg-neutral-900 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
            <button
              type="submit"
              className="px-5 py-2 rounded bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white font-semibold transition-all duration-300 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 border-t border-neutral-800 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Bhavya Entrprises . All rights reserved.
      </div>
    </footer>
  );
}

