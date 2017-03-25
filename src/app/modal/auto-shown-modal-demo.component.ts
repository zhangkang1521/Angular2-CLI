import {Component, ViewChild} from "@angular/core";
import {ModalDirective} from "ng2-bootstrap";
@Component({
  selector: 'auto-shown-modal-demo',
  templateUrl: './auto-shown-modal-demo.component.html'
})

export class AutoShownModalDemoComponent {

  @ViewChild('autoShownModal') public autoShownModal:ModalDirective;
  public isModalShown:boolean = false;

  public showModal():void {
    this.isModalShown = true;
    this.autoShownModal.show();
  }

  public hideModal():void {
    this.autoShownModal.hide();
  }

  public onHidden():void {
    this.isModalShown = false;
    console.log('hidden');
  }

  public onShow(): void {
    console.log('show');
  }
}
