import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionApiserverdownComponent } from './exception-apiserverdown.component';

describe('ExceptionApiserverdownComponent', () => {
  let component: ExceptionApiserverdownComponent;
  let fixture: ComponentFixture<ExceptionApiserverdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExceptionApiserverdownComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExceptionApiserverdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
