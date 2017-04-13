import {Component, ViewEncapsulation} from "@angular/core";
@Component({
  selector: 'encapsulation-demo',
  template: `<div class="hello">hello, I am green</div><encapsulation-demo2></encapsulation-demo2>`,
  styles: [`
    .hello {
      background: green;
    }
  `],
  encapsulation: ViewEncapsulation.Native
})

export class EncapsulationDemoComponent {

}
