import {Component, ViewEncapsulation} from "@angular/core";
@Component({
  selector: 'encapsulation-demo2',
  template: `<div class="hello">hello2,I am red</div>`,
  styles: [`
    .hello {
      background: red;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})

export class EncapsulationDemo2Component {

}
