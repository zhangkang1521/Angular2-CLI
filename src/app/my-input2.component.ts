import {Component, ElementRef, AfterViewInit, OnInit, ViewChild, Renderer} from "@angular/core";
@Component({
  selector: 'my-input2',
  template: `<input type="text" #theInput/> `,
  queries: {
    theInput: new ViewChild('theInput')
  }
})

// queries 和 @ViewChild 作用相同，视图查询
export class MyInput2Component implements AfterViewInit{


  // @ViewChild('theInput')
  theInput: ElementRef;

  constructor(private renderer: Renderer) {

  }

  ngAfterViewInit(): void {
    this.renderer.invokeElementMethod(this.theInput.nativeElement, 'focus');
  }


}
