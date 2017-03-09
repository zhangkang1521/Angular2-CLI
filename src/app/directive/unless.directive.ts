import {Directive, TemplateRef, ViewContainerRef, Input} from "@angular/core";

@Directive({
  selector: '[myUnless]'
})

export class UnlessDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ){}

  @Input()
  set myUnless(condition: boolean) {
      if(!condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
  }
}
