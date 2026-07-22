"use client";

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        {/* Simple 4-block grid icon representing games */}
        <div className="grid grid-cols-2 gap-1 w-6 h-6">
          <div className="bg-black rounded-sm"></div>
          <div className="bg-black rounded-sm"></div>
          <div className="bg-black rounded-sm"></div>
          <div className="bg-black rounded-sm"></div>
        </div>
        <span className="font-bold text-2xl tracking-tight">GameLand</span>
      </Link>

      {/* Links (Hidden on very small screens for simplicity) */}
      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        <Link href="#" className="hover:text-gray-600 transition-colors">About us</Link>
        <Link href="#" className="hover:text-gray-600 transition-colors">Games</Link>
        <Link href="#" className="hover:text-gray-600 transition-colors">Leaderboard</Link>
        <Link href="#" className="hover:text-gray-600 transition-colors">Blog</Link>
      </div>

      {/* CTA Button */}
      <button className="brutal-btn-outline hidden sm:block text-sm py-2 px-6">
        Play Random
      </button>
    </nav>
  );
}
