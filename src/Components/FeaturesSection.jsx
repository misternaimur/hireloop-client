/** @format */

import React from "react";
// আপনার দেওয়া ঠিক এই ৯টি আইকনই নিচে ব্যবহার করা হলো
import {
  BookmarkFill,
  LayoutHeader,
  Magnifier,
  ChartLineArrowUp,
  Bookmark,
  ChartLine,
  DatabaseFill,
  Factory,
  LayoutHeaderCursor,
} from "@gravity-ui/icons";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Magnifier className="w-5 h-5 text-purple-400" />,
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
    },
    {
      icon: <ChartLine className="w-5 h-5 text-purple-400" />,
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
    },
    {
      icon: <Factory className="w-5 h-5 text-purple-400" />,
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
    },
    {
      icon: <Bookmark className="w-5 h-5 text-purple-400" />,
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
    },
    {
      icon: <LayoutHeaderCursor className="w-5 h-5 text-purple-400" />,
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
    },
    {
      icon: <LayoutHeader className="w-5 h-5 text-purple-400" />,
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
    },
    {
      icon: <DatabaseFill className="w-5 h-5 text-purple-400" />,
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
    },
    {
      icon: <ChartLineArrowUp className="w-5 h-5 text-purple-400" />,
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12 lg:px-24 flex flex-col items-center">
      {/* Top Subtitle Tag */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 bg-blue-600 inline-block"></span>
        <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
          FEATURES JOB
        </span>
        <span className="w-1.5 h-1.5 bg-blue-600 inline-block"></span>
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center max-w-xl leading-tight mb-16 tracking-tight">
        Everything you need <br /> to succeed
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-7xl w-full">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 group">
            {/* Dark Premium Icon Container */}
            <div className="flex-shrink-0 w-14 h-14 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] group-hover:border-zinc-700 transition-colors duration-300">
              {feature.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-1 pt-1">
              <h3 className="text-md font-medium text-zinc-100 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed max-w-[220px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
