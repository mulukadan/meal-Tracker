import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { MealComponent } from './meal/meal.component';
import { DataService } from './data.service'


@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    MealComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
