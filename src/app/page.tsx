"use client";

import React from "react";

const popularClusters = [
  { name: "Logo Design", icon: "✒️" },
  { name: "Voice Over", icon: "🎤" },
  { name: "Video Editing", icon: "🎬" },
  { name: "EV Services", icon: "🚗" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-yellow-400 text-black">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-black bg-yellow-400">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <span>🐝</span>
          <span>Clustr.</span>
        </div>
        <nav className="space-x-6 hidden md:flex font-semibold">
          <a href="#" className="hover:underline">
            Browse Clusters
          </a>
          <a href="#" className="hover:underline">
            Clustr for Teams
          </a>
          <a href="#" className="hover:underline">
            SkillBoost
          </a>
          <a href="#" className="hover:underline">
            English
          </a>
        </nav>
        <div className="space-x-4 hidden md:flex">
          <button className="px-4 py-2 border border-black rounded hover:bg-black hover:text-yellow-400 transition">
            Sign In
          </button>
          <button className="px-4 py-2 bg-black text-yellow-400 rounded hover:bg-gray-900 transition">
            Join Clustr
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-6">
          Find the perfect freelance services for your business
        </h1>
        <p className="text-xl mb-8 max-w-3xl">
          Clustr connects businesses with freelancers offering digital services in over 300 categories
        </p>
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Try 'building mobile app'"
            className="w-full border border-black rounded px-4 py-3 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      </section>

      {/* Popular Clusters - horizontally scrollable */}
      <section className="px-6 py-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Popular Clusters</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
          {popularClusters.map(({ name, icon }) => (
            <button
              key={name}
              className="flex-shrink-0 bg-yellow-300 text-black font-semibold rounded-lg px-6 py-6 hover:bg-yellow-200 transition shadow-md flex flex-col items-center justify-center space-y-2"
              aria-label={name}
            >
              <div className="text-4xl">{icon}</div>
              <div>{name}</div>
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black py-8 text-center text-sm text-black">
        &copy; {new Date().getFullYear()} Clustr. All rights reserved.
      </footer>
    </main>
  );
}
