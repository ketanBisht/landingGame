"use client";

import React from 'react';

const gameUrls = [
  "https://mazecursor.vercel.app/",
  "https://curiousmuseum.vercel.app/",
  "https://offcolor.vercel.app/games/offcolor",
  "https://matchitt.vercel.app/",
  "https://unfairwiki.vercel.app/",
  "https://tom-riddle.vercel.app/"
];

export default function CTASection() {
  const handleRandomPlay = () => {
    const randomUrl = gameUrls[Math.floor(Math.random() * gameUrls.length)];
    window.open(randomUrl, "_blank");
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12 mb-16">
      <div className="bg-[#f3f4f6] rounded-[32px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
        
        {/* Left text content */}
        <div className="z-10 max-w-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to dive in?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Choose from our curated collection of premium web games or let fate decide what you play next.
          </p>
          <button 
            onClick={handleRandomPlay}
            className="brutal-btn-primary cursor-pointer hover:bg-[#b4ff5c] hover:text-black transition-all"
          >
            Play a random game
          </button>
        </div>

        {/* Right side illustration (abstract shapes like the reference) */}
        <div className="relative z-10 w-full md:w-1/3 flex justify-center h-48 items-center">
           {/* Abstract star shape */}
           <div className="absolute top-0 right-0 w-16 h-16 bg-gray-300 transform rotate-45" style={{ clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)" }}></div>
           
           {/* Abstract lime diamond */}
           <div className="absolute bottom-0 left-10 w-12 h-12 bg-[#b4ff5c] transform rotate-45"></div>

           {/* Center dark circle with orbital lines */}
           <div className="relative w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-lg">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
           </div>
           
           {/* Orbital rings */}
           <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 200">
             <ellipse cx="150" cy="100" rx="100" ry="30" fill="none" stroke="#9ca3af" strokeWidth="1" />
             <ellipse cx="150" cy="90" rx="100" ry="30" fill="none" stroke="#9ca3af" strokeWidth="1" />
             <ellipse cx="150" cy="80" rx="100" ry="30" fill="none" stroke="#9ca3af" strokeWidth="1" />
           </svg>
        </div>
        
      </div>
    </section>
  );
}
