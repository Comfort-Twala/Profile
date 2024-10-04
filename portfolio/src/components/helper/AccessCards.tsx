"use client";
import { CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils";
import Image from 'next/image';
import psg_logo from "@/assests/images/psg_logo.png";
import uct_logo from "@/assests/images/uct_logo.png";

export function AccessCards() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "PSG Financial Services",
    title: "Software Developer",
    logo:
      <Image 
        src={psg_logo}
        alt="psg logo"
        width={200}
        height={200}
      />,
    period: "Jan '23 - Present"
  },
  {
    id: 1,
    name: "University of Cape Town",
    title: "Tutor",
    logo:
      <Image 
        src={uct_logo}
        alt="uct logo"
        width={200}
        height={200}
      />,
    period: "Mar '21 - Nov '22"
  }
];