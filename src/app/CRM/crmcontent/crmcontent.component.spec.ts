import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMContentComponent } from './crmcontent.component';

describe('CRMContentComponent', () => {
  let component: CRMContentComponent;
  let fixture: ComponentFixture<CRMContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CRMContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CRMContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
