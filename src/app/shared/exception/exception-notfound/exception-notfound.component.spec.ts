import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionNotfoundComponent } from './exception-notfound.component';

describe('ExceptionNotfoundComponent', () => {
  let component: ExceptionNotfoundComponent;
  let fixture: ComponentFixture<ExceptionNotfoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExceptionNotfoundComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionNotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
