import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestateInfoComponent } from './realestate-info.component';

describe('RealestateInfoComponent', () => {
  let component: RealestateInfoComponent;
  let fixture: ComponentFixture<RealestateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealestateInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealestateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
