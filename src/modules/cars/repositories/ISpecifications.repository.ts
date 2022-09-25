import { Specification } from "../models/Specification";

export interface ICreateSpeficificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationsRepository {
  create(specification: ICreateSpeficificationDTO): void;
  findByName(name: string): Specification;
}
