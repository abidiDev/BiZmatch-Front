import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDashboardProfilComponent } from './main-dashboard-profil.component';

describe('MainDashboardProfilComponent', () => {
  let component: MainDashboardProfilComponent;
  let fixture: ComponentFixture<MainDashboardProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDashboardProfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainDashboardProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
