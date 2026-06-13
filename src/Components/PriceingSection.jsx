/** @format */

"use client";
import React, { useState } from "react";
// HeroUI v3 Components
import { Button } from "@heroui/react";
// আপনার দেওয়া নির্দিষ্ট Gravity UI আইকনসমূহ
import {
  Thunderbolt,
  TriangleRightFill,
  FilePlus,
  ArrowRight,
  CircleTree,
} from "@gravity-ui/icons";

export default function PricingSection() {
  // 'monthly' অথবা 'yearly' স্টেট ট্র্যাকিং
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      id: "starter",
      name: "Starter",
      icon: <CircleTree className="w-5 h-5 text-purple-400" />,
      // Monthly এবং Yearly এর জন্য আলাদা আলাদা প্রাইস অবজেক্ট
      price: {
        monthly: 0,
        yearly: 0,
      },
      subtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isFeatured: false,
    },
    {
      id: "growth",
      name: "Growth",
      icon: <TriangleRightFill className="w-5 h-5 text-purple-400" />,
      price: {
        monthly: 17,
        yearly: 12, // ইয়ারলি সিলেক্ট করলে প্রতি মাসে $১২ করে আসবে (ডিসকাউন্ট)
      },
      subtitle: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      isFeatured: true,
    },
    {
      id: "premium",
      name: "Premium",
      icon: <Thunderbolt className="w-5 h-5 text-purple-400" />,
      price: {
        monthly: 99,
        yearly: 75, // ইয়ারলি সিলেক্ট করলে প্রতি মাসে $৭৫ করে আসবে (ডিসকাউন্ট)
      },
      subtitle: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      isFeatured: false,
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12 lg:px-24 flex flex-col items-center select-none">
      {/* Top Pricing Tag */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-1.5 h-1.5 bg-blue-600 inline-block"></span>
        <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
          PRICING
        </span>
        <span className="w-1.5 h-1.5 bg-blue-600 inline-block"></span>
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold text-center max-w-2xl leading-tight mb-8 tracking-tight">
        Pay for the leverage,
        <br />
        not the listings
      </h2>

      {/* Active State Functional Toggle Bar */}
      <div className="bg-zinc-900 p-1.5 rounded-full flex items-center gap-1 mb-16 border border-zinc-800">
        <button
          onClick={() => setBillingCycle("monthly")}
          className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
            billingCycle === "monthly"
              ? "bg-white text-black font-semibold"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setBillingCycle("yearly")}
          className={`px-4 py-2 text-xs font-medium rounded-full flex items-center gap-2 transition-all duration-300 ${
            billingCycle === "yearly"
              ? "bg-white text-black font-semibold"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <span>Yearly</span>
          <span className="bg-pink-600 text-[10px] text-white px-1.5 py-0.5 rounded-full font-bold">
            25%
          </span>
        </button>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 ${
              plan.isFeatured
                ? "bg-zinc-900/60 border-zinc-700/80 shadow-[0_0_30px_rgba(255,255,255,0.02)]"
                : "bg-zinc-950/40 border-zinc-900"
            }`}
          >
            {/* Header Content */}
            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center">
                    {plan.icon}
                  </div>
                  <span className="text-xl font-medium text-zinc-200">
                    {plan.name}
                  </span>
                </div>

                {/* ডাইনামিক প্রাইস রেন্ডারিং */}
                <div className="flex items-baseline">
                  <span className="text-3xl font-semibold transition-all duration-300">
                    $
                    {billingCycle === "monthly"
                      ? plan.price.monthly
                      : plan.price.yearly}
                  </span>
                  <span className="text-xs text-zinc-500 ml-1">/month</span>
                </div>
              </div>

              <p className="text-sm font-medium text-zinc-300 mb-6">
                {plan.subtitle}
              </p>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-zinc-400"
                  >
                    <span className="w-5 h-5 bg-zinc-900 border border-zinc-800 rounded flex items-center justify-center mt-0.5 flex-shrink-0">
                      <FilePlus className="w-3 h-3 text-zinc-500" />
                    </span>
                    <span className="pt-0.5">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* HeroUI CTA Button */}
            <Button
              className={`w-full py-6 font-medium text-sm flex items-center justify-center gap-2 rounded-xl transition-all duration-300 ${
                plan.isFeatured
                  ? "bg-white text-black hover:bg-zinc-200 font-semibold"
                  : "bg-zinc-900 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              Choose This Plan
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
