import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCRMComponent } from './main-crm.component';

describe('MainCRMComponent', () => {
  let component: MainCRMComponent;
  let fixture: ComponentFixture<MainCRMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCRMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCRMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
