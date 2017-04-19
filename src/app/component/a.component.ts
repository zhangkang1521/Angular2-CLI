import {Random} from "./random";
import {Component, Host} from "@angular/core";

@Component({
  selector: 'random-a',
  providers: [Random],
  template: `a<div style="border: 1px solid red"><ng-content></ng-content></div>`
})

export class AComponent {

  constructor() {
  }
}
