import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMyfitComponent } from './user-myfit.component';

describe('UserMyfitComponent', () => {
  let component: UserMyfitComponent;
  let fixture: ComponentFixture<UserMyfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMyfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMyfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
