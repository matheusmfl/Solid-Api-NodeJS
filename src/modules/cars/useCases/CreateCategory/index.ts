import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

const categoriesRepository = new CategoriesRepository()
export const createCategoryUseCase = new CreateCategoryUseCase(
  categoriesRepository,
)
export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
)
