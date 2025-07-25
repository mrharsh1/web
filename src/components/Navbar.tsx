"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-8 py-4 bg-neutral-900/90 border-b border-neutral-800 backdrop-blur-md shadow-md transition-all">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-serif font-bold text-white">Bhaviya</span>
      </div>
      {/* Centered Nav Links */}
      <div className="flex-1 flex justify-center">
        <div className="flex gap-6 rounded-full bg-neutral-800 px-8 py-2">
          <Link href="/about" className="text-white hover:text-neutral-300 transition">About</Link>
          <Link href="/services" className="text-white hover:text-neutral-300 transition">Services</Link>
          <Link href="/products" className="text-white hover:text-neutral-300 transition">Products</Link>
          <Link href="/blog" className="text-white hover:text-neutral-300 transition">Blog</Link>
          <Link href="/contact" className="text-white hover:text-neutral-300 transition">Contact</Link>
        </div>
      </div>
      {/* Right Button */}
      <div>
        <button className="flex items-center gap-2 px-5 py-2 rounded-lg bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700 transition font-medium">
          <span>Get Template</span>
        </button>
      </div>
    </nav>
  );
}

