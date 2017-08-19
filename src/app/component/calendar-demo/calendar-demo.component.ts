import { Component, OnInit } from '@angular/core';
import {CalendarDemoService} from "./caleandar-demo-service";

@Component({
  selector: 'app-calendar-demo',
  templateUrl: './calendar-demo.component.html',
  styleUrls: ['./calendar-demo.component.css'],
  providers:[CalendarDemoService]
})
export class CalendarDemoComponent implements OnInit {

  value;

  constructor(private calendarDemoService:CalendarDemoService) { }

  ngOnInit() {
  }

  search(){
    console.log(this.value);
    console.log(typeof this.value);
    this.calendarDemoService.search(this.value).subscribe(res => {
      console.log(res);
    });
  }

}
