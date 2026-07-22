"use client";

import React from 'react';
import GameCard, { Game } from './GameCard';

const MOCK_GAMES: Game[] = [
  {
    id: "matchit",
    title: "matchIT",
    description: "A minimalist color-memory game built with Framer Motion. Study a color, then recreate it from memory using a custom HSV color wheel.",
    tags: ["Puzzle", "Memory"],
    url: "https://matchitt.vercel.app/"
  },
  {
    id: "unfairwiki",
    title: "Unfair Wiki",
    description: "A real-time multiplayer race through Wikipedia with a twist: controlled chaos randomly teleports everyone mid-race. No lead is safe.",
    tags: ["Multiplayer", "Action"],
    url: "https://unfairwiki.vercel.app/"
  },
  {
    id: "coming-soon-1",
    title: "Coming Soon",
    description: "Another awesome web game is in the works.",
    tags: ["TBD"],
    url: "#"
  },
  {
    id: "coming-soon-2",
    title: "Coming Soon",
    description: "More games to pass the time.",
    tags: ["TBD"],
    url: "#"
  }
];

export default function GameGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      
      {/* Section Header matching the reference */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center mb-12">
        <h2 className="text-3xl font-bold highlight-bg">
          Games
        </h2>
        <p className="text-gray-700 max-w-lg text-lg">
          At our gaming hub, we offer a range of fun web games to help you pass the time and relax. These games include:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MOCK_GAMES.map((game, index) => {
          // Alternate between light and dark variants to match the reference design
          const variant = (index % 4 === 1 || index % 4 === 2) ? "dark" : "light";
          
          return (
            <GameCard 
              key={game.id} 
              game={game} 
              variant={variant} 
            />
          );
        })}
      </div>

    </section>
  );
}
