import { Component, OnInit } from '@angular/core';
import {Suggestion} from "./suggestion";

@Component({
  selector: 'app-auto-complete-component-demo',
  templateUrl: './auto-complete-component-demo.component.html',
  styleUrls: ['./auto-complete-component-demo.component.css']
})
export class AutoCompleteComponentDemoComponent implements OnInit {

  text: any;

  results: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  search(event) {
    this.results = new Array();
    for(let i=0; i<20; i++) {
      let suggestion = new Suggestion();
      suggestion.id = i;
      suggestion.name = 'item' + i;
      this.results.push(suggestion);
    }
  }

  clear(){
    console.log('clear');
  }

  onChange(event) {
    console.log(event);
  }

}
