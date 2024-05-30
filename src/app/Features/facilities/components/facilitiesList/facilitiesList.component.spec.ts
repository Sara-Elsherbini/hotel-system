/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FacilitiesListComponent } from './facilitiesList.component';

describe('FacilitiesListComponent', () => {
  let component: FacilitiesListComponent;
  let fixture: ComponentFixture<FacilitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
