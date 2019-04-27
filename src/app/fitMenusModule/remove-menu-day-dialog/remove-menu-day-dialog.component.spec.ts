import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveMenuDayDialogComponent } from './remove-menu-day-dialog.component';

describe('RemoveMenuDayDialogComponent', () => {
  let component: RemoveMenuDayDialogComponent;
  let fixture: ComponentFixture<RemoveMenuDayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveMenuDayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveMenuDayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
