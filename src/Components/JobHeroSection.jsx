/** @format */

"use client";

import React from "react";
// HeroUI V3 components
import { Input, Button, Chip } from "@heroui/react";
// Gravity UI Icons
import { Magnifier, Pin, Briefcase } from "@gravity-ui/icons";
import ScrambleText from "./animation/ScrambleText";

export default function JobHeroSection() {
  return (
    <section className="relative w-full bg-transparent text-white flex flex-col items-center justify-center pt-54 pb-16 px-4 md:px-6">
      {/* 1. Top Announcement Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-zinc-900/60 border border-zinc-800/80 backdrop-blur-md shadow-inner animate-fade-in">
        <Briefcase className="w-4 h-4 text-amber-500 animate-pulse" />
        <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase flex items-center gap-1.5">
          <span className="text-white font-bold">50,000+</span> New Jobs This
          Month
        </span>
      </div>

      {/* 2. Heading & Subtitle Description */}

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl text-center mb-5 leading-[1.15]">
        <ScrambleText text="Find Your Dream Job Today" speed={25} />
      </h1>

      <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl text-center mb-12 leading-relaxed font-normal">
        HireLoop connects top talent with world-class companies. Browse
        thousands of curated opportunities and land your next role — faster.
      </p>

      {/* 3. Combined Floating Search Capsule */}
      <div className="w-full max-w-3xl bg-zinc-900/80 border border-zinc-800/70 rounded-full p-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-0 shadow-2xl backdrop-blur-xl mb-8">
        {/* Job Title Input */}
        <div className="w-full flex items-center px-3 gap-2">
          <Magnifier className="w-5 h-5 text-zinc-500 shrink-0" />
          <Input
            type="text"
            placeholder="Job title, skill or company"
            variant="transparent"
            className="w-full text-white placeholder-zinc-500 text-sm focus:outline-none bg-transparent h-10 border-none"
          />
        </div>

        {/* Vertical Divider (Hidden on stack/mobile screens) */}
        <div className="hidden sm:block h-6 w-px bg-zinc-800 mx-2" />

        {/* Location Input */}
        <div className="w-full flex items-center px-3 gap-2">
          <Pin className="w-5 h-5 text-zinc-500 shrink-0" />
          <Input
            type="text"
            placeholder="Location or Remote"
            variant="transparent"
            className="w-full text-white placeholder-zinc-500 text-sm focus:outline-none bg-transparent h-10 border-none"
          />
        </div>

        {/* Search Call to Action Button */}
        <Button
          isIconOnly
          aria-label="Search"
          className="w-12 h-12 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-all duration-200 shadow-md shadow-indigo-600/20 shrink-0 flex items-center justify-center sm:ml-auto"
        >
          <Magnifier className="w-5 h-5 text-white" />
        </Button>
      </div>

      {/* 4. Trending Position Pills */}
      <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
        <span className="text-zinc-500 font-medium">Trending Position</span>

        <Chip
          variant="secondary"
          className="bg-zinc-900/50 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer px-4 py-1 rounded-full text-xs"
        >
          Product Designer
        </Chip>

        <Chip
          variant="secondary"
          className="bg-zinc-900/50 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer px-4 py-1 rounded-full text-xs"
        >
          AI Engineering
        </Chip>

        <Chip
          variant="secondary"
          className="bg-zinc-900/50 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer px-4 py-1 rounded-full text-xs"
        >
          Dev-ops Engineer
        </Chip>
      </div>
    </section>
  );
}
