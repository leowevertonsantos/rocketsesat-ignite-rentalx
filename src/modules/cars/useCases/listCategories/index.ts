import { CategoriesRepository } from "../../repositories/implementations/Categories.repository";
import { ListCategoriesController } from "./ListCategories.controller";
import { ListCategoriesUsecase } from "./ListCategories.usecase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUsecase = new ListCategoriesUsecase(categoriesRepository);

export const listCategoriesController = new ListCategoriesController(
  listCategoriesUsecase
);
