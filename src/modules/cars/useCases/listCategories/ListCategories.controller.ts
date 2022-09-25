import { Request, Response } from "express";
import { Category } from "../../models/Category";
import { ListCategoriesUsecase } from "./ListCategories.usecase";

export class ListCategoriesController {
  constructor(private readonly listCategoriesUsecase: ListCategoriesUsecase) {}

  handle(request: Request, response: Response) {
    const categories: Category[] = this.listCategoriesUsecase.execute();

    return response.status(200).json(categories);
  }
}
