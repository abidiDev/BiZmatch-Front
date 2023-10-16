import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainEntrepriseListComponent } from './main-entrepriseList.component';

describe('MainEntrepriseListComponent', () => {
  let component: MainEntrepriseListComponent;
  let fixture: ComponentFixture<MainEntrepriseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainEntrepriseListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainEntrepriseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
