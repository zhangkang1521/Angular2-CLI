
import {Directive, ElementRef, Input} from "@angular/core";
@Directive({
  selector: '[myBeautifulBackground]'
})

export class BeautifulBackgroundDirective {

  private el: HTMLElement;

  constructor(el: ElementRef) {
    // el.nativeElement.style.backgroundColor = this.color1;
    this.el = el.nativeElement;
  }

  @Input('background')
  set backgroundColor(colorName: string) {
    console.log(colorName);
    this.el.style.backgroundColor = colorName;
  }

  @Input('front')
  set frontColor(colorName: string) {
    console.log('myBean1'+colorName);
    this.el.style.color = colorName;
  }








}
