'use client'

import React, { useState, useEffect } from "react";
import { FlipWords } from "../ui/flip-words";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { ContactModal } from "../helper/ContactModal";
import { useTheme } from "next-themes";
import Image from "next/image";
import darkPicture from "../../assests/images/trof_cutout.png"

export function Hero() {
  const words = ["Fullstack Software Developer", "Problem Solver", "Code Enthusiast", "Freelancer"];
  // Bringing Comfort to Complex Problems
  const tagline = [
    { text: "Bringing" },
    { text: "Comfort", className: "text-blue-500 dark:text-blue-500" },
    { text: "to" },
    { text: "Complex" },
    { text: "Problems..."}
  ]

  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      id="home" 
      className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-20 gap-8 lg:gap-12">
        <div className="w-full lg:w-[60%] text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold bg-clip-text text-gray-900 dark:text-gray-100 mb-4">
            Comfort Twala
          </h1>
          <FlipWords words={words} className="text-xl sm:text-2xl lg:text-4xl font-black mb-6 md:justify-center" />
          <TypewriterEffectSmooth words={tagline} className="text-lg sm:text-xl lg:text-2xl font-normal text-neutral-600 dark:text-neutral-400 mt-4"/>
          <ContactModal/>

          {/* <button className="shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
            Let's Chat!
          </button> */}
        </div>
        <div className="w-full lg:w-[40%] flex justify-center items-center mt-8 lg:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <Image
              src={resolvedTheme === 'dark' ? darkPicture : darkPicture}
              alt="Comfort Twala"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}