import {Component} from "@angular/core";
@Component({
  selector: 'pipe-demo',
  template: `<div>{{a | number: '1.2-2'}}</div><div>{{b | number: '1.2-2'}}</div>
              <div>{{a | currency: 'CNY': true}}</div><div>{{b | currency: 'CNY': true}}</div>
              <p>slice为非纯管道，对象属性发生改变会改变。date为纯管道，对象属性改变不会发生改变，只有对象地址改变才会发生改变</p>
              <div>{{arr | slice: 1: 10}}</div>
              <div>{{time}} -- {{time | date: 'yyyy-MM-dd HH:mm:ss'}}</div>
<button (click)="arr.push(3)">changeArr</button><button (click)="time.setMonth(1)">changeTime</button>`
})

export class PipeDemoComponent {
  a = 12.55745415;
  b = 354135;
  arr = [0, 1, 2, 3, 4, 5];
  time = new Date();
}
