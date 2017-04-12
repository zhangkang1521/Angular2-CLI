import {Component, Input, ChangeDetectionStrategy} from "@angular/core";
import {User} from "./user";
@Component({
  selector: 'detection-strategy-demo',
  template: `<div style="border: 1px solid red">
            <div>{{username}} <input type="text" #key> <button (click)="username=key.value">change</button></div>
            <div>{{user | json}}</div>
            <div>{{title}}</div>
            </div>
            `,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DetectionStrategyComponent {
  username: string; // 改变这个，视图也改变了啊

  @Input()
  user: User;

  @Input()
  title;
}
