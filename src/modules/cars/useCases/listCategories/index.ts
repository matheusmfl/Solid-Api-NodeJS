import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

const categoriesRepository = new CategoriesRepository()
export const listCategoryUseCase = new ListCategoriesUseCase(
  categoriesRepository,
)
export const listCategoryController = new ListCategoriesController(
  listCategoryUseCase,
)
