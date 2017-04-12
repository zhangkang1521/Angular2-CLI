import {Component, ElementRef, AfterViewInit, OnInit} from "@angular/core";
@Component({
  selector: 'my-input',
  template: `<input type="text" id="my"/> <div>test</div> `
})

export class MyInputComponent implements OnInit{

  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;

  }

  ngOnInit(): void {
    this.el.nativeElement.querySelector('#my').focus();
  }


}
