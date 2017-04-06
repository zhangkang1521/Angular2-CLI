import { Component } from '@angular/core';
import {FormControl, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  color = 'green';
  // loginControl: FormControl = new FormControl({value: 'xxs', disabled: true});
  // loginControl: FormControl = new FormControl('s', Validators.required);
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      name: new FormControl("", Validators.required),
      password: new FormControl("")
    });
  }
}
