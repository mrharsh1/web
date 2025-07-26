"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Footer() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfetti(true);
    setEmail(""); // Clear the email input
    setTimeout(() => setShowConfetti(false), 4000);
  };

  // Custom blast confetti effect
  const ConfettiBlast = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff', '#5f27cd', '#ff9f43', '#00d2d3'];
    
    // Create confetti strips
    const strips = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      x: 50, // Start from center
      y: 50,
      angle: (i * 360) / 80, // Distribute evenly in a circle
      speed: Math.random() * 8 + 4,
      size: Math.random() * 20 + 10,
      rotation: Math.random() * 360,
      delay: Math.random() * 0.5
    }));

    return (
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-50">
        <div className="relative w-full h-full">
          {/* Center blast point */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full animate-ping" />
          
          {/* Confetti strips */}
          {strips.map((strip) => (
            <div
              key={strip.id}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${strip.size}px`,
                height: '4px',
                backgroundColor: strip.color,
                transform: `rotate(${strip.angle}deg) translateX(${strip.speed * 20}px)`,
                animation: `blastOut 2s ease-out ${strip.delay}s forwards`,
                transformOrigin: 'center'
              }}
            />
          ))}
          
          {/* 3D rotating elements */}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`3d-${i}`}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                borderRadius: '50%',
                transform: `rotate(${i * 18}deg) translateX(${Math.random() * 100 + 50}px)`,
                animation: `blastOut 2.5s ease-out ${Math.random() * 0.3}s forwards`,
                boxShadow: '0 0 10px currentColor'
              }}
            />
          ))}
          
          {/* Sparkle effects */}
          {Array.from({ length: 30 }, (_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '3px',
                height: '3px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                transform: `rotate(${i * 12}deg) translateX(${Math.random() * 80 + 30}px)`,
                animation: `sparkle 1.5s ease-out ${Math.random() * 0.5}s forwards`,
                boxShadow: '0 0 8px #ffffff'
              }}
            />
          ))}
        </div>
        
        {/* CSS Animations */}
        <style jsx>{`
          @keyframes blastOut {
            0% {
              transform: rotate(var(--angle, 0deg)) translateX(0px) scale(0);
              opacity: 1;
            }
            50% {
              opacity: 1;
            }
            100% {
              transform: rotate(var(--angle, 0deg)) translateX(var(--distance, 100px)) scale(1);
              opacity: 0;
            }
          }
          
          @keyframes sparkle {
            0% {
              transform: rotate(var(--angle, 0deg)) translateX(0px) scale(0);
              opacity: 1;
            }
            50% {
              opacity: 1;
              transform: rotate(var(--angle, 0deg)) translateX(var(--distance, 50px)) scale(1.5);
            }
            100% {
              transform: rotate(var(--angle, 0deg)) translateX(var(--distance, 80px)) scale(0);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    );
  };

  return (
    <footer className="w-full bg-black border-t border-neutral-800 px-6 md:px-12 pt-16 pb-8 text-white">
      {showConfetti && <ConfettiBlast />}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-extrabold mb-2 tracking-tight"> <img src="/logo.png" alt="Bhaviya" width={100} height={100} /></h2>
          <p className="text-gray-400 text-base mb-2">
            Bhaviya is a creative technology company delivering modern, scalable digital solutions for businesses worldwide. We blend innovation, design, and engineering to help you grow.
          </p>
        </div>
        {/* Addresses */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2">Our Offices</h3>
          <div className="flex items-start gap-2 text-gray-300">
            <FaMapMarkerAlt className="mt-1 text-gray-400" />
            <div>
              <span className="font-semibold text-white">SCO 393, 2nd floor</span><br />
               Sector - 37 D, Chandigarh<br />
B.O. : Plot No. 1025, Rani Sati Nagar,<br /> Nirman Nagar, Jaipur-302019
            </div>
          </div>
        </div>
        {/* Contact & Support */}
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-lg mb-2">Contact & Support</h3>
          <div className="flex items-center gap-2 text-gray-300">
            <FaEnvelope className="text-gray-400" />
            <a href="mailto:support@bhaviya.com" className="hover:text-white transition">support@bhaviya.com</a>
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
          <p className="text-gray-400 text-base">Get the latest updates, tips, and offers from Bhaviya in your inbox.</p>
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
        &copy; {new Date().getFullYear()} Bhaviya. All rights reserved.
      </div>
    </footer>
  );
}

