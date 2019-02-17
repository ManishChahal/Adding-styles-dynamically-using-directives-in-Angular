import { Directive, Input, OnChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStepperStatusNotifier]'
})
export class StepperStatusNotifierDirective implements OnChanges{

  @Input('appStepperStatusNotifier') stepperStatus : string = '';

  constructor(private elementRef : ElementRef) { }

  ngOnChanges()
  {
    if(this.stepperStatus === 'visited')
    {
      <HTMLElement>this.elementRef.nativeElement.setAttribute('class' , 'visited');
    }

    else if(this.stepperStatus === 'active') {
      <HTMLElement>this.elementRef.nativeElement.setAttribute('class' , 'active');
    }

    else if(this.stepperStatus === 'inactive')
    {
      <HTMLElement>this.elementRef.nativeElement.setAttribute('class' , 'inactive');
    }
  }

}
