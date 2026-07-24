"use client";

import React from 'react';
import Image from 'next/image';

export interface Game {
  id: string;
  title: string;
  description: string;
  tags: string[];
  url: string;
  imageUrl?: string;
}

interface GameCardProps {
  game: Game;
  variant: "light" | "dark";
}

export default function GameCard({ game, variant }: GameCardProps) {
  const isDark = variant === "dark";

  return (
    <div className={`p-0 h-80 flex flex-col justify-end ${isDark ? 'brutal-card-black' : 'brutal-card'} group relative overflow-hidden cursor-pointer`}>
      {/* Background Image */}
      {game.imageUrl ? (
        <Image 
          src={game.imageUrl} 
          alt={game.title} 
          fill
          className="object-cover absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-700 ease-in-out" 
        />
      ) : (
        <div className="absolute inset-0 z-0 bg-gray-900 group-hover:scale-105 transition-transform duration-700 ease-in-out">
            <div className="w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        </div>
      )}
      
      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-20 p-6 md:p-8 flex flex-col justify-end h-full">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <div className="flex gap-2 mb-3 flex-wrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            {game.tags.map(tag => (
              <span key={tag} className="text-[10px] font-bold px-2 py-1 bg-white/20 backdrop-blur-md border border-white/10 text-white rounded-md uppercase tracking-widest">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-3xl font-black text-white mb-2 tracking-tight drop-shadow-md">
            {game.title}
          </h3>
          <p className="text-gray-300 text-sm md:text-base mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150 max-w-sm">
            {game.description}
          </p>
        </div>
        
        <a 
          href={game.url}
          className="flex items-center gap-3 mt-auto group-hover:translate-x-2 transition-transform w-max opacity-100 relative z-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#b4ff5c] text-black shadow-[0_0_15px_rgba(180,255,92,0.4)]">
            <span className="font-bold text-xl rotate-45 group-hover:rotate-0 transition-transform duration-300">↗</span>
          </div>
          <span className="font-bold text-white tracking-widest uppercase text-xs">Play Now</span>
        </a>
      </div>
    </div>
  );
}
