import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTrackerRoutingModule } from './data-tracker-routing.module';
import { DataTrackerComponent } from './data-tracker.component';
import { SharedModule } from '../shared/shared.module';
import { FoodLogComponent } from './food-log/food-log.component';
import { FoodStartComponent } from './food-log/food-start/food-start.component';
import { FoodListComponent } from './food-log/food-list/food-list.component';
import { FoodDetailComponent } from './food-log/food-detail/food-detail.component';


@NgModule({
  declarations: [
    DataTrackerComponent,
    FoodLogComponent,
    FoodStartComponent,
    FoodListComponent,
    FoodDetailComponent
  ],
  imports: [
    CommonModule,
    DataTrackerRoutingModule,
    SharedModule
  ]
})
export class DataTrackerModule { }
