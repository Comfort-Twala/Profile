'use client'
import { useEffect, useState } from 'react'
import { OstDocument } from 'outstatic'

export default function HomePage() {
  const [projects, setProjects] = useState<OstDocument[]>([])
  // const [posts, setPosts] = useState<OstDocument[]>([])

  useEffect(() => {
    async function fetchContent() {
      const projectsRes = await fetch('/api/Projects')
      const projectsData = await projectsRes.json()
      setProjects(projectsData)

      // const postsRes = await fetch('/api/posts')
      // const postsData = await postsRes.json()
      // setPosts(postsData)
    }
    fetchContent()
  }, [])

  return (
    <div>
      <h1>Wola Wola Bab' Twala!</h1>
      <h1>Recent Projects</h1>
      {projects.map((project) => (
        <div key={project.slug}>{project.title}</div>
      ))}

      {/* <h1>Recent Blog Posts</h1> */}
      {/* {posts.map((post) => ( */}
        {/* <div key={post.slug}>{post.title}</div> */}
      {/* ))} */}
    </div>
  )
}