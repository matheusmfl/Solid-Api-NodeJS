import { Request, Response, Router } from 'express'
import { CategoriesRepository } from '../repositories/CategoriesRepository'
import { CreateCategoryService } from '../services/CreateCategoryService'

const categoriesRoutes = Router()
const categoriesReposity = new CategoriesRepository()

categoriesRoutes.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body

  const createCategoryService = new CreateCategoryService(categoriesReposity)
  createCategoryService.execute({ name, description })

  return res.status(201).send()
})

categoriesRoutes.get('/', (req: Request, res: Response) => {
  const allCategories = categoriesReposity.list()

  return res.status(200).json(allCategories)
})

export { categoriesRoutes }
