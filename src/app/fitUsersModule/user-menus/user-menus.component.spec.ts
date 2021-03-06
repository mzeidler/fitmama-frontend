import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMenusComponent } from './user-menus.component';

describe('UserMenusComponent', () => {
  let component: UserMenusComponent;
  let fixture: ComponentFixture<UserMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
