import { Request, Response, Router } from 'express'
import { randomUUID } from 'node:crypto'

const categoriesRoutes = Router()

const categories = []

categoriesRoutes.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body

  const id = randomUUID()
  const category = {
    name,
    description,
    id,
  }

  categories.push(category)

  return res.status(201).send()
})

export { categoriesRoutes }
