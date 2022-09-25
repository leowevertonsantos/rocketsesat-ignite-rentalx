import { CategoriesRepository } from "../../repositories/implementations/Categories.repository";

export class ListCategoriesUsecase {
  constructor(private readonly repository: CategoriesRepository) {}

  execute() {
    return this.repository.findAll();
  }
}
