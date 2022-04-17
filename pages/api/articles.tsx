import { getAllArticles } from '../../lib/api'
import { Request, Response } from 'express'

export default async function getArticles(
  req: Request,
  res: Response
): Promise<void> {
  const data = await getAllArticles()
  res.status(200).json(data)
}
