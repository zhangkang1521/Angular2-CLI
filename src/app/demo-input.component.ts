import {Component, OnInit} from "@angular/core";
import {Subject, Observable} from "rxjs";
import {DemoService} from "./demo-service";
@Component({
  selector: 'demo-input',
  template: `<input type="text" #aa (keyup)="search(aa.value)" >
              <ul>
                {{recommends}}
              </ul>`,
  providers: [DemoService]
})

export class DemoInputComponent implements OnInit {

  recommends;
  stream = new Subject();


  constructor(public demoService: DemoService) {}

  ngOnInit(): void {
    this.stream
      // .debounceTime(2000)
      .switchMap(data => this.demoService.getRecommand(data))
      .subscribe(res => {
        console.log(res);
        this.recommends = res;
      });
  }

  search(value: string) {
    this.stream.next(value);
    // this.demoService.getRecommand(value).subscribe(res => {
    //   console.log(res);
    //   this.recommends = res;
    // });
  }

}
