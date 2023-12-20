import { Component } from '@angular/core';
import { ActivityService } from './activity.service';
import { Exercise } from '../../shared/models/exercise.model';
import { HTTPService } from 'src/app/shared/http/http.service';

@Component({
  selector: 'app-activity-tracker',
  templateUrl: './activity-tracker.component.html',
  styleUrls: ['./activity-tracker.component.css'],
})
export class ActivityTrackerComponent {
  exercise: Exercise = { name: '', notes: '', caloriesBurned: 0 };

  constructor(
    private activityService: ActivityService,
    private httpService: HTTPService
  ) {}

  addActivity() {
    this.activityService.addActivity(this.exercise);
    this.httpService.saveActivityToFirebase();
    this.exercise = { name: '', notes: '', caloriesBurned: 0 };
  }
}
