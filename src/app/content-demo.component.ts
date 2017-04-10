import {Component} from "@angular/core";

@Component({
  selector: 'content-demo',
  template: `<div style="border: 1px solid red"><ng-content></ng-content></div>`
})
export class ContentDemoComponent {

}
