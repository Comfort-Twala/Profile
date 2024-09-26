import { getProfileData } from '@/lib/outstatic'
import { NavDock } from '@/components/NavDock';

export default async function HomePage() {
  const { allProjects, otherCollections } = await getProfileData();
  
  console.log('Projects:', allProjects); // Check if data is coming through

  return (
    <div>
      <h1>Wola Wola Bab' Twala!</h1>
      <h1>Recent Projects</h1>
      {allProjects.length > 0 ? (
        allProjects.map((project, index) => (
          <div key={`${project.slug}-${index}`}>
            <h2>{project.title}</h2>
          </div>
        ))
      ) : (
        <p>No projects available</p>
      )}
      <NavDock/>
    </div>
  );
}