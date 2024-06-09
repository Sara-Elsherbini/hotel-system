import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavPopComponent } from './fav-pop.component';

describe('FavPopComponent', () => {
  let component: FavPopComponent;
  let fixture: ComponentFixture<FavPopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavPopComponent]
    });
    fixture = TestBed.createComponent(FavPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
