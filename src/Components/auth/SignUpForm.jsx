/** @format */

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { ArrowLeft, Check } from "@gravity-ui/icons";


export default function SignUpForm() {
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
      const res = await fetch("/api/auth/sign-up/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
        return;
      }

      setSuccess("Account created successfully.");
      e.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setError(error.message || "Failed to create account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 py-8 pt-26  text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-600/10 via-transparent to-violet-600/10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md"
      >
        <Card className="border border-white/10 bg-black/50 backdrop-blur-xl ">
          {/* Header with Back Link */}
          <div className="mb-8 flex items-center justify-between px-6 pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </div>

          {/* Logo & Title */}
          <div className="mb-8 px-6 text-center">
           
            <h1 className="text-2xl font-bold text-white">Create Account</h1>
            <p className="mt-2 text-sm text-zinc-400">Join HireLoop today</p>
          </div>

          {/* Error/Success Messages */}
          {error && (
            <div className="mx-6 mb-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
              {error}
            </div>
          )}

          {success && (
            <div className="mx-6 mb-4 rounded-lg border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300">
              {success}
            </div>
          )}

          {/* Form */}
          <Form
            className="flex flex-col gap-4 px-6 pb-6"
            onSubmit={handleSubmit}
            render={(props) => <form {...props} />}
          >
            <TextField isRequired name="name" type="text">
              <Label>Full Name</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Invalid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>

            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "At least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Need 1 uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Need 1 number";
                }
                return null;
              }}
            >
              <Label>Password</Label>
              <Input placeholder="••••••••" />
              <Description>Min 8 chars, 1 uppercase, 1 number</Description>
              <FieldError />
            </TextField>

            <Button
              type="submit"
              isLoading={loading}
              className="mt-4 w-full bg-blue-600 font-semibold text-white hover:bg-blue-700"
              endContent={!loading ? <Check className="h-4 w-4" /> : null}
            >
              {loading ? "Creating..." : "Create Account"}
            </Button>
          </Form>

          {/* Divider */}
          <div className="my-4 flex items-center gap-3 px-6">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs text-zinc-500">or</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Google Button */}
          <div className="px-6 pb-6">
            <Button
              variant="bordered"
              className="w-full border-white/10 text-white"
            >
              Continue with Google
            </Button>
          </div>

          {/* Sign In Link */}
          <div className="border-t border-white/10 px-6 py-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/auth/signin"
              className="font-semibold text-blue-400 hover:text-blue-300"
            >
              Sign In
            </Link>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
