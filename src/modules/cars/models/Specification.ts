import { v4 as uuidV4 } from "uuid";

export class Specification {
  public name!: string;
  public description!: string;
  public createdAt!: Date;
  public id!: string;

  constructor(id?: string) {
    if (!id) {
      this.id = uuidV4();
    }
  }
}
