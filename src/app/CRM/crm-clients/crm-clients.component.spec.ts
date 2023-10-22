import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmClientsComponent } from './crm-clients.component';

describe('CrmClientsComponent', () => {
  let component: CrmClientsComponent;
  let fixture: ComponentFixture<CrmClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrmClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrmClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
