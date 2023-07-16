import { Request, Response, Router } from 'express'
import { CategoriesReposity } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()
const categoriesReposity = new CategoriesReposity()

categoriesRoutes.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body

  categoriesReposity.create({ name, description })
  return res.status(201).send()
})

export { categoriesRoutes }
