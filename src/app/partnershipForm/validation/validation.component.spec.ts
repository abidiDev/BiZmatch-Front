import { ComponentFixture, TestBed } from '@angular/core/testing';

import { validationComponent } from './validation.component';

describe('validationComponent', () => {
  let component: validationComponent;
  let fixture: ComponentFixture<validationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ validationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(validationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
