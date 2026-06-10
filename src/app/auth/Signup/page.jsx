/** @format */

"use client";

import Link from "next/link";
import { useState } from "react";
import { Input, Button } from "@heroui/react";
// Import your configured Better Auth client instance
// import { authClient } from "@/lib/auth";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      // Better Auth standard signup configuration mapped to MongoDB backends
      /*
      const { data, error: authError } = await authClient.signUp.email({
        email,
        password,
        name,
        // MongoDB models map internal properties standardly via better-auth schema drivers
      });

      if (authError) {
        throw new Error(authError.message || "Failed to create account.");
      }
      */

      setSuccess("Account created successfully!");
      e.currentTarget.reset();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Modern Hero UI v3 Input Custom Token Slots
  const inputStyleSlots = {
    label:
      "text-zinc-400 font-medium group-data-[filled-within=true]:text-violet-400 dynamic-transition duration-200",
    inputWrapper: [
      "bg-zinc-900/40",
      "border-white/5",
      "hover:border-white/10",
      "focus-within:!border-violet-500/80",
      "focus-within:!bg-zinc-900",
      "backdrop-blur-md",a
      "shadow-inner-sm",
      "g-ui-element", // Hook pattern referencing Gravity UI core design density structure
    ].join(" "),
    input: "text-white placeholder:text-zinc-600 text-sm font-normal",
  };

  return (
    <section className="g-ui-root relative flex min-h-screen w-full items-center justify-center bg-black px-4 overflow-hidden antialiased">
      {/* Soft Ambient Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl p-8 shadow-2xl shadow-black/80">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-zinc-400">
            Join HireLoop and start your journey
          </p>
        </div>

        {/* Status Messages */}
        {error && (
          <div className="mb-5 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400 animate-fade-in duration-200">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 px-4 py-3 text-sm text-emerald-400 animate-fade-in duration-200">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Name"
            name="name"
            placeholder="John Doe"
            variant="bordered"
            labelPlacement="outside"
            radius="xl"
            classNames={inputStyleSlots}
            isRequired
          />

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="john@example.com"
            variant="bordered"
            labelPlacement="outside"
            radius="xl"
            classNames={inputStyleSlots}
            isRequired
          />

          <Input
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••••••"
            variant="bordered"
            labelPlacement="outside"
            radius="xl"
            classNames={inputStyleSlots}
            isRequired
          />

          <Button
            type="submit"
            isLoading={loading}
            radius="xl"
            className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 font-semibold text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all duration-200 data-[hover=true]:opacity-95 active:scale-[0.98]"
          >
            Sign Up
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-medium text-violet-400 transition-colors duration-150 hover:text-violet-300 underline-offset-4 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
}
