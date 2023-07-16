import { Request, Response } from 'express'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

export class ListCategoriesController {
  constructor(private listCategoryUseCase: ListCategoriesUseCase) { }

  handle(req: Request, res: Response): Response {
    const allCategories = this.listCategoryUseCase.execute()
    return res.status(200).json(allCategories)
  }
}
