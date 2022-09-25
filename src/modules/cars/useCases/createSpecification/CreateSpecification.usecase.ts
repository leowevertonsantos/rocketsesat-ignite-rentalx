import { Specification } from "../../models/Specification";
import { ISpecificationsRepository } from "../../repositories/ISpecifications.repository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateSpecificationUsecase {
  constructor(private readonly repository: ISpecificationsRepository) {}

  public execute({ name, description }: IRequest): void {
    const specificationFound = this.repository.findByName(name);

    if (specificationFound) {
      throw new Error(`${Specification.name} "${name}" already exists`);
    }

    this.repository.create({ name, description });
  }
}
