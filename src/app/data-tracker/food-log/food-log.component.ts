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

  showModal: boolean = false;

  foodLogs: Food[] = [];

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
    // this.showModal = true;

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

}
