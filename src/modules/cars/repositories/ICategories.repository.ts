import { Category } from "../models/Category";

export interface ICategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findByName(name: string): Category;
  findAll(): Array<Category>;
  create(categoryDTO: ICategoryDTO): void;
}
