import { CategoriesRepository } from "../../repositories/implementations/Categories.repository";
import { ImportCategoryController } from "./importCategory.controller";
import { ImportCategoryUsecase } from "./importCategory.usecase";

const categoryRepository = CategoriesRepository.getInstance();
const importCategoryUsecase = new ImportCategoryUsecase(categoryRepository);

export const importCategoryController = new ImportCategoryController(
  importCategoryUsecase
);
