import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private ele:ElementRef) 
  {
      ele.nativeElement.style.background='yellow';
  }
}
