import {Random} from "./random";
import {Component, Host} from "@angular/core";

@Component({
  selector: 'random-b',
  // providers: [Random],
  template: `{{r?.num}}`
})

export class BComponent {

  constructor(@Host() private r: Random) {
  }
}
