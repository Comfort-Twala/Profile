'use client'
import { useEffect, useState, useCallback } from 'react'; 
import { AccessCards } from '@/components/helper/AccessCards';
import { Experience } from '../helper/Experience';
import Image from 'next/image';
import psg_logo from "@/assests/images/psg_logo.png";
import uct_logo from "@/assests/images/uct_logo.png";

export function WorkExp() {
  const [currentExperience, setCurrentExperience] = useState<number>(0);
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

  const handleExperienceChange = useCallback((index: number) => {
    setCurrentExperience(index);
  }, []);

  console.log("Exp: ", currentExperience);

  return (
    <div id="experience" 
      className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-2xl md:text-4xl lg:text-7xl text-black font-bold text-center dark:text-white pb-6">
          Work Experience
        </p>
        <br/>
        <div className='flex flex-row justify-center w-full h-screen'>
          <div className='w-2/5'>
              <AccessCards 
                cards={CARDS}
                currentExperience={currentExperience}
                onExperienceChange={handleExperienceChange}
              />
          </div>
          <div className='w-3/5 overflow-y-scroll hide-scrollbar h-[90%]'>
            <Experience
              currentExperience={currentExperience}
            />
          </div>
        </div>
    </div>
  );
}