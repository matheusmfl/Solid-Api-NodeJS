import { CategoriesRepository } from "../../repositories/CategoriesRepository"


interface IRequest {
  name: string
  description: string
}

export class CreateCategoryService {

  constructor(private categoriesRepository: CategoriesRepository) { }

  execute({ name, description }: IRequest) {
    const categoriesAlreadyExists = this.categoriesRepository.findByName(name)

    if (categoriesAlreadyExists) {
      throw new Error('Categories already exists')
    }

    this.categoriesRepository.create({ name, description })
  }
}
