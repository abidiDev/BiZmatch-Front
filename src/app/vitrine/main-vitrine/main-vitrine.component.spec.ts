import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainVitrineComponent } from './main-vitrine.component';

describe('MainVitrineComponent', () => {
  let component: MainVitrineComponent;
  let fixture: ComponentFixture<MainVitrineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainVitrineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainVitrineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
