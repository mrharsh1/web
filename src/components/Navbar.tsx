"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

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
            <Link href="/"> <img src="/logo.png" alt="Bhaviya" width={100} height={100} /></Link>
          </span>
        </div>
        {/* Centered Nav Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex gap-6 rounded-full bg-neutral-800 px-8 py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-white transition px-4 py-1 rounded-lg
                    ${isActive ? "shadow-[0_4px_24px_0_rgba(220,38,38,0.25)] bg-neutral-900" : ""}
                  `}
                >
                  <span
                    className={`z-10 relative ${isActive ? "text-red-500 font-bold" : "hover:text-neutral-300"}`}
                  >
                    {link.label}
                  </span>
                  {/* Shadow on hover (if not active) */}
                  {/* No manual hover shadow, only active follows route */}
                </Link>
              );
            })}
          </div>
        </div>
        {/* Right Button */}
        <div>
          <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700 transition font-medium">
            <span>Get Template</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

