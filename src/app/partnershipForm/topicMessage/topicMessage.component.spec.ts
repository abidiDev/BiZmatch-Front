import { ComponentFixture, TestBed } from '@angular/core/testing';

import { topicMessageComponent } from './topicMessage.component';

describe('topicMessageComponent', () => {
  let component: topicMessageComponent;
  let fixture: ComponentFixture<topicMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ topicMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(topicMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
