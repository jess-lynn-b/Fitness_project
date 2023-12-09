import { Component } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent {

  height: number = 0;
  weight: number = 0;
  targetWeight: number = 0;
  estimatedTime: number = 0;

  calculateTime() {
    
    const weightToLose = this.weight - this.targetWeight;
    const averageWeightLossPerWeek = 0.5; // Adjust as needed
    this.estimatedTime = weightToLose / averageWeightLossPerWeek;
  }
}
