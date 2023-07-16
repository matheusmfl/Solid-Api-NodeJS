import { Request, Response, Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/CreateCategory'
import { listCategoryController } from '../modules/cars/useCases/listCategories'

const categoriesRoutes = Router()

categoriesRoutes.post('/', (req: Request, res: Response) => {
  return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req: Request, res: Response) => {
  return listCategoryController.handle(req, res)
})

export { categoriesRoutes }
