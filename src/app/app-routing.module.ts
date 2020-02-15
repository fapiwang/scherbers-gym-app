import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GymbuddiesComponent } from './gymbuddies/gymbuddies.component';
import { PlansComponent } from './plans/plans.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gymbuddies', component: GymbuddiesComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'merchandise', component: MerchandiseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
