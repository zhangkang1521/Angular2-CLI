import {Component, Input, EventEmitter, Output} from "@angular/core";
import {Hero} from "./hero";
@Component({
  selector: 'hero-detail',
  template: `<div>
  {{hero?.fullName}}
  <button (click)="delete()">Delete</button>
</div>`
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;

  @Output()
  deleteRequest = new EventEmitter<Hero>();

  delete() {
   console.log(this.hero);
    this.deleteRequest.emit(this.hero);
  }
}
