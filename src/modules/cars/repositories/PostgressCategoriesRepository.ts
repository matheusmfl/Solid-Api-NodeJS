import { Category } from '../models/Category'
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository'

export class PostgressCategoriesRepository implements ICategoryRepository {
  findByName(name: string): Category | undefined {
    throw new Error('Method not implemented.')
  }

  list(): Category[] {
    throw new Error('Method not implemented.')
  }

  create({ name, description }: ICreateCategoryDTO): void {
    throw new Error('Method not implemented.')
  }
}
