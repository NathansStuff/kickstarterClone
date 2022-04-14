import { getAllUsers } from '../../lib/api'
import { Request, Response } from 'express'

export default async function getNews(
  req: Request,
  res: Response
): Promise<void> {
  const data = await getAllUsers()
  res.status(200).json(data)
}
