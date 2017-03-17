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
    this.mySource = [{"id":5500,"value":"aac"},
      {"id":7689,"value":"abc"}];
  }
  test(searchInput, $event) {
    console.log(searchInput);
    console.log($event);
  }

  // myListFormatter(data: any): string {
  //   return `888`;
  // }

}
