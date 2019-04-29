import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserMenusDialogComponent } from './edit-user-menus-dialog.component';

describe('EditUserMenusDialogComponent', () => {
  let component: EditUserMenusDialogComponent;
  let fixture: ComponentFixture<EditUserMenusDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserMenusDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserMenusDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
