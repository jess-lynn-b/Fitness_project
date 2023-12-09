import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTrackerComponent } from './data-tracker.component';

describe('DataTrackerComponent', () => {
  let component: DataTrackerComponent;
  let fixture: ComponentFixture<DataTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataTrackerComponent]
    });
    fixture = TestBed.createComponent(DataTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
