import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Meal } from '../meal';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
   public selectedCaloriesLevel: string = "All";
   @Input() childMealList: Meal[];
   @Output() clickSender = new EventEmitter();
   editButtonHasBeenClicked(CurrentMeal:Meal){
     this.clickSender.emit(CurrentMeal);
   }
   @Output() delSender = new EventEmitter();
   deleteButtonHasBeenClicked(CurrentMeal:Meal){
     this.delSender.emit(CurrentMeal);
   }
   onChange(optionFromMenu) {
  this.selectedCaloriesLevel = optionFromMenu;

}
}
