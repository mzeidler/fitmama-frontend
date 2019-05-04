import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMeasurementDialogComponent } from './delete-measurement-dialog.component';

describe('DeleteMeasurementDialogComponent', () => {
  let component: DeleteMeasurementDialogComponent;
  let fixture: ComponentFixture<DeleteMeasurementDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMeasurementDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMeasurementDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
