import { NextApiRequest, NextApiResponse } from 'next'
import { getDocumentBySlug } from '../../../lib/outstatic'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { collection, slug } = req.query
      const document = await getDocumentBySlug(collection as 'projects' | 'posts', slug as string)
      if (document) {
        res.status(200).json(document)
      } else {
        res.status(404).json({ error: 'Document not found' })
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching document' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}