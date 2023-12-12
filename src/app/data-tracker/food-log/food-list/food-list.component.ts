import { Component } from '@angular/core';
import { Food } from '../food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {

  title = '';
  calories = '';
  notes = '';

  constructor(
    private foodService: FoodService) {}

  onCreateFood() {
    const food: Food = {
      name: this.title,
      calories: 0,
      notes: this.notes
    };
  }
}
