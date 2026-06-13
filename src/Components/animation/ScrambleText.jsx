/** @format */

"use client";
import { useState, useEffect } from "react";

export default function ScrambleText({ text, speed = 40 }) {
  const [displayText, setDisplayText] = useState(text);

  // A heavier set of digital/glitch symbols
  const glitchChars = "X█▓░▄▀■▲▼◀▶█▒▒░░01_--ABCDqwertyuioopQWERTYUIOP+=*&%$#@!?[ ]";

  useEffect(() => {
    // Break the text down into an array of characters
    const textArray = text.split("");

    // Create an array tracking which character indices are locked into their final state
    // Spaces are auto-locked so they don't jump around violently
    let lockedIndices = textArray.map((char) => char === " ");

    let interval = null;
    let cycles = 0;
    const maxCycles = text.length * 3; // Fallback to force finish if needed

    interval = setInterval(() => {
      // 1. Randomly pick 1 or 2 indices to lock into place on this frame
      for (let i = 0; i < 2; i++) {
        const unlocked = lockedIndices
          .map((locked, idx) => (!locked ? idx : null))
          .filter((idx) => idx !== null);

        if (unlocked.length > 0) {
          const randomIdx =
            unlocked[Math.floor(Math.random() * unlocked.length)];
          lockedIndices[randomIdx] = true;
        }
      }

      // 2. Build the scrambled string for this frame
      const currentScramble = textArray
        .map((char, index) => {
          if (lockedIndices[index]) {
            return char; // True character revealed
          }
          // Return a completely chaotic glitch character
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        })
        .join("");

      setDisplayText(currentScramble);
      cycles++;

      // 3. Check if all characters are solved or max cycles reached
      if (lockedIndices.every(Boolean) || cycles >= maxCycles) {
        setDisplayText(text); // Ensure final state is 100% correct
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayText}</span>;
}
