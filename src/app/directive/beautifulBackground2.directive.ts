
import {Directive, ElementRef, Input} from "@angular/core";
@Directive({
  selector: '[myBeautifulBackground2]'
})

export class BeautifulBackground2Directive {

  @Input('front2')
  set front(color) {
    console.log('myBeau2' + color);
  }

  constructor(el: ElementRef) {
    //el.nativeElement.style.backgroundColor = 'red';
  }
}
