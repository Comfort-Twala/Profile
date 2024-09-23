import { NextApiRequest, NextApiResponse } from 'next'
import { getAllDocuments } from '../../../lib/outstatic'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { collection } = req.query
      const documents = await getAllDocuments(collection as 'projects' | 'posts')
      res.status(200).json(documents)
    } catch (error) {
      res.status(500).json({ error: 'Error fetching documents' })
    }
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}