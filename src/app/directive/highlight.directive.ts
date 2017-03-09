import {Directive, ElementRef} from "@angular/core";

@Directive(
  {
    selector: '[myHighlight]' // Attention, 方括号
  }
)

export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.background = 'yellow';
  }
}
