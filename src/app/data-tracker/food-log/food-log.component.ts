import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from './food.model';
import { FoodService } from './food.service';


@Component({
  selector: 'app-food-log',
  templateUrl: './food-log.component.html',
  styleUrls: ['./food-log.component.css']
})

export class FoodLogComponent implements OnInit {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private router: Router) { }

  ngOnInit(): void {
  }
}
