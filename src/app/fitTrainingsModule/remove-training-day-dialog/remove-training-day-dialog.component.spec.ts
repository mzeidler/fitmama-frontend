import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTrainingDayDialogComponent } from './remove-training-day-dialog.component';

describe('RemoveTrainingDayDialogComponent', () => {
  let component: RemoveTrainingDayDialogComponent;
  let fixture: ComponentFixture<RemoveTrainingDayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTrainingDayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTrainingDayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
