import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionGeneralComponent } from './exception-general.component';

describe('ExceptionGeneralComponent', () => {
  let component: ExceptionGeneralComponent;
  let fixture: ComponentFixture<ExceptionGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExceptionGeneralComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
