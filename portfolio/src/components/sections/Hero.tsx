import React from "react";
import { FlipWords } from "../ui/flip-words";

export function Hero() {
  const words = ["Fullstack Software Developer", "Problem Solver", "BSc Computer Science & Business Computing", "Freelancer"];
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Comfort Twala <br />
            <FlipWords words={words} /> <br />
            <p className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 mt-4">
                Bringing Comfort to Complex Problems
            </p>
        </p>
    </div>
  );
}
