import { Component, OnInit } from '@angular/core';
import { FoodService } from '../data-tracker/food-log/food.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private foodService: FoodService
  ) {}

  ngOnInit(): void {

  }

  // sampleUserimg = 'https://images.pexels.com/photos/18554689/pexels-photo-18554689/free-photo-of-a-street-at-night-photographed-in-long-exposure.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load';

  calculateProgress(): number {
    const totalRecommendedCalories = 2000;
    let currentCalorieTotal = 0;

    const foodLogs = this.foodService.getFoods();
    for(let i in foodLogs) {
      currentCalorieTotal += foodLogs[i].calories;
    }

    console.log(foodLogs);
    return currentCalorieTotal / totalRecommendedCalories * 100;
  }

  amountCaloriesConsumed():string {
    return this.foodService.totalCaloriesLogged().toString();
  }
}
