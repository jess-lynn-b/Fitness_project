import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrackerComponent } from './data-tracker/tracker/tracker.component';


const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'signup',
    loadChildren: () => import('./auth/pages/signup/signup.module').then ((m) => m. SignupModule),
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule) },

  { path: 'data-tracker', loadChildren: () => import('./data-tracker/data-tracker.module').then(m => m.DataTrackerModule) },
  { path: '', loadChildren: () => import('./public/public.module').then(m => m.PublicModule) }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
