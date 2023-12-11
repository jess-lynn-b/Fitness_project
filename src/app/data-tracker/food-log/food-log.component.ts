import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-food-log',
  templateUrl: './food-log.component.html',
  styleUrls: ['./food-log.component.css']
})

export class FoodLogComponent {

  constructor(
    private router: Router) { }

}
