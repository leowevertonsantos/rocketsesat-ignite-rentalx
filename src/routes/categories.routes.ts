import Router from "express";
import multer from "multer";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";

const upload = multer({
  dest: "./tmp",
});

const categoriesRoutes = Router();

/**
 * It endpoint create a new Category
 */
categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

/**
 * It list all categories inserted
 */
categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

/**
 * Import file with Multer lib
 */
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
