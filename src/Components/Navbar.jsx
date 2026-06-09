/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Browse Jobs",
      href: "/jobs",
    },
    {
      name: "Company",
      href: "/company",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center rounded-2xl border border-white/10 bg-[#171717]/90 px-6 py-4 backdrop-blur-xl">
          {/* Logo */}
          <Link href="/" className="text-3xl font-bold">
            <span className="text-blue-500">hire</span>
            <span className="text-orange-500">loop</span>
          </Link>

          {/* Desktop Menu */}
          <div className="ml-auto hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}

            <div className="h-5 w-px bg-white/20" />

            <Link href="/signin" className="text-violet-500 font-medium">
              Sign In
            </Link>

            <Button
              radius="lg"
              className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-auto lg:hidden"
          >
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-[#171717]/95 p-5 backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/80 hover:text-white"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="h-px bg-white/10" />

              <Link href="/signin" className="text-violet-500 font-medium">
                Sign In
              </Link>

              <Button
                radius="lg"
                className="bg-gradient-to-r from-violet-600 to-indigo-500 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
  