import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output() newMealSender = new EventEmitter();
  AddClicked(MealName: string, MealDesc: string, MealCalories: number){
    if(MealName.length>1){
      var newMealToAdd: Meal = new Meal(MealName, MealDesc, MealCalories);
      this.newMealSender.emit(newMealToAdd);
    }else{
      alert("INVALID INPUT!!");
    }

  }
}
