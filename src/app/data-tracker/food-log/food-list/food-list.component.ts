import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css'],
  providers: [FoodService],
})
export class FoodListComponent implements OnInit {

  title: string = '';
  calories: number = 0;
  notes: string = '';
  date: Date = new Date();
  category: null | string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private foodService: FoodService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if(params.get('category')){
        this.category = params.get('category');
        console.log(this.category);
        }
        });
  }

  onCreateFood() {

    this.foodService.addFood({
      title: this.title,
      calories: this.calories,
      notes: this.notes,
      category: this.category
    });

    // this.router.navigate(['/data-tracker/food-log']);
  }

  onCancel() {
    this.router.navigate(['/data-tracker/food-log']);
  }

}
