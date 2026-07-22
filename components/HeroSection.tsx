"use client";

import React from 'react';

export default function HeroSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left side text */}
      <div className="flex flex-col items-start gap-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          Pass the time with <br />
          <span className="highlight-bg mt-1">fun web games</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-lg mt-2">
          Our platform helps you easily discover, play, and linger on addictive web games designed to make passing time incredibly enjoyable.
        </p>
        <button className="brutal-btn-primary mt-4 text-lg px-8 py-4">
          Browse games
        </button>
      </div>

      {/* Right side illustration (Gamepad abstract) */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
        {/* Decorative elements behind */}
        <div className="absolute top-10 right-10 w-4 h-4 bg-black rounded-full" />
        <div className="absolute bottom-20 left-10 w-6 h-6 bg-[#b4ff5c]" style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }} />
        
        {/* Main abstract gamepad graphic (mimicking the megaphone line-art style) */}
        <div className="relative w-64 h-48 brutal-border rounded-full bg-white flex items-center justify-between px-10 shadow-[-10px_10px_0_0_#000]">
          {/* D-Pad */}
          <div className="w-12 h-12 relative flex items-center justify-center">
            <div className="absolute w-12 h-4 bg-black rounded-sm" />
            <div className="absolute w-4 h-12 bg-black rounded-sm" />
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col gap-2 rotate-45">
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-[#b4ff5c] brutal-border" />
              <div className="w-6 h-6 rounded-full bg-black" />
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-black" />
              <div className="w-6 h-6 rounded-full bg-black" />
            </div>
          </div>
        </div>
        
        {/* Abstract orbital lines around it */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
          <ellipse cx="200" cy="200" rx="180" ry="100" fill="none" stroke="#e5e7eb" strokeWidth="2" transform="rotate(-15 200 200)" />
          <ellipse cx="200" cy="200" rx="160" ry="80" fill="none" stroke="#e5e7eb" strokeWidth="2" transform="rotate(20 200 200)" />
        </svg>
      </div>
    </section>
  );
}
