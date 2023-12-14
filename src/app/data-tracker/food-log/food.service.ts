import { Injectable } from "@angular/core";

import { Food } from './food.model';
import { BehaviorSubject, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  FoodChanged = new BehaviorSubject<Food[]>([]);

  private foods: any[] = [];
  // private foods: Food[] = [
  //   new Food(
  //     'Carne Asada Tacos',
  //     300,
  //     "Delicious, did not feel full after eating but am satiated"
  //   )
  // ];

  constructor() {}

  getFoods() {
    return this.foods.slice();
  }

  getFoodsByCategory(category: string) {
    return this.foods.filter(food => food.category === category).slice();
  }

  addFood(food: any) {
    console.log(food);
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
