import { Injectable } from "@angular/core";

import { Food } from './food.model';
import { BehaviorSubject, Subject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  FoodChanged = new BehaviorSubject<Food[]>([]);
  startedEditing = new Subject<number>();

  // private foods: Food[] = [];
  private foods: any[] = [];
  foodLogs: Food[] = [];

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
    this.foodLogs.push(food);
    this.FoodChanged.next(this.foods.slice());
  }

  totalCaloriesLogged() {
    let totalCalories = 0;

    for (let i = 0; i < this.foodLogs.length; i++) {
      totalCalories += this.foodLogs[i].calories;
    }

    return totalCalories;
  }
  // getFoodId(id: number) {
  //   const foundFood = this.foods.find((food) => food.id === id);
  //   return foundFood;

  // }

  // updateFood(index: number, updatedFood: Food): void {
  //   const currentMeal = this.foods[index];
  //   if (currentMeal) {
  //     this.foods[index] = {
  //       ...currentMeal, ...updatedFood };
  //       this.FoodChanged.next(this.foods.slice());
  //     }
  //   }


  // editFood(index: number, editedFood: Food) {
  //   if (index >= 0 && index < this.foods.length) {
  //     const existingFood = this.foods.find(food => food.id === editedFood.id);

  //     if (existingFood) {
  //       Object.assign(existingFood, editedFood);
  //       this.FoodChanged.next(this.foods.slice());
  //     }
  //   }
  // }

  // deleteFood(index: number) {
  //   if(index >= 0 && index < this.foods.length)
  //     this.foods.splice(index, 1);
  //     this.FoodChanged.next(this.foods.slice());
  // }
  // setFood(food: Food[]) {
  //   this.foods = food;
  //   this.FoodChanged.next(this.foods.slice());
  // }
}

