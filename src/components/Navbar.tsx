"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full sticky top-0 z-50 w-full bg-neutral-900/90 border-b border-neutral-800 backdrop-blur-md shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-white">
            <Link href="/"> 
              <img src="/logo.png" alt="Tech Assistant" width={60} height={60} className="w-12 h-12 sm:w-[60px] sm:h-[60px]" />
            </Link>
          </span>
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden lg:flex flex-1 justify-center">
          <div className="relative flex gap-6 rounded-full bg-neutral-800 px-8 py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-white transition-all duration-500 ease-out px-4 py-2 rounded-lg group
                    ${isActive ? "text-blue-200 font-semibold" : "hover:text-blue-300"}
                  `}
                >
                  <span className="z-10 relative">
                    {link.label}
                  </span>
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30 shadow-[0_4px_20px_0_rgba(59,130,246,0.3)] transition-all duration-500 ease-out transform scale-100 animate-pulse"></div>
                  )}
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform scale-95 group-hover:scale-100"></div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Desktop Right Button - Hidden on mobile */}
        <div className="hidden lg:block">
          <Link href="/quote">
            <MovingBorderButton className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white border border-white/10 hover:border-white/20">
              Get Quote
            </MovingBorderButton>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 text-white hover:text-blue-300 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-gradient-to-br from-neutral-950 via-black to-neutral-900 backdrop-blur-md animate-in fade-in duration-300">
          <div className="flex flex-col h-full bg-gradient-to-b from-neutral-900/50 to-black/80">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-700 bg-neutral-900 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <img src="/logo.png" alt="Tech Assistant" width={40} height={40} />
                <span className="text-xl font-serif font-bold text-white">Tech Assistant</span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-white hover:text-blue-300 transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex-1 flex flex-col justify-center px-6 py-4 border-neutral-700 bg-neutral-900 backdrop-blur-sm">
              <div className="space-y-6">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className={`block text-2xl font-medium transition-all duration-300 py-2 px-6 rounded-xl group
                        ${isActive 
                          ? "text-blue-300 bg-blue-600/20 border border-blue-500/30" 
                          : "text-white hover:text-blue-300 hover:bg-neutral-800/50"
                        }
                      `}
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: 'slideInFromRight 0.3s ease-out forwards'
                      }}
                    >
                      <span className="flex items-center justify-between">
                        {link.label}
                        {isActive && (
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        )}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile CTA Button */}
            <div className="p-6 border-t border-neutral-700 bg-neutral-900 backdrop-blur-sm">
              <Link href="/quote" onClick={closeMobileMenu}>
                <MovingBorderButton className="w-full bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white border border-white/10 hover:border-white/20 py-4 text-lg font-medium cursor-pointer">
                  Get Quote
                </MovingBorderButton>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CSS for mobile menu animations */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}

 