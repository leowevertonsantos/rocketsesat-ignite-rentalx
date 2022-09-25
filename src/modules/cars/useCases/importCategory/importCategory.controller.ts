import { Request, Response } from "express";
import { ImportCategoryUsecase } from "./importCategory.usecase";

export class ImportCategoryController {
  constructor(private readonly importCategoryUse: ImportCategoryUsecase) {}
  handle(request: Request, response: Response) {
    const { file } = request;
    this.importCategoryUse.execute(file!);

    return response.send();
  }
}
