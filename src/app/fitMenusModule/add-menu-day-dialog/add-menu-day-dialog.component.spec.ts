import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMenuDayDialogComponent } from './add-menu-day-dialog.component';

describe('AddMenuDayDialogComponent', () => {
  let component: AddMenuDayDialogComponent;
  let fixture: ComponentFixture<AddMenuDayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMenuDayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMenuDayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
