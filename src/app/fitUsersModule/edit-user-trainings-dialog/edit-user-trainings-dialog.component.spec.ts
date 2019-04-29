import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserTrainingsDialogComponent } from './edit-user-trainings-dialog.component';

describe('EditUserTrainingsDialogComponent', () => {
  let component: EditUserTrainingsDialogComponent;
  let fixture: ComponentFixture<EditUserTrainingsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserTrainingsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserTrainingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
