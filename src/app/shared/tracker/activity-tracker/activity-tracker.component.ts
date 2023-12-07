import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';
import { Exercise } from './exercise.model';


@Component({
  selector: 'app-activity-tracker',
  templateUrl: './activity-tracker.component.html',
  styleUrls: ['./activity-tracker.component.css'],
})
export class ActivityTrackerComponent {
  exercise: Exercise = { name: '', notes: '', caloriesBurned: 0 };

  constructor(private activityService: ActivityService) {}

  addActivity(): void {
    this.activityService.addActivity(this.exercise);
    this.exercise = { name: '', notes: '', caloriesBurned: 0 };
  }
}

