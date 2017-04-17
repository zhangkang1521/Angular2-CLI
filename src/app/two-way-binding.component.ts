import {Component, Input, EventEmitter, Output} from "@angular/core";
@Component({
  selector: 'two-way-binding',
  template: `childComponent: {{value}} <button (click)="increment()">increment</button>`
})
export class TwoWayBindingComponent {
  @Input() value: number = 0;
  // 此处必须命名为xxChange，父组件中才能用[(xx)]实现双向数据绑定
  @Output() valueChange: EventEmitter<number> = new EventEmitter<number>();

  increment() {
    this.value++;
    this.valueChange.emit(this.value);
  }
}
