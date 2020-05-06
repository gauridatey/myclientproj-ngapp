import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionForbiddenComponent } from './exception-forbidden.component';

describe('ExceptionForbiddenComponent', () => {
  let component: ExceptionForbiddenComponent;
  let fixture: ComponentFixture<ExceptionForbiddenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExceptionForbiddenComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
