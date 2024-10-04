"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const technologies = [
  {
    id: 1,
    name: "Python",
    designation: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: 2,
    name: "JavaScript/TypeScript",
    designation: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 3,
    name: "C#",
    designation: "Programming Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
  },
  {
    id: 4,
    name: "Node JS",
    designation: "Runtime Environment",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 5,
    name: "React",
    designation: "Frontend Framework",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 6,
    name: "PostgreSQL / SQL",
    designation: "Query Language",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 7,
    name: "Git",
    designation: "Version Control",
    image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    id: 8,
    name: "Docker",
    designation: "Containerization",
    image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    id: 9,
    name: "RESTful API",
    designation: "APIs",
    image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    id: 10,
    name: "Linux",
    designation: "Unix Operating System",
    image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
  },  
];

export function Technologies() {
  return (
    <div className="flex flex-1 w-full justify-center items-center h-full min-h-[6rem] rounded-xl bg-gray-100 dark:bg-card">
        <div className="flex flex-row items-center justify-center w-full">
            <AnimatedTooltip items={technologies} />
        </div>
    </div>
  );
}
