import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnershipTypeMainComponent } from './partnershipType-main.component';

describe('PartnershipTypeMainComponent', () => {
  let component: PartnershipTypeMainComponent;
  let fixture: ComponentFixture<PartnershipTypeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnershipTypeMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartnershipTypeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
