import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  
  constructor(private el: ElementRef) {}

  @HostListener('focus', ['$event.target'])
  onFocus(event): void {
   this.action(event);
 }

 @HostListener('click', ['$event.target']) 
  onClick(event): void {
    this.action(event);
  }

  action(event): void {
    let current: string = this.el.nativeElement.value;
    let element = current.search('_');
    if (element > 0) {
      event.setSelectionRange(element, element);
    } else {
      event.setSelectionRange(element, current.length);
    }
  }
}
