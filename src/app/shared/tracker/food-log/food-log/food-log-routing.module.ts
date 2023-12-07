import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodLogComponent } from './food-log.component';

const routes: Routes = [
  {
    path: 'tracker/food-log',
    component: FoodLogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodLogRoutingModule { }
