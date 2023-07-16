import { Request, Response, Router } from 'express'
import { CategoriesReposity } from '../repositories/CategoriesRepository'

const categoriesRoutes = Router()
const categoriesReposity = new CategoriesReposity()

categoriesRoutes.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body

  const categoriesAlreadyExists = categoriesReposity.findByName(name)

  if (categoriesAlreadyExists) {
    return res.status(400).json({ error: 'Categories already exists ' })
  }

  categoriesReposity.create({ name, description })
  return res.status(201).send()
})

categoriesRoutes.get('/', (req: Request, res: Response) => {
  const allCategories = categoriesReposity.list()

  return res.status(200).json(allCategories)
})

export { categoriesRoutes }
