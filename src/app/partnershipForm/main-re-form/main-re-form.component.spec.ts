import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReFormComponent } from './main-re-form.component';

describe('MainReFormComponent', () => {
  let component: MainReFormComponent;
  let fixture: ComponentFixture<MainReFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainReFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainReFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
