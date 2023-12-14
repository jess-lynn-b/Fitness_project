import { Injectable } from "@angular/core";

import { Food } from './food.model';
import { Subject } from "rxjs";


@Injectable()
export class FoodService {
  FoodChanged = new Subject<Food[]>();

  private foods: Food[] = [
    new Food(
      'Carne Asada Tacos',
      300,
      "Delicious, did not feel full after eating but am satiated"
    )
  ];

  getFoods() {
    return this.foods.slice();
  }

  getFood(index: number) {
    return this.foods[index];
  }

  addFood(food: Food) {
    this.foods.push(food);
    this.FoodChanged.next(this.foods.slice());
  }

  updateFood(index: number, newFood: Food) {
    this.foods[index] = newFood;
    this.FoodChanged.next(this.foods.slice());
  }

  deleteFood(index: number) {
    this.foods.splice(index, 1);
    this.FoodChanged.next(this.foods.slice());
  }
}
