import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InnerRoutingModule } from './inner-routing.module';
import { ComponentComponent } from './component/component.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { InnerMostCompComponent } from './inner-most-comp/inner-most-comp.component';
import { StepperStatusNotifierDirective } from './stepper-status-notifier.directive';
import { AnimatedFlyoutComponent } from './animated-flyout/animated-flyout.component';

@NgModule({
  imports: [
    CommonModule,
    InnerRoutingModule
  ],
  declarations: [ComponentComponent, MainContentComponent, PopUpComponent, InnerMostCompComponent, StepperStatusNotifierDirective, AnimatedFlyoutComponent]
})
export class InnerModule { }
