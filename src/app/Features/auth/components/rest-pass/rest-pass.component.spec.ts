import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestPassComponent } from './rest-pass.component';

describe('RestPassComponent', () => {
  let component: RestPassComponent;
  let fixture: ComponentFixture<RestPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestPassComponent]
    });
    fixture = TestBed.createComponent(RestPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
