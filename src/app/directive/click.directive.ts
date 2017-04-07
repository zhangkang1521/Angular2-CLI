import {Directive, HostListener, Input, ElementRef} from "@angular/core";

@Directive({
  selector: '[click]'
})

export class ClickDirective {

  private el: ElementRef;

  @Input('click')
  private color: string;

  constructor(el: ElementRef) {
    this.el = el;
  }

  @HostListener('click')
  onClick() {
    console.log('clicked' + this.color);
    this.el.nativeElement.style.color = this.color;
  }
}
