import {Component, OnInit} from "@angular/core";
import {User} from "./user";
@Component({
  selector: 'form-demo',
  templateUrl: './form-demo.component.html'
})

export class FormDemoComponent implements OnInit{

  user: User;
  interests;

  ngOnInit(): void {
    this.user = new User();
    this.user.id = '1';
    this.user.username = 'zk';
    this.user.age = 20;
    this.interests = [
      {value: 'read', display: '读书'},
      {value: 'sport', display: '运动'}
    ]
  }
}
