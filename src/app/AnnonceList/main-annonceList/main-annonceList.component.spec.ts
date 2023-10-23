import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAnnonceListComponent } from './main-annonceList.component';

describe('MainAnnonceListComponent', () => {
  let component: MainAnnonceListComponent;
  let fixture: ComponentFixture<MainAnnonceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAnnonceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAnnonceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
