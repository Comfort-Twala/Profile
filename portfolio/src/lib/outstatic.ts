import { load } from 'outstatic/server'
import { OstDocument } from 'outstatic'

type Collection = 'Projects' | 'posts'

// Helper function to capitalize first letter
function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export async function getProfileData() {
  const db = await load()

  // get content for the homepage
  // const page = await db
  //   .find({ collection: 'pages', slug: 'home' }, ['content'])
  //   .first()

  // convert markdown to html
  // const content = await markdownToHtml(page.content)

  // get all posts. Example of fetching a specific collection
  const allProjects = await db
    .find({ collection: 'projects', status: 'published' })
    .sort({ publishedAt: -1 })
    .toArray()

  // get remaining collections
  const collections = await db
    .find(
      {
        // $nor is an operator that means "not or"
        $nor: [{ collection: 'posts' }, { collection: 'pages' }],
        status: 'published'
      },
      [
        'collection',
        'title',
        'publishedAt',
        'slug',
        'coverImage',
        'description'
      ]
    )
    .sort({ publishedAt: -1 })
    .limit(3)
    .toArray()

  // group remaining collections by collection
  const otherCollections = collections.reduce<{
    [key: string]: (typeof collections)[0][]
  }>((acc, item) => {
    if (!acc[item.collection]) {
      acc[item.collection] = []
    }

    acc[item.collection].push(item)

    return acc
  }, {})

  return {
    allProjects,
    otherCollections
  }
}