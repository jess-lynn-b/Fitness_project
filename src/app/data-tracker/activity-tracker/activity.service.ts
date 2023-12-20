import { Injectable } from '@angular/core';
import { Exercise } from '../../shared/models/exercise.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activities: Exercise[] = [];

  activityListChanged = new Subject<Exercise[]>();
  constructor(){}

  getActivities(): Exercise[] {
    return this.activities.slice();
  }

  addActivity(newActivity: Exercise) {
    this.activities.push(newActivity);
    this.activityListChanged.next(this.activities.slice());
  }
}
