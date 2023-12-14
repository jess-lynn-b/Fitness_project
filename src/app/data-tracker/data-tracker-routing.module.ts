import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTrackerComponent } from './data-tracker.component';
import { FoodLogComponent } from './food-log/food-log.component';
import { ActivityTrackerComponent } from './activity-tracker/activity-tracker.component';
import { TrackerComponent } from './tracker/tracker.component';
import { FoodListComponent } from './food-log/food-list/food-list.component';

const routes: Routes = [
  {
    path: '',
    component: DataTrackerComponent, children: [
      {
        path: 'food-log',
        component: FoodLogComponent,
        children: [
          {
            path: 'food-list',
            component: FoodListComponent
          },
        ],
      },
      {
        path: 'activity-tracker', component: ActivityTrackerComponent
      },
      {
        path: 'tracker', component: TrackerComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTrackerRoutingModule { }
