import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershiptypeComponent } from './partnershioptype.component';

describe('PartnershiptypeComponent', () => {
  let component: PartnershiptypeComponent;
  let fixture: ComponentFixture<PartnershiptypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershiptypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnershiptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
