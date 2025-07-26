"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button as MovingBorderButton } from "@/components/ui/moving-border";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <nav className="w-full sticky top-0 z-50 w-full bg-neutral-900/90 border-b border-neutral-800 backdrop-blur-md shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 ">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-white">
            <Link href="/"> <img src="/logo.png" alt="Bhaviya" width={60} height={60} /></Link>
          </span>
        </div>
        {/* Centered Nav Links */}
        <div className="flex-1 flex justify-center">
          <div className="relative flex gap-6 rounded-full bg-neutral-800 px-8 py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-white transition-all duration-300 px-4 py-2 rounded-lg group
                    ${isActive ? "text-blue-200 font-semibold" : "hover:text-blue-300"}
                  `}
                >
                  <span className="z-10 relative">
                    {link.label}
                  </span>
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-lg border border-blue-500/30 shadow-[0_4px_20px_0_rgba(59,130,246,0.3)] animate-pulse"></div>
                  )}
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Right Button */}
        <div>
          <Link href="/quote">
            <MovingBorderButton className="bg-gradient-to-br from-blue-900/40 via-neutral-950 to-pink-900/30 hover:from-blue-800/50 hover:to-pink-800/40 text-white border border-white/10 hover:border-white/20">
              Get Quote
            </MovingBorderButton>
          </Link>
        </div>
      </div>
    </nav>
  );
}

