import { Specification } from "../../models/Specification";
import {
  ICreateSpeficificationDTO,
  ISpecificationsRepository,
} from "../ISpecifications.repository";

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Array<Specification> = new Array<Specification>();

  public create({ name, description }: ICreateSpeficificationDTO): void {
    const specification: Specification = new Specification();

    Object.assign(specification, {
      name,
      description,
      createdAt: new Date(),
    });

    this.specifications.push(specification);

    this.specifications;
  }

  public findByName(name: string): Specification {
    return this.specifications.find(
      (specification) => specification.name === name
    )!;
  }
}
