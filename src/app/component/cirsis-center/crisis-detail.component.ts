import {Component, OnInit, OnDestroy} from "@angular/core";

@Component({
  selector: 'crisis-detail',
  template: `crisis-detail page`
})

export class CrisisDetailComponent implements OnInit, OnDestroy{

  ngOnInit(): void {
    console.log('crisisDetail init');
  }

  ngOnDestroy(): void {
    console.log('crisisDetail destroy');
  }

}
