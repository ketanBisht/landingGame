"use client";

import React from 'react';
import GameCard, { Game } from './GameCard';

const MOCK_GAMES: Game[] = [
  {
    id: "tomriddle",
    title: "Tom Riddle's Diary",
    description: "An interactive, atmospheric web simulation of Tom Riddle's diary from Harry Potter. Type or draw on the aged parchment pages, see the ink absorb, and converse with the dark memory within.",
    tags: ["Simulation", "Interactive", "Atmospheric"],
    url: "https://tom-riddle.vercel.app/",
    imageUrl: "/images/tom_riddle_diary.png"
  },
  {
    id: "mazecursor",
    title: "The Invisible Maze",
    description: "A fast-paced, memory-based speedrun gauntlet. Memory. Speed. Survival. Can you hack the system without hitting invisible walls?",
    tags: ["Speedrun", "Memory", "Action"],
    url: "https://mazecursor.vercel.app/",
    imageUrl: "/images/invisible_maze.png"
  },
  {
    id: "curiousmuseum",
    title: "The Museum of Curiosity",
    description: "Curated wonders for the modern explorer. You have found a place that shouldn't exist. Step in and discover secrets of shifting halls.",
    tags: ["Exploration", "Surreal", "Mystery"],
    url: "https://curiousmuseum.vercel.app/",
    imageUrl: "/images/curious_museum.png"
  },
  {
    id: "offcolor",
    title: "OffColor",
    description: "The Daily Color Hunt. Find the tile that is slightly different in a fast, premium daily color hunting game.",
    tags: ["Puzzle", "Daily", "Color"],
    url: "https://offcolor.vercel.app/games/offcolor",
    imageUrl: "/images/off_color.png"
  },
  {
    id: "matchit",
    title: "matchIT",
    description: "A minimalist color-memory game built with Framer Motion. Study a color, then recreate it from memory using a custom HSV color wheel.",
    tags: ["Puzzle", "Memory"],
    url: "https://matchitt.vercel.app/",
    imageUrl: "/images/matchit.png"
  },
  {
    id: "unfairwiki",
    title: "Unfair Wiki",
    description: "A real-time multiplayer race through Wikipedia with a twist: controlled chaos randomly teleports everyone mid-race. No lead is safe.",
    tags: ["Multiplayer", "Action"],
    url: "https://unfairwiki.vercel.app/",
    imageUrl: "/images/unfair_wiki.png"
  }
];

export default function GameGrid() {
  return (
    <section id="games" className="w-full max-w-7xl mx-auto px-6 py-16">
      
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
