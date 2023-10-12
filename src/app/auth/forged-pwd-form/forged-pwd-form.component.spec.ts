import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgedPwdFormComponent } from './forged-pwd-form.component';

describe('ForgedPwdFormComponent', () => {
  let component: ForgedPwdFormComponent;
  let fixture: ComponentFixture<ForgedPwdFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgedPwdFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgedPwdFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
