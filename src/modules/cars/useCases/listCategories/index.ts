import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

const categoriesRepository = CategoriesRepository.getInstance()
export const listCategoryUseCase = new ListCategoriesUseCase(
  categoriesRepository,
)
export const listCategoryController = new ListCategoriesController(
  listCategoryUseCase,
)
