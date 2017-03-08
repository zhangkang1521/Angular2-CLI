import {Component} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {

  hero: Hero = new Hero();
  
  constructor(private heroService:HeroService) {}

  // 保存
  save() {
    this.heroService.addHero(this.hero).subscribe(data => {
      console.log(data);
    })
  }

}
