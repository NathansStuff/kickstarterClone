import { getAllProjects } from '../../lib/api'
import { Request, Response } from 'express'

export default async function getProjects(
  req: Request,
  res: Response
): Promise<void> {
  const data = await getAllProjects()
  res.status(200).json(data)
}
