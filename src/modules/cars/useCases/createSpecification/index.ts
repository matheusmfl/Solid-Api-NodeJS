import { SpecificationRepository } from "../../repositories/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationsRepository = new SpecificationRepository()

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationsRepository)

export const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)