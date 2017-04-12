import {Component, ChangeDetectorRef} from "@angular/core";
@Component({
  selector: 'change-detector-demo',
  template: `{{title}}<input type="text" #test> <button (click)="title=test.value">change</button>`
})

export class ChangeDetectorDemoComponent {

  title = 'hello'

  constructor(private cd: ChangeDetectorRef) {
    // 停止检测
    cd.detach();
    setInterval(() => {
      this.cd.detectChanges(); // 手动触发检测
    }, 5000);
  }
}
