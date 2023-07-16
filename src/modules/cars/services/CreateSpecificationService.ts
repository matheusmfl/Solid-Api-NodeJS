import { SpecificationRepository } from '../repositories/SpecificationRepository'

interface Irequest {
  name: string
  description: string
}
export class CreateSpecificationService {
  private specificationRepository: SpecificationRepository
  constructor(specificationRepository: SpecificationRepository) {
    this.specificationRepository = specificationRepository
  }

  execute({ name, description }: Irequest): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error('Specification already Exists')
    }

    this.specificationRepository.create({ name, description })
  }
}
