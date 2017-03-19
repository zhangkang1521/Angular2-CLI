
import {Component, HostBinding, OnInit} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  templateUrl: './compose-message.component.html'
})

export class ComposeMessageComponent implements OnInit{


  details: string;
  message: string = "hello";
  oldMessage: string;
  sending: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.oldMessage = this.message;
  }

  send() {
    this.sending = true;
    this.details = 'Sending Message...';
    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    this.router.navigate([{ outlets: { popup: null}}]);
  }

  isModified() {
    return this.oldMessage != this.message;
  }

}
