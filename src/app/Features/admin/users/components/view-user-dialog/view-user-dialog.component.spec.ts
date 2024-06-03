import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserDialogComponent } from './view-user-dialog.component';

describe('ViewUserDialogComponent', () => {
  let component: ViewUserDialogComponent;
  let fixture: ComponentFixture<ViewUserDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewUserDialogComponent]
    });
    fixture = TestBed.createComponent(ViewUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
