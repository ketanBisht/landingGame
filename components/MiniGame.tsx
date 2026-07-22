"use client";

import React, { useState } from 'react';

export default function MiniGame() {
  const [score, setScore] = useState(0);

  return (
    <section className="w-full max-w-xl mx-auto my-12 p-6 pixel-border bg-[#111] relative overflow-hidden group">
      {/* Scanline */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] opacity-30 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-4 text-center">
        <h3 className="arcade-text text-yellow-400 text-xl text-glow">BORED? CLICK THE COIN</h3>
        
        <button 
          onClick={() => setScore(s => s + 1)}
          className="w-24 h-24 rounded-full bg-yellow-500 border-4 border-yellow-300 pixel-border flex items-center justify-center text-3xl hover:scale-110 active:scale-95 transition-transform"
        >
          $
        </button>
        
        <div className="arcade-text text-white text-lg">
          SCORE: <span className="text-green-400">{score.toString().padStart(4, '0')}</span>
        </div>
        
        {score > 0 && score < 10 && (
          <p className="text-gray-400 text-sm">Keep going...</p>
        )}
        {score >= 10 && score < 50 && (
          <p className="text-green-400 text-sm animate-pulse">Not bad!</p>
        )}
        {score >= 50 && (
          <p className="text-red-400 text-sm animate-flicker">wow you really are passing time.</p>
        )}
      </div>
    </section>
  );
}
