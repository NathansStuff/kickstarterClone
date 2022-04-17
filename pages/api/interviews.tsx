import { getAllInterviews } from '../../lib/api'
import { Request, Response } from 'express'

export default async function getInterviews(
  req: Request,
  res: Response
): Promise<void> {
  const data = await getAllInterviews()
  res.status(200).json(data)
}
