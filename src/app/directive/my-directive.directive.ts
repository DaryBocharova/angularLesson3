import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  private regex: RegExp;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick = (event) => this.action(event);

  action(event) {
    let current: string = this.el.nativeElement.value;
    let element = current.search('_');
    if (element >= 0) {
      event.setSelectionRange(element, element);
    } else {
      event.setSelectionRange(element, current.length);
    }
  }
}
