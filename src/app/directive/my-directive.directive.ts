import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  private regex: RegExp;

  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event'])
  onClick(event) {
    let current: string = this.el.nativeElement.value;
    let next: string =
      current.substring(0, this.el.nativeElement.selectionStart) +
      event.key +
      current.substring(this.el.nativeElement.selectionEnd);
  }
}
