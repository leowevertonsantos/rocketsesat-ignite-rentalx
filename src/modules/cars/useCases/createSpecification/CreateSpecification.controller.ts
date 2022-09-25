import { Request, Response } from "express";
import { CreateSpecificationUsecase } from "./CreateSpecification.usecase";

export class CreateSpecificationController {
  constructor(
    private readonly createSpecificationUsecase: CreateSpecificationUsecase
  ) {}
  handle(request: Request, response: Response) {
    const { name, description } = request.body;
    this.createSpecificationUsecase.execute({ name, description });

    return response.status(201).send();
  }
}
