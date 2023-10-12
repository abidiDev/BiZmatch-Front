import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdsComponent } from './main-ads.component';

describe('MainAdsComponent', () => {
  let component: MainAdsComponent;
  let fixture: ComponentFixture<MainAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAdsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
