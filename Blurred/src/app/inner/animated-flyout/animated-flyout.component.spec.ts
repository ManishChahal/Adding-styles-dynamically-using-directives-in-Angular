import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedFlyoutComponent } from './animated-flyout.component';

describe('AnimatedFlyoutComponent', () => {
  let component: AnimatedFlyoutComponent;
  let fixture: ComponentFixture<AnimatedFlyoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedFlyoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedFlyoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
