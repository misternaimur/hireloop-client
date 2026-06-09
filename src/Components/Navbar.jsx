/** @format */

"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function Navbar() {
  const navItems = ["Browse Jobs", "Company", "Pricing"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center rounded-2xl border border-white/5 bg-[#171717]/90 px-8 py-4 backdrop-blur-xl">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-4xl font-bold">
                <span className="text-blue-500">hire</span>
                <span className="text-orange-500">loop</span>
              </span>
            </Link>
          </div>

          {/* Right Side */}
          <div className="ml-auto flex items-center gap-10">
            <nav className="hidden md:flex items-center gap-10">
              {navItems.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="hidden h-6 w-px bg-white/15 md:block" />

            <Link
              href="/signin"
              className="hidden text-violet-500 font-medium md:block"
            >
              Sign In
            </Link>

            <Button
              radius="lg"
              size="lg"
              className="bg-gradient-to-r from-violet-600 to-indigo-500 px-7 text-white font-medium"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
