import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { DisplayComponent } from './display/display.component';
import { AddMealComponent } from './add-meal/add-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { CaloriesLevelPipe } from './calories-level.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    AddMealComponent,
    EditMealComponent,
    CaloriesLevelPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
