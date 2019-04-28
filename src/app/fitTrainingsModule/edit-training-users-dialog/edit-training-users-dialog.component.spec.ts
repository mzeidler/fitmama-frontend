import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrainingUsersDialogComponent } from './edit-training-users-dialog.component';

describe('EditTrainingUsersDialogComponent', () => {
  let component: EditTrainingUsersDialogComponent;
  let fixture: ComponentFixture<EditTrainingUsersDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTrainingUsersDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTrainingUsersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
