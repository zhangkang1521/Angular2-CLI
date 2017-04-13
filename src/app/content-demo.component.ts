import {
  Component, AfterContentChecked, AfterContentInit, ContentChildren, QueryList, Renderer,
  ElementRef, Directive
} from "@angular/core";

@Component({
  selector: 'content-demo',
  template: `<div style="border: 1px solid red"><ng-content></ng-content></div>`
})
export class ContentDemoComponent implements AfterContentChecked,AfterContentInit{

  @ContentChildren('theInput2') theInput: QueryList<any>;

  constructor(private renderer: Renderer) {

  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(this.theInput)
    this.renderer.invokeElementMethod(this.theInput.first.nativeElement, 'focus');
  }

  ngAfterContentChecked(): void {
    console.log('afterContentChecked');
  }

}


