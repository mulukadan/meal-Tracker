import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MealsComponent } from './meals/meals.component';
import { MealComponent } from './meal/meal.component';


@NgModule({
  declarations: [
    AppComponent,
    MealsComponent,
    MealComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
