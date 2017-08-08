import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete-component-demo',
  templateUrl: './auto-complete-component-demo.component.html',
  styleUrls: ['./auto-complete-component-demo.component.css']
})
export class AutoCompleteComponentDemoComponent implements OnInit {

  text: string;

  results: string[];

  constructor() { }

  ngOnInit() {
  }

  search(event) {
   this.results = ['abandon', 'alpha', 'always'];
  }

}
