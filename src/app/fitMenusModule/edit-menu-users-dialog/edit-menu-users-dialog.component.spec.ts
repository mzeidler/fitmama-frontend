import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMenuUsersDialogComponent } from './edit-menu-users-dialog.component';

describe('EditMenuUsersDialogComponent', () => {
  let component: EditMenuUsersDialogComponent;
  let fixture: ComponentFixture<EditMenuUsersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMenuUsersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMenuUsersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
