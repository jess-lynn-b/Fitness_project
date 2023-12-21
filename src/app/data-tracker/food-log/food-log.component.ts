import { Component, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from './food.service';
import { Food } from './food.model';

@Component({
  selector: 'app-food-log',
  templateUrl: './food-log.component.html',
  styleUrls: ['./food-log.component.css']
})

export class FoodLogComponent implements OnInit {

  toggleModal: EventEmitter<void> = new EventEmitter<void>();

  showFoodModal: boolean = false;
  showUpdateModal: boolean = false;

  foodLogs: Food[] = [];
  selectedFood: Food | undefined;

  constructor(
    private foodService: FoodService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.foodService.FoodChanged.subscribe((foodLogs: Food[]) => {
      this.foodLogs = foodLogs;
      console.log(foodLogs);
    })
  }

  onAddFood(category: string) {
    this.showFoodModal = true;

    this.router.navigate(['add-log', category ], { relativeTo: this.route });
  }

  getFoodByCategory(category: string) {
    return this.foodLogs.filter(food => food.category === category)
  }

  totalCaloriesLogged() {
    let totalCalories = 0;

    for (let i = 0; i < this.foodLogs.length; i++) {
      totalCalories += this.foodLogs[i].calories;
    }
    return totalCalories;
  }

  onEditFood(foodId: number) {
    this.foodService.startedEditing.next(foodId);

    const foodIndex = foodId + 1;
    // this.selectedFood = this.foodLogs.find((food) => food.id === foodId);
    this.showUpdateModal = true;

    console.log(foodId);
    this.router.navigate(['food-log','edit-log', foodIndex]);
  }

}
