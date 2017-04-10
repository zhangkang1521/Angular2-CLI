import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "./user";
import {UserComponent} from "./user.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  title2 = '222';
  user: User;
  user2: User;
  name: string;

  @ViewChild('detail') detail;
  @ViewChild('detail2') detail2;

  ngOnInit() {
    this.user = new User();
    this.user.id = 100;
    this.user.username = "zk";
    this.user2 = new User();
    this.user2.id = 200;
    this.user2.username = "zk2";
  }

  changed($event) {
    console.log('parent revoked!');
  }

  parentChange() {
    // let newUser = new User();
    // newUser.username = this.name;
    // this.user = newUser;
    this.detail.change();
    this.detail2.change();
  }

}
