/** @format */

"use client";

import Link from "next/link";
import { 
    LogoFacebook,
    LogoLinkedin,
    LogoGithub
} from "@gravity-ui/icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo */}
          <div>
            <h2 className="text-5xl font-extrabold">
              <span className="text-[#0A84FF]">hire</span>
              <span className="text-[#FF7A00]">loop</span>
            </h2>

            <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>

            <div className="mt-16 flex gap-3">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition hover:bg-[#4F46E5]"
              >
                <LogoFacebook className="h-5 w-5" />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md  bg-white/10 transition hover:bg-[#4F46E5]"
              >
                <LogoGithub />
              </Link>

              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 transition hover:bg-[#4F46E5]"
              >
                <LogoLinkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-6 text-lg font-medium text-[#635BFF]">Product</h3>

            <ul className="space-y-4 text-white/50">
              <li>
                <Link href="#">Job discovery</Link>
              </li>
              <li>
                <Link href="#">Worker AI</Link>
              </li>
              <li>
                <Link href="#">Companies</Link>
              </li>
              <li>
                <Link href="#">Salary data</Link>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-medium text-[#635BFF]">
              Navigations
            </h3>

            <ul className="space-y-4 text-white/50">
              <li>
                <Link href="#">Help center</Link>
              </li>
              <li>
                <Link href="#">Career library</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-lg font-medium text-[#635BFF]">
              Resources
            </h3>

            <ul className="space-y-4 text-white/50">
              <li>
                <Link href="#">Brand Guideline</Link>
              </li>
              <li>
                <Link href="#">Newsroom</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row">
          <p>Copyright 2024 — Programming Hero</p>

          <div className="flex gap-3">
            <Link href="#">Terms & Policy</Link>
            <span>-</span>
            <Link href="#">Privacy Guideline</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
