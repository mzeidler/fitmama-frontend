import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsDialogComponent } from './measurements-dialog.component';

describe('MeasurementsDialogComponent', () => {
  let component: MeasurementsDialogComponent;
  let fixture: ComponentFixture<MeasurementsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeasurementsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeasurementsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
