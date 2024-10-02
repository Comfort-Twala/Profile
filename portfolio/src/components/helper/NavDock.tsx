'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconPresentationAnalytics,
  IconMessageQuestion,
  IconDeviceMobileMessage,
} from "@tabler/icons-react";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

export function NavDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    
    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Work Experience",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
    {
      title: "Projects",
      icon: (
        <IconPresentationAnalytics className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Testimonials",
      icon: (
        <IconMessageQuestion className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#testimonials",
    },

    {
      title: "Contact",
      icon: (
        <IconDeviceMobileMessage className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "Theme",
      icon: (
        <ThemeSwitch />
      ),
      href: "#",
    },
  ];
  return (
    <div className="fixed md:flex md:justify-center md:bottom-4 bottom-8 md:left-1/2 left-auto right-8 md:transform md:-translate-x-1/2 translate-x-0 z-50">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
