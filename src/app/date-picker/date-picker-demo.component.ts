import {Component} from "@angular/core";

@Component({
  selector: 'date-picker-demo',
  templateUrl: './date-picker-demo.component.html'
})

export class DatePickerDemoComponent {
  public dt: Date = new Date();
}
