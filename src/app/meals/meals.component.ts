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

      this.addMeal(new Meal('Mukimo','Veg',500));
    // {Name: 'Andazi', Desc:'Triangula', Calories:700},
    // {Name: 'Pilau', Desc:'Rice', Calories:500},
    // {Name: 'Chips', Desc:'Potatoes', Calories:348}
   }

  ngOnInit() {

  }
  onClick(){
    // newMail = new Meal('Chapati','Circular',200);
    this.addMeal(new Meal('Mukimo','Veg',340));
  }
  addMeal(meal: Meal) {
    this.meals.push(meal);
  }

}
