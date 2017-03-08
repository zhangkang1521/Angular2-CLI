import {Component, OnInit} from "@angular/core";
import {WikipediaService} from "./wikipedia.service";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'my-wiki-smart',
  template: `<h1>Wikipedia Smart Demo</h1>
    <p>Search after each keystroke</p>
    <input #term (keyup)="search(term.value)"/>
    <ul>
      <li *ngFor="let item of items | async">{{item}}</li>
    </ul>`,
  providers: [WikipediaService]
})

export class WikiSmartComponent implements OnInit{
  items: Observable<string[]>;
  private searchTermStream = new Subject<string>();

  constructor(private wikipediaService: WikipediaService) {

  }

  ngOnInit() {
    this.items = this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((term: string) => this.wikipediaService.search(term));
  }

  search(term: string) {
    this.searchTermStream.next(term);
  }
}
