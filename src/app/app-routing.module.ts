import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GymbuddiesComponent } from "./gymbuddies/gymbuddies.component";
import { PlansComponent } from "./plans/plans.component";
import { MerchandiseComponent } from "./merchandise/merchandise.component";
import { AddSessionsComponent } from "./gymbuddies/sessions/add-sessions/add-sessions.component";
import { SessionsComponent } from "./gymbuddies/sessions/sessions.component";
import { EditSessionsComponent } from "./gymbuddies/sessions/edit-sessions/edit-sessions.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "gymbuddies", component: GymbuddiesComponent },
  { path: "plans", component: PlansComponent },
  { path: "merchandise", component: MerchandiseComponent },
  { path: "gymbuddies", component: GymbuddiesComponent },
  { path: "gymbuddies/sessions", component: SessionsComponent },
  { path: "gymbuddies/sessions/add-sessions", component: AddSessionsComponent },
  {
    path: "gymbuddies/sessions/edit-sessions",
    component: EditSessionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
