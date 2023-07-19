import { ICategoryRepository } from "../../repositories/implementations/ICategoriesRepository"


interface IRequest {
  name: string
  description: string
}

export class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoryRepository) {
  }

  execute({ name, description }: IRequest) {
    const categoriesAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoriesAlreadyExists) {
      throw new Error('Categories already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
