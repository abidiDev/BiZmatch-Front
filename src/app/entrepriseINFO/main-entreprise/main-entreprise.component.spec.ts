import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEntrepriseComponent } from './main-entreprise.component';

describe('MainEntrepriseComponent', () => {
  let component: MainEntrepriseComponent;
  let fixture: ComponentFixture<MainEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
