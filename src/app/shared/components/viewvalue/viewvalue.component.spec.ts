import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewvalueComponent } from './viewvalue.component';

describe('ViewvalueComponent', () => {
  let component: ViewvalueComponent;
  let fixture: ComponentFixture<ViewvalueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewvalueComponent]
    });
    fixture = TestBed.createComponent(ViewvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
