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
    // this.testConnect();
    // this.testCreate();
    // this.testMap();
    // this.testForkJoin();
    // this.testConcatMap();
    // this.testTimeout();
  }

  // 创建Observable
  testCreate() {
    let obs = Observable.create(val => {
      val.next(1);
      val.next(2);
      val.complete();
    });
    obs.subscribe(data => {
      console.log(data);
    })
  }

  // 数据转换
  testMap() {
    let obs = Observable.create(val => {
      val.next(1);
      val.next(2);
      val.complete();
    });
    obs.map(data => data * 10).subscribe(data => {
      console.log(data);
    })
  }

  // 组合
  testForkJoin() {
    let first = Observable.create(data => {
      data.next(10);
      data.complete();
    });
    let second = Observable.create(data => {
      data.next(20);
      data.complete();
    });
    let obs = Observable.forkJoin(first, second);
    obs.subscribe(data => {
      console.log(data);
    });
  }

  // 第二个结果依赖第一个结果
  testConcatMap() {
    let first = Observable.create(data => {
      data.next(10);
      data.complete();
    });
    let createSecond = function (first) {
      return Observable.create(data => {
        data.next(first*2);
        data.complete();
      })
    };
    let obs = first.concatMap(first => {
      return createSecond(first);
    }).subscribe(second => {
      console.log(second);
    });
    // method 2
    // first.subscribe(first => {
    //   createSecond(first).subscribe(second => {
    //     console.log(second);
    //   })
    // })
  }

  testTimeout() {
    // let obs = Observable.create(data => {
    //   // data.delay(5000);
    //   console.log('start');
    //   data.next('hello');
    //   data.complete();
    // }).timer(5000);
    let obs = Observable.timer(5000);
    obs.timeout(6000).subscribe(data => {
      console.log(data);
    }, err => {
      console.log(err);
    })
  }


  // connect模式
  testConnect(){
    let obs = new Observable(observer => {
      console.log('observer start');
      observer.complete();
    }).publish();
    console.log('start');
    obs.subscribe();
    console.log('after subscribe');
    obs.connect();
  }






}
