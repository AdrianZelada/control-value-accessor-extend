import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyNumbersComponent } from './only-numbers.component';

describe('OnlyNumbersComponent', () => {
  let component: OnlyNumbersComponent;
  let fixture: ComponentFixture<OnlyNumbersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlyNumbersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
