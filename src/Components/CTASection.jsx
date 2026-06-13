/** @format */

"use client";
import React from "react";
// HeroUI v3 Components
import { Button } from "@heroui/react";

export default function CTASection() {
  return (
    <section
      className="relative w-full bg-black text-white py-32 px-6 sm:px-12 flex flex-col items-center justify-center overflow-hidden min-h-[550px]"
      style={{
        backgroundImage: "url('/images/cta-bg.png')",
        backgroundSize: "100% auto",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ১. মেইন ডিপ ব্লু ব্যাকগ্রাউন্ড গ্লো (Bottom-up Glow) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[100%] bg-[radial-gradient(circle_at_bottom,_rgba(30,64,175,0.45)_0%,_rgba(29,78,216,0.2)_35%,_transparent_70%)] pointer-events-none z-0" />

      {/* ২. টেক্সট ও বাটনের নিচে ব্রাইট হোয়াইট/সিলভার সফট শ্যাডো গ্লো */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[250px] bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0%,_transparent_70%)] blur-2xl pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.15] mb-6 drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          Your next role is <br /> already looking for you
        </h2>

        {/* Subtitle Description */}
        <p className="text-zinc-400 text-base sm:text-lg font-light tracking-wide max-w-xl mb-12 leading-relaxed">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        {/* HeroUI V3 Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary Solid Button */}
          <Button
            radius="xl"
            size="lg"
            className="w-full sm:w-auto bg-white text-black font-semibold px-8 py-6 text-sm hover:bg-zinc-200 transition-colors duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)]"
          >
            Create a free account
          </Button>

          {/* Secondary Bordered/Dark Button */}
          <Button
            radius="xl"
            size="lg"
            className="w-full sm:w-auto bg-zinc-950/60 text-zinc-300 border border-zinc-800/85 font-medium px-8 py-6 text-sm hover:bg-zinc-900 hover:text-white hover:border-zinc-700 transition-all duration-300 backdrop-blur-sm"
          >
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
}
