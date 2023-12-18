import { Component } from '@angular/core';

@Component({
  selector: 'app-caloric-intake',
  templateUrl: './caloric-intake.component.html',
  styleUrls: ['./caloric-intake.component.css']
})
export class CaloricIntakeComponent {
  weight: number = 0;
  height: number = 0;
  age: number = 0;
  isMale: boolean = true;
  activityFactor: number = 0;
  bmr: number = 0;
  tdee: number = 0;

  calculateCaloricIntake() {
    // Input caloric intake calculation logic here using Harris-Benedict equation
    const constant = this.isMale ? 5 : -161;
    this.bmr = 10 * this.weight + 6.25 * this.height - 5 * this.age + constant;
    this.tdee = this.bmr * this.activityFactor;
  }
}

