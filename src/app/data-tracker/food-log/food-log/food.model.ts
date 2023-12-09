import { Ingredient } from "../ingredient.model";

export class Food {
  constructor(
    public id: number,
    public name: string,
    public servings: number,
    public calories: number,
    public foodImg: string,
    public ingredients: Ingredient[]
  ) {}
}
