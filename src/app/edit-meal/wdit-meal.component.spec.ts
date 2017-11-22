import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WditMealComponent } from './wdit-meal.component';

describe('WditMealComponent', () => {
  let component: WditMealComponent;
  let fixture: ComponentFixture<WditMealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WditMealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WditMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
