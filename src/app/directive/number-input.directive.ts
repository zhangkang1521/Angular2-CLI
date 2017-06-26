import {Directive, HostListener, Input, ElementRef, Renderer} from "@angular/core";

/**
 * 通过设置该指令使input框仅能输入数字
 */
@Directive({
  selector: '[numberInput]'
})
export class NumberInputDirective {

  private el: ElementRef;
  private renderer: Renderer;


  constructor(el: ElementRef, renderer: Renderer) {
    this.el = el;
    this.renderer = renderer;
  }

  /**
   * keyup，去除掉字母，特殊字符，仅留下数字
   */
  @HostListener('keyup')
  onKeyup() {
    this.el.nativeElement.value = this.remainNumber(this.el.nativeElement.value);
  }

  remainNumber(str) {
    if(str && typeof str=='string') {
      return str.replace(/[\D]+/g, "")
    } else {
      return str;
    }
  }
}
