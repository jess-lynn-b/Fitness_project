import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityTrackerComponent } from './activity-tracker.component';

describe('ActivityTrackerComponent', () => {
  let component: ActivityTrackerComponent;
  let fixture: ComponentFixture<ActivityTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityTrackerComponent]
    });
    fixture = TestBed.createComponent(ActivityTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
