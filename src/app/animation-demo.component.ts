import {Component, trigger, state, style, transition, animate} from "@angular/core";

@Component({
  selector: 'animation-demo',
  styles: [
  ],
  animations:[
    trigger('buttonStatus', [
      state('on', style({
        color: '#0f2',
        transform: 'scale(1.2)'
      })),
      state('off', style({
        color: '#02f',
        transform: 'scale(1)'
      })),
      transition('off => on', animate('100ms ease-in')),
      transition('on => off', animate('100ms ease-out'))
    ])
  ],
  template: `<div>
                <button [@buttonStatus]="status" (click)="toggleStatus()">{{status}}</button>
            </div>`
})

export class AnimationDemoComponent {
  status: string = 'on';

  toggleStatus() {
    this.status = this.status == 'on' ? 'off' : 'on';
  }
}


