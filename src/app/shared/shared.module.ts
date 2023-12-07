import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerComponent } from './tracker/tracker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { RouterModule } from '@angular/router';
import { FoodDetailComponent } from './tracker/food-log/food-detail/food-detail.component';
import { FoodListComponent } from './tracker/food-log/food-list/food-list.component';
import { FoodLogComponent } from './tracker/food-log/food-log/food-log.component';
import { FoodStartComponent } from './tracker/food-log/food-start/food-start.component';
import { FoodService } from './tracker/food-log/food-log/food.service';
import { IngredientService } from './tracker/food-log/ingredient.service';
import { FoodLogRoutingModule } from './tracker/food-log/food-log/food-log-routing.module';


@NgModule({
  declarations: [
    TrackerComponent,
    FoodLogComponent,
    FoodListComponent,
    FoodDetailComponent,
    FoodStartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'tracker',
        component: TrackerComponent,
      },
    ]),
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#f37c7c",
      "outerStrokeGradientStopColor": "#f37c7c",
      "innerStrokeColor": "#f2edf0",
      "innerStrokeWidth": 10,
      "title": "Kcal",
      titleColor: "#f37c7c",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "startFromZero": false,
      "lazy": true}),
      FoodLogRoutingModule
  ],
  exports: [
    TrackerComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgCircleProgressModule,

  ],
  providers: [FoodService, IngredientService]
})
export class SharedModule { }
