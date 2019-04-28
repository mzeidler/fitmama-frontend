import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrainingDayDialogComponent } from './add-training-day-dialog.component';

describe('AddTrainingDayDialogComponent', () => {
  let component: AddTrainingDayDialogComponent;
  let fixture: ComponentFixture<AddTrainingDayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrainingDayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingDayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
