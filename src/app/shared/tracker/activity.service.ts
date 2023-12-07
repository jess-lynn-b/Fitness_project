import { Injectable } from '@angular/core';
import { Exercise } from './activity-tracker/exercise.model';


@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activities: Exercise[] = [];

  getActivities(): Exercise[] {
    return this.activities;
  }

  addActivity(activity: Exercise): void {
    this.activities.push(activity);
  }
}
