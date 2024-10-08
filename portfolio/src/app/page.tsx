import { getProfileData } from '@/lib/outstatic'
import { NavDock } from '@/components/helper/NavDock';
import { Hero } from '@/components/sections/Hero';
import { About} from '@/components/sections/About';
import { WorkExp } from '@/components/sections/WorkExp';


export default async function HomePage() {
  const { allProjects, otherCollections } = await getProfileData();
  
  console.log('Projects:', allProjects); // Check if data is coming through

  return (
    <>
      <NavDock/>
      <Hero />
      <About />
      <WorkExp />
    </>
    // <div>
    //   <h1>Wola Wola Bab' Twala!</h1>
    //   <h1>Recent Projects</h1>
    //   {allProjects.length > 0 ? (
    //     allProjects.map((project, index) => (
    //       <div key={`${project.slug}-${index}`}>
    //         <h2>{project.title}</h2>
    //       </div>
    //     ))
    //   ) : (
    //     <p>No projects available</p>
    //   )}
    // </div>
  );
}