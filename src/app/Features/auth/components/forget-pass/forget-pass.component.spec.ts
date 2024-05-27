import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetPassComponent } from './forget-pass.component';

describe('ForgetPassComponent', () => {
  let component: ForgetPassComponent;
  let fixture: ComponentFixture<ForgetPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForgetPassComponent]
    });
    fixture = TestBed.createComponent(ForgetPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
