import { getProfileData } from '@/lib/outstatic'

export default async function HomePage() {
  const { allProjects, otherCollections } = await getProfileData();

  return (
    <div>
      <h1>Wola Wola Bab' Twala!</h1>
      <h1>Recent Projects</h1>
      {allProjects.map((project) => (
        <div key={project.slug}>{project.title}</div>
      ))}
    </div>
  );
}
