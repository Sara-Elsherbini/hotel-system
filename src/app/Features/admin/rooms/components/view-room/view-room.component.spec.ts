import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoomComponent } from './view-room.component';

describe('ViewRoomComponent', () => {
  let component: ViewRoomComponent;
  let fixture: ComponentFixture<ViewRoomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRoomComponent]
    });
    fixture = TestBed.createComponent(ViewRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
