'use client'
import { useEffect, useState, useRef } from 'react'; 
import { AccessCards } from '@/components/helper/AccessCards';
import { Experience } from '../helper/Experience';

export function WorkExp() {
  const sectionRef = useRef(null);
  const [sectionHeight, setSectionHeight] = useState('100vh');

  return (
    <div id="experience" 
      className="min-h-screen w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <p className="text-2xl md:text-4xl lg:text-7xl text-black font-bold text-center dark:text-white pb-6">
          Work Experience
        </p>
        <br/>
        <div className='flex flex-row justify-center w-full h-screen'>
          <div className='w-2/5'>
              <AccessCards />
          </div>
          <div className='w-3/5 overflow-y-scroll hide-scrollbar h-[90%]'>
            <Experience />
          </div>
        </div>
    </div>
  );
}