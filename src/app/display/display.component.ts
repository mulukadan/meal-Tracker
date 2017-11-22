import { Component, OnInit, Input } from '@angular/core';
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
   @Input() childMealList: Meal[];
}
