import {Component, EventEmitter, Output} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {

  hero: Hero = new Hero();

  @Output()
  newHeroEvent = new EventEmitter();

  constructor(private heroService:HeroService) {}

  // 保存
  save() {
    this.heroService.addHero(this.hero).subscribe(data => {
      console.log(data);
      this.newHeroEvent.emit(this.hero);
    })
  }

}
