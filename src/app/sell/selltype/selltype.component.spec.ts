import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelltypeComponent } from './selltype.component';

describe('SelltypeComponent', () => {
  let component: SelltypeComponent;
  let fixture: ComponentFixture<SelltypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelltypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
