import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionUnauthorizedComponent } from './exception-unauthorized.component';

describe('ExceptionUnauthorizedComponent', () => {
  let component: ExceptionUnauthorizedComponent;
  let fixture: ComponentFixture<ExceptionUnauthorizedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExceptionUnauthorizedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionUnauthorizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
