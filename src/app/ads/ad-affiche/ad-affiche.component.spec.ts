import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdAfficheComponent } from './ad-affiche.component';

describe('AdAfficheComponent', () => {
  let component: AdAfficheComponent;
  let fixture: ComponentFixture<AdAfficheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdAfficheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
