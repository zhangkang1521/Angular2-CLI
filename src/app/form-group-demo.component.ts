import {Component} from "@angular/core";
import {User} from "./user";
@Component({
  selector: 'form-group-demo',
  templateUrl: './form-group-demo.component.html',
  styleUrls: ['./form-group-demo.component.css']
})

export class FormGroupDemoComponent {
  user: User;
  interests;

  ngOnInit(): void {
    this.user = new User();
    this.user.id = '1';
    this.user.username = '';
    this.user.age = 20;
    this.interests = [
      {value: 'read', display: '读书'},
      {value: 'sport', display: '运动'}
    ]
  }

  doSubmit() {
    console.log('submit');
  }
}
