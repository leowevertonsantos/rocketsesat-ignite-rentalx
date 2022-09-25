import { ICategoriesRepository } from "../../repositories/ICategories.repository";

interface IRequest {
  name: string;
  description: string;
}

export class CreateCategoryUsecase {
  constructor(private readonly repository: ICategoriesRepository) {}

  public execute({ name, description }: IRequest) {
    const categoryFound = this.repository.findByName(name);

    if (categoryFound) {
      throw new Error(`Category "${name}" already exists`);
    }

    this.repository.create({ name, description });
  }
}
