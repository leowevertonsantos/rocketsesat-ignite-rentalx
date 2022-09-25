import { Request, Response } from "express";
import { CreateCategoryUsecase } from "./CreateCategory.usecase";

export class CreateCategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUsecase) {}

  handle(request: Request, response: Response) {
    const { name, description } = request.body;

    this.createCategoryUseCase.execute({ name, description });

    return response.status(201).send();
  }
}
