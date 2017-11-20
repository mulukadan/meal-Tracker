import { Component, OnInit } from '@angular/core';
import { Meal } from '../meal';
import { MealsComponent } from '../meals/meals.component';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  // msc: MealsComponent;
  constructor() {
    // msc: MealsComponent;
   }

  ngOnInit() {
    // msc: new MealsComponent();
  }

  newMail: Meal = new Meal('Chapati','Circular',200);
  // msc.addMeal(newMail);

}
