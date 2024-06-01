import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsDialogComponent } from './ads-dialog.component';

describe('AdsDialogComponent', () => {
  let component: AdsDialogComponent;
  let fixture: ComponentFixture<AdsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdsDialogComponent]
    });
    fixture = TestBed.createComponent(AdsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
