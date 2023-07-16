import { Request, Response, Router } from 'express'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository'

export const specificationRoutes = Router()

const specificationRepository = new SpecificationRepository()

specificationRoutes.post('/', (req: Request, res: Response) => {
  const { name, description } = req.body
  const createSpecificationService = new CreateSpecificationService(
    specificationRepository,
  )

  createSpecificationService.execute({ name, description })

  return res.status(201).send()
})
