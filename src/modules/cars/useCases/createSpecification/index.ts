import { SpecificationsRepository } from "../../repositories/implementations/Specification.repository";
import { CreateSpecificationController } from "./CreateSpecification.controller";
import { CreateSpecificationUsecase } from "./CreateSpecification.usecase";

const repository = new SpecificationsRepository();
const createSpecificationUsecase = new CreateSpecificationUsecase(repository);

export const createSpecificationController = new CreateSpecificationController(
  createSpecificationUsecase
);
