import {NgPlural, NgPluralCase, NgLocalization} from "@angular/common";
import {Component} from "@angular/core";
import {NgLocaleLocalization} from "@angular/common/src/localization";

export class MyLocalization extends NgLocaleLocalization {

  getPluralCategory(value) {
    if(value < 5) {
      return 'few';
    }
  }
}
@Component({
  selector: 'plural-demo',
  templateUrl: './plural-demo.component.html'
})

export class PluralDemoComponent {
  value = 0;

  inc() {
    this.value++;
  }
}
