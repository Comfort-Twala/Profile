import { load } from 'outstatic/server'
import { OstDocument } from 'outstatic'

type Collection = 'Projects' | 'posts'

export async function getAllDocuments(collection: Collection): Promise<OstDocument[]> {
  const data = await load()
  console.log(data)
  return data.find({
    collection: collection
  }).toArray()
}

export async function getDocumentBySlug(collection: Collection, slug: string): Promise<OstDocument | null> {
  const documents = await getAllDocuments(collection)
  return documents.find((doc) => doc.slug === slug) || null
}

// Helper function to capitalize first letter
function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

// Example of a more specific query function
export async function getRecentProjects(limit: number = 5): Promise<OstDocument[]> {
  const projects = await getAllDocuments('Projects')
  return projects
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit)
}