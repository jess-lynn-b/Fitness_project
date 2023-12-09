import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodStartComponent } from './food-start.component';

describe('FoodStartComponent', () => {
  let component: FoodStartComponent;
  let fixture: ComponentFixture<FoodStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodStartComponent]
    });
    fixture = TestBed.createComponent(FoodStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
