import { Request, Response, Router } from 'express'
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository'
import { createCategoryController } from '../modules/cars/useCases/CreateCategory'

const categoriesRoutes = Router()
const categoriesReposity = new CategoriesRepository()

categoriesRoutes.post('/', (req: Request, res: Response) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req: Request, res: Response) => {
  const allCategories = categoriesReposity.list()

  return res.status(200).json(allCategories)
})

export { categoriesRoutes }
