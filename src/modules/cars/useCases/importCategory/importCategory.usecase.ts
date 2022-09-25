import { CategoriesRepository } from "../../repositories/implementations/Categories.repository";
import { parse } from "csv-parse";
import fs from "fs";

interface IImportCategory {
  name: string;
  description: string;
}

export class ImportCategoryUsecase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute(file: Express.Multer.File) {
    const categories: IImportCategory[] = await this.loadCategory(file);

    categories.forEach((category) => {
      const categoryFound = this.categoriesRepository.findByName(category.name);

      if (!categoryFound) {
        this.categoriesRepository.create({
          name: category.name,
          description: category.description,
        });
      }
    });
  }

  private loadCategory(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const parseFile = parse();
      const categories: IImportCategory[] = [];

      stream.pipe(parseFile);

      parseFile
        .on("data", async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on("end", () => {
          resolve(categories);
          fs.promises.unlink(file.path);
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }
}
