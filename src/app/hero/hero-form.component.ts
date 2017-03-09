import {Component, EventEmitter, Output, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})

export class HeroFormComponent implements OnInit{

  hero: Hero = new Hero();

  @Output()
  newHeroEvent = new EventEmitter();

  constructor(private heroService:HeroService, private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot);
    let action = this.route.snapshot.url[1].path;
    if('detail' == action) {
      this.getHero(this.route.snapshot.url[2].path);
    } else {

    }
  }

  // 保存
  save() {
    this.heroService.addHero(this.hero).subscribe(data => {
      console.log(data);
      this.newHeroEvent.emit(this.hero);
    })
  }

  getHero(id) {
    this.heroService.getHero(id).subscribe(data => {
      console.log(data);
      this.hero = data;
    })
  }

}
