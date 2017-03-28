import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app works!';

  ngOnInit(): void {
    // let button = document.querySelector('button');
    // Observable.fromEvent(button, 'click')
    //   .subscribe(() => console.log('clicked!'));
    console.log('cold')
    let obs = new Observable(observer => {
      console.log('observable start')
      observer.next(1);
      observer.next(2);
    });
    console.log('start');
    obs.subscribe(data => {
      console.log(data);
    });
  }


}
