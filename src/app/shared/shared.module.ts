import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackerComponent } from '../data-tracker/tracker/tracker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ActivityTrackerComponent } from '../data-tracker/activity-tracker/activity-tracker.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    TrackerComponent,
    ActivityTrackerComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#f37c7c",
      "outerStrokeGradientStopColor": "paleturquoise",
      "innerStrokeColor": "#f2edf0",
      "innerStrokeWidth": 10,
      titleColor: "paleturquoise",
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
    NgCircleProgressModule,
    FooterComponent
  ],
  providers: []
})
export class SharedModule { }
