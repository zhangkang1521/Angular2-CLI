import {Component, OnInit} from "@angular/core";
import {User} from "./user";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {validateUserName} from "./validate-username";
@Component({
  selector: 'validate-form-demo',
  templateUrl: './validate-form-demo.component.html'
})

export class ValidateFormDemoComponent implements OnInit{

  user: User;

  // modelDriven
  customForm = new FormGroup({
    customName: new FormControl('13011112222', [validateUserName, Validators.required])
  });

  ngOnInit(): void {
    this.user = new User();
    this.user.id = '1';
    // this.user.username = 'zk';
    this.user.age = 20;
  }

  onSubmit() {
    console.log(this.customForm.controls['customName']);
    console.log(this.customForm.valid);
    console.log('submit');
  }


}
