import {Component, Input, OnInit, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges} from "@angular/core";
import {Observable, Subject} from "rxjs";
import {User} from "./user";
@Component({
  selector: 'user',
  template: `{{_user | json}} <input type="text" [(ngModel)]="name"> <button (click)="change()">change</button>`
})

export class UserComponent implements OnInit,OnChanges{

  name;

  @Input()
  _user: User;

  @Input()
  set user(user: User) {
    console.log('setUser');
    this._user = user;
  }

  @Output() userChange = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }


  ngOnInit() {

  }

  change() {
    // this._user.username = this.name;
    // this._user = new User();
    // this.userChange.emit(this._user);
    console.log(this._user);
    // let newUser = new User();
    // newUser.username = this.name;
    // this.user = newUser;
  }
}
