import { Category } from '../models/Category'
import { Specification } from '../models/Specification'
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository'

export class CategoriesRepository implements ICategoryRepository {
  private categories: Category[]

  constructor() {
    this.categories = []
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category()
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    })
    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Specification | undefined {
    const category = this.categories.find((category) => category.name === name)

    return category
  }
}
