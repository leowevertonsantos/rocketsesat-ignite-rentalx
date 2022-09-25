import { CategoriesRepository } from "../../repositories/implementations/Categories.repository";
import { CreateCategoryController } from "./CreateCategory.controller";
import { CreateCategoryUsecase } from "./CreateCategory.usecase";

const categoriesRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUsecase(categoriesRepository);

export const createCategoryController = new CreateCategoryController(
  createCategoryUseCase
);
