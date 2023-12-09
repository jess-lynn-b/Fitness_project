import { Injectable } from "@angular/core";

import { Food } from './food.model';
import { Subject } from "rxjs";
import { Ingredient } from "../ingredient.model";


@Injectable()
export class FoodService {
  FoodChanged = new Subject<Food[]>();

  private foods: Food[] = [
    new Food(
      1,
      'Carne Asada Tacos',
      2,
      300,
      'https://images.pexels.com/photos/8999152/pexels-photo-8999152.jpeg?auto=compress&cs=tinysrgb&w=1600',
    [
      new Ingredient('Meat', 1, 'lbs'),
      new Ingredient('Corn Tortillas', 2, 'pieces'),
      new Ingredient('Salsa', 2, 'tbsp'),
      new Ingredient('Onion', 2, 'tbsp'),
      new Ingredient('Cilantro', 2, 'tbsp'),
      new Ingredient('Lime', 1, 'piece')
    ]),
    new Food(
      2,
      'Ramen Bowl',
      1,
      600,
      'https://images.pexels.com/photos/15085069/pexels-photo-15085069/free-photo-of-food-restaurant-dinner-lunch.jpeg?auto=compress&cs=tinysrgb&w=1600',
      [
        new Ingredient('Noodles', 1, 'package'),
        new Ingredient('Eggs', 1, 'piece'),
        new Ingredient('Chicken', 1, 'cup diced'),
        new Ingredient('Broth', 2, 'cups'),
        new Ingredient('Green Onion', 1, 'tbsp'),
        new Ingredient('Seaweed', 1, 'piece')
      ])
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
