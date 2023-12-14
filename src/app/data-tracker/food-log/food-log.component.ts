import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from './food.service';
import { Food } from './food.model';

@Component({
  selector: 'app-food-log',
  templateUrl: './food-log.component.html',
  styleUrls: ['./food-log.component.css']
})

export class FoodLogComponent implements OnInit {

  constructor(
    private foodService: FoodService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.foodService.FoodChanged.subscribe((foodLogs: Food[]) => {
      console.log(foodLogs);
    })
  }

  onAddFood(category: string) {
    this.router.navigate(['add-log', category ], { relativeTo: this.route });
  }

  getFoodByCategory(category: string) {
    return this.foodService.getFoodsByCategory(category);
  }
}
