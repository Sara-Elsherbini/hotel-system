import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDropdownComponent } from './navbar-dropdown.component';

describe('NavbarDropdownComponent', () => {
  let component: NavbarDropdownComponent;
  let fixture: ComponentFixture<NavbarDropdownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarDropdownComponent]
    });
    fixture = TestBed.createComponent(NavbarDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
