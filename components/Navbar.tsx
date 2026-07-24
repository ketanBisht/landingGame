"use client";

import React from 'react';
import Link from 'next/link';

const gameUrls = [
  "https://mazecursor.vercel.app/",
  "https://curiousmuseum.vercel.app/",
  "https://offcolor.vercel.app/games/offcolor",
  "https://matchitt.vercel.app/",
  "https://unfairwiki.vercel.app/"
];

export default function Navbar() {
  const handleRandomPlay = () => {
    const randomUrl = gameUrls[Math.floor(Math.random() * gameUrls.length)];
    window.open(randomUrl, "_blank");
  };

  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 group">
        {/* Simple 4-block grid icon representing games */}
        <div className="grid grid-cols-2 gap-1 w-6 h-6 group-hover:scale-110 transition-transform">
          <div className="bg-black rounded-sm group-hover:bg-[#b4ff5c] transition-colors"></div>
          <div className="bg-black rounded-sm"></div>
          <div className="bg-black rounded-sm"></div>
          <div className="bg-black rounded-sm group-hover:bg-[#b4ff5c] transition-colors"></div>
        </div>
        <span className="font-bold text-2xl tracking-tight">Ctrl+Play</span>
      </Link>

      {/* Links (Hidden on very small screens for simplicity) */}
      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        <a href="#games" className="hover:text-gray-600 transition-colors">Games</a>
      </div>

      {/* CTA Button */}
      <button 
        onClick={handleRandomPlay}
        className="brutal-btn-outline hidden sm:block text-sm py-2 px-6 cursor-pointer hover:bg-[#b4ff5c] hover:border-[#b4ff5c] transition-all"
      >
        Play Random
      </button>
    </nav>
  );
}
