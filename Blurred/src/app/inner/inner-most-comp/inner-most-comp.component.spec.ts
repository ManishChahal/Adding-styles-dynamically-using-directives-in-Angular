import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerMostCompComponent } from './inner-most-comp.component';

describe('InnerMostCompComponent', () => {
  let component: InnerMostCompComponent;
  let fixture: ComponentFixture<InnerMostCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerMostCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerMostCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
