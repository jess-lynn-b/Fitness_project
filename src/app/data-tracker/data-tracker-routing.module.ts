import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTrackerComponent } from './data-tracker.component';
import { FoodLogComponent } from './food-log/food-log/food-log.component';

const routes: Routes = [{ path: '', component: DataTrackerComponent, children: [{path: 'food-log', component: FoodLogComponent }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTrackerRoutingModule { }
