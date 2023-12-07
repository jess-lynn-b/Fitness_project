import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTrackerRoutingModule } from './data-tracker-routing.module';
import { DataTrackerComponent } from './data-tracker.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DataTrackerComponent
  ],
  imports: [
    CommonModule,
    DataTrackerRoutingModule,
    SharedModule
  ]
})
export class DataTrackerModule { }
