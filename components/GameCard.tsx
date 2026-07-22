"use client";

import React from 'react';

export interface Game {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
}

interface GameCardProps {
  game: Game;
  variant: "light" | "dark";
}

export default function GameCard({ game, variant }: GameCardProps) {
  const isDark = variant === "dark";

  return (
    <div className={`p-8 h-64 flex justify-between ${isDark ? 'brutal-card-black' : 'brutal-card'} group relative overflow-hidden`}>
      
      {/* Left side content */}
      <div className="flex flex-col justify-between h-full w-1/2 z-10">
        <div>
          {isDark ? (
            <h3 className="text-xl md:text-2xl font-bold bg-white text-black inline-block px-2 py-1 rounded">
              {game.title}
            </h3>
          ) : (
            <h3 className="text-xl md:text-2xl font-bold bg-[#b4ff5c] inline-block px-2 py-1 rounded">
              {game.title}
            </h3>
          )}
        </div>
        
        <a 
          href={game.url}
          className="flex items-center gap-4 mt-auto group-hover:translate-x-2 transition-transform w-max"
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isDark ? 'bg-white text-black' : 'bg-black text-white'}`}>
            <span className="font-bold text-lg rotate-45">↗</span>
          </div>
          <span className="font-medium">Play now</span>
        </a>
      </div>
      
      {/* Right side illustration (abstract representations) */}
      <div className="w-1/2 flex items-center justify-end relative z-0">
        {/* We can do a minimal CSS illustration based on the variant */}
        {isDark ? (
          <div className="w-24 h-24 brutal-border bg-black rounded-lg flex items-center justify-center relative shadow-sm border-white">
             {/* A retro smile face or abstract shape */}
             <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center relative">
               <div className="absolute top-4 left-3 w-3 h-3 bg-black rounded-full" />
               <div className="absolute top-4 right-3 w-3 h-3 bg-black rounded-full" />
               <div className="absolute bottom-3 w-8 h-2 bg-black rounded-full" />
             </div>
          </div>
        ) : (
          <div className="w-24 h-24 border-2 border-black rounded-full flex items-center justify-center relative border-dashed animate-[spin_20s_linear_infinite]">
             <div className="w-12 h-12 border-2 border-black rounded flex items-center justify-center bg-[#b4ff5c]">
               <div className="w-4 h-4 bg-black rounded-full" />
             </div>
          </div>
        )}
      </div>

    </div>
  );
}
