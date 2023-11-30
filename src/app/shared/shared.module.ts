import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerComponent } from './tracker/tracker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';


@NgModule({
  declarations: [
    TrackerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
  ],
  exports: [
    TrackerComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgCircleProgressModule
  ]
})
export class SharedModule { }
