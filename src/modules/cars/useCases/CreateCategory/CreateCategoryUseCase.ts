import { CategoriesRepository } from '../../repositories/CategoriesRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  private categoriesRepository: CategoriesRepository
  constructor(categoriesRepository: CategoriesRepository) {
    this.categoriesRepository = categoriesRepository
  }

  execute({ name, description }: IRequest) {
    const categoriesAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoriesAlreadyExists) {
      throw new Error('Categories already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
