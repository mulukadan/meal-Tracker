import { Component } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Meal Tracker';
   public MealsList: Meal[] = [
     new Meal("Chapati", "Circular", 450),
     new Meal("Sukuma", "Greens", 780),
     new Meal("Chips", "Fries", 250)
 ];

 addMeal(NewMeal:Meal){
   this.MealsList.push(NewMeal);
 }

}
