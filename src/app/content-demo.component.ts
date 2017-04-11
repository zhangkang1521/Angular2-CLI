import {Component, AfterContentChecked, AfterContentInit} from "@angular/core";

@Component({
  selector: 'content-demo',
  template: `<div style="border: 1px solid red"><ng-content></ng-content></div>`
})
export class ContentDemoComponent implements AfterContentChecked,AfterContentInit{

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked(): void {
    console.log('afterContentChecked');
  }

}
