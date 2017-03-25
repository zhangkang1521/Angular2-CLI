import {Component, ViewChild} from "@angular/core";
import {ModalDirective} from "ng2-bootstrap";
@Component({
  selector: 'child-modal-demo',
  templateUrl: './child-modal-demo.component.html'
})

export class ChildModalDemoComponent {

  @ViewChild('childModal') public childModal:ModalDirective;

  public showChildModal():void {
    this.childModal.show();
  }

  public hideChildModal():void {
    this.childModal.hide();
  }
}
