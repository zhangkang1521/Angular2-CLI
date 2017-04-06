import {Directive, ElementRef, HostListener, Input} from "@angular/core";

@Directive(
  {
    selector: '[highlight]' // Attention, 方括号
  }
)

export class HighlightDirective {
  @Input()
  highlightColor: string;

  @Input()
  defaultColor: string;

  constructor(private el: ElementRef) {
     el.nativeElement.style.color = this.highlightColor;
  }

  @HostListener("mouseenter")
  onMouseEnter() {
    console.log('mouseEnter');
    console.log(this.highlightColor);
    console.log(this.defaultColor);
    this.highlight(this.highlightColor || this.defaultColor || 'green');
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color) {
    this.el.nativeElement.style.background = color;
  }

}
