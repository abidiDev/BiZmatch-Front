import { ComponentFixture, TestBed } from '@angular/core/testing';

import { meetingComponent } from './meeting.component';

describe('meetingComponent', () => {
  let component: meetingComponent;
  let fixture: ComponentFixture<meetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ meetingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(meetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
