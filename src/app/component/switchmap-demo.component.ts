import {Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
@Component({
  selector: 'switch-map-demo',
  template: `switch-map-demo`
})

export class SwitchMapDemoComponent implements OnInit{


  ngOnInit(): void {
    var source = Observable.fromEvent(document.body, 'click');

    var example = source
      .map(e => Observable.interval(200).take(10))
      .switch(); // 会忽略前一次点击

    example.subscribe(data => {
      console.log(data);
    });
  }

}
