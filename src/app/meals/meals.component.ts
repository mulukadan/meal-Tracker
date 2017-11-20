import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service'
import { Meal } from '../meal';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {
  meals: Meal[];
  constructor() {
    this.meals = [
      new Meal('Chapati','Circular',200),
      new Meal('Andazi','Circular',200),
      new Meal('Chapati','Circular',200),
  ];
}

  ngOnInit() {

  }

  addMeal(MealName:string, MealDesc:string, MealCalories:number) {
    if(MealName.length>1){
      this.meals.push(new Meal(MealName, MealDesc, MealCalories));

    } else{
      alert("INVALID INPUT!!")
    }

  }
}
