import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myDate = new Date();
  myDate2 = '2017-02-03';

  test() {
    console.log(typeof this.myDate);
    console.log(this.myDate);
  }
}
