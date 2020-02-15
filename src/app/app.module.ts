import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GymbuddiesComponent } from './gymbuddies/gymbuddies.component';
import { PlansComponent } from './plans/plans.component';
import { MerchandiseComponent } from './merchandise/merchandise.component';
import { MenuComponent } from './header/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GymbuddiesComponent,
    PlansComponent,
    MerchandiseComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
