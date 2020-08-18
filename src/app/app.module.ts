import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";
import { MatSelectModule } from "@angular/material/select";

import { AmplifyUIAngularModule } from "@aws-amplify/ui-angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { GymbuddiesComponent } from "./gymbuddies/gymbuddies.component";
import { PlansComponent } from "./plans/plans.component";
import { MerchandiseComponent } from "./merchandise/merchandise.component";
import { SessionsComponent } from "./gymbuddies/sessions/sessions.component";
import { AddSessionsComponent } from "./gymbuddies/sessions/add-sessions/add-sessions.component";
import { EditSessionsComponent } from "./gymbuddies/sessions/edit-sessions/edit-sessions.component";
import { MerchArticlesComponent } from "./merchandise/merch-articles/merch-articles.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GymbuddiesComponent,
    PlansComponent,
    MerchandiseComponent,
    SessionsComponent,
    AddSessionsComponent,
    EditSessionsComponent,
    MerchArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    AmplifyUIAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
