import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
@Component({
  selector: 'hero-message',
  template: `
    <h2>Async Hero Message and AsyncPipe</h2>
    <p>Message: {{ message | async }}</p>
    <button (click)="resend()">Resend</button>`,
})
export class HeroAsyncMessageComponent {
  message: Observable<string>;
  private messages = [
    '1',
    '2',
    '3',
    '4'
  ];
  constructor() { this.resend(); }
  resend() {
    // interval(period: number, scheduler: Scheduler): Observable
    // Creates an Observable that emits sequential numbers every specified interval of time, on a specified IScheduler.

    // map(project: function(value: T, index: number): R, thisArg: any): Observable<R>
    // Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.

    // take(count: number): Observable<T>
    // Emits only the first count values emitted by the source Observable.
    this.message = Observable.interval(1000)
      .map(i => this.messages[i])
      .take(2);
  }
}
