'use client'

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
    IconInfoSquareRounded,
    IconSchool,
    IconTool,
    IconCode,
    IconDeviceDesktopAnalytics
} from "@tabler/icons-react";
import { Bio } from "@/components/helper/Bio";
import { Exp } from "@/components/helper/Exp";
import ContributionGraph from "@/components/helper/ContribGraph";
import { Technologies } from "@/components/helper/Technologies";
import { Uni } from "@/components/helper/Uni";

export function About() {
  return (
    <div id="about" 
      className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={(i === 0 || i === 3 ? "md:col-span-2" : i === 4 ? "md:col-span-3" : "")}
            />
          ))}
        </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Bio",
    description: "A little about me.",
    header: <Bio />,
    icon: <IconInfoSquareRounded className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "University of Cape Town",
    description: "BSc in Computer Science & Business Computing",
    header: <Uni />,
    icon: <IconSchool className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Years of Experience",
    description: "I'm just getting started...",
    header: <Exp />,
    icon: <IconTool className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Technologies",
    description: "These are what I possess in my arsenal of skills",
    header: <Technologies />,
    icon: <IconCode className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Github Contribution Graph",
    description: "Consistency is key.",
    header: <ContributionGraph userName="Comfort-Twala" />,
    icon: <IconDeviceDesktopAnalytics className="h-4 w-4 text-neutral-500" />,
  },
];
