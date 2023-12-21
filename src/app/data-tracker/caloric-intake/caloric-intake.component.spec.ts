import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloricIntakeComponent } from '../caloric-intake/caloric-intake.component';

describe('CaloricIntakeComponent', () => {
  let component: CaloricIntakeComponent;
  let fixture: ComponentFixture<CaloricIntakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaloricIntakeComponent]
    });
    fixture = TestBed.createComponent(CaloricIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
