import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'app works!';
  mySource;
  myData = "a";

  ngOnInit(): void {
    this.mySource = [
      "abandon",
      "an",
      "ant",
      "hello"
    ]
  }

}
