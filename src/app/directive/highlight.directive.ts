import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive(
  {
    selector: '[myHighlight]' // Attention, 方括号
  }
)

export class HighlightDirective {
  @Input('myHighlight')
  highlightColor: string;

  constructor(private el: ElementRef) {
    // el.nativeElement.style.background = 'yellow';
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    console.log('mouseEnter');
    console.log(this.highlightColor);
    this.highlight(this.highlightColor);
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color) {
    this.el.nativeElement.style.background = color;
  }

}
