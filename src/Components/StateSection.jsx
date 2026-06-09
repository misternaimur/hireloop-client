/** @format */

import React from "react";
import {
  FolderMagnifier,
  Archive,
  StarFill,
} from "@gravity-ui/icons";

export default function StatsSection() {
  const stats = [
    {
      id: 1,
      icon: <FolderMagnifier   className="w-6 h-6 text-slate-400" />,
      number: "50K",
      label: "Active Jobs",
    },
    {
      id: 2,
      icon: <Archive className="w-6 h-6 text-slate-400" />,
      number: "12K",
      label: "Companies",
    },
    {
      id: 3,
      // Custom SVG to perfectly match the unique "Gravity / Job Seeker Search" icon from image_36dbc2.png
      icon: (
        <svg
          className="w-6 h-6 text-slate-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197"
          />
        </svg>
      ),
      number: "2M",
      label: "Job Seekers",
    },
    {
      id: 4,
      icon: <StarFill className="w-6 h-6 text-slate-400" />,
      number: "97%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section className="relative min-h-[600px] w-full bg-black text-white flex flex-col justify-end items-center overflow-hidden pb-16 pt-32">
      {/* The 'globel' Background Image Layer with Glowing Effect */}
      <div
        className="absolute inset-0 bg-bottom bg-no-repeat bg-contain z-0 mix-blend-screen scale-110 pointer-events-none"
        style={{
          backgroundImage: "url('/globel.png')",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Radial Blue Glow behind the Globe to recreate the exact image ambiance */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] z-0 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-normal text-slate-200 tracking-tight max-w-2xl mx-auto leading-relaxed mb-16">
          Assisting over{" "}
          <span className="font-semibold text-white">15,000 job seekers</span>{" "}
          <br />
          find their dream positions.
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-[#0A0A0B]/80 border border-neutral-900 rounded-2xl p-8 flex flex-col justify-between min-h-[200px] backdrop-blur-md transition-all duration-300 hover:border-neutral-800 hover:bg-[#0D0D0F]"
            >
              {/* Icon Container */}
              <div className="mb-8">{stat.icon}</div>

              {/* Data Presentation */}
              <div>
                <div className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-normal text-slate-400">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
