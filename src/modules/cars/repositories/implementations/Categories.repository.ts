import { Category } from "../../models/Category";
import { ICategoriesRepository, ICategoryDTO } from "../ICategories.repository";

export class CategoriesRepository implements ICategoriesRepository {
  private static instance: CategoriesRepository;

  private categories: Array<Category>;

  private constructor() {
    this.categories = new Array<Category>();
  }

  public static getInstance() {
    if (!CategoriesRepository.instance) {
      CategoriesRepository.instance = new CategoriesRepository();
    }
    return CategoriesRepository.instance;
  }

  public create({ name, description }: ICategoryDTO): void {
    const category: Category = new Category();

    Object.assign(category, {
      name,
      description,
      createdAt: new Date(),
    });

    this.categories.push(category);
  }

  public findAll(): Array<Category> {
    return this.categories;
  }

  public findByName(name: string): Category {
    return this.categories.find((category) => category.name === name)!;
  }
}
