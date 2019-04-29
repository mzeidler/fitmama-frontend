import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserRolesDialogComponent } from './edit-user-roles-dialog.component';

describe('EditUserRolesDialogComponent', () => {
  let component: EditUserRolesDialogComponent;
  let fixture: ComponentFixture<EditUserRolesDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserRolesDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserRolesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
