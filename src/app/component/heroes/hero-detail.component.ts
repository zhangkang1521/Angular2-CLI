import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {HeroService} from "./hero.service";
import 'rxjs/add/operator/switchMap'
import {Hero} from "./hero";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit,OnDestroy {

  hero: Hero;

  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService
  ) { }

  ngOnInit() {
    console.log("HeroDetailComponent Init");
    // 这里用了Observable，可在router-outlet中复用
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe((hero: Hero) => this.hero = hero);

    // 这里不能在router-outlet中复用，如果是一个新页面，用这种方式更简单
    // let id = +this.route.snapshot.params['id'];
    // this.heroService.getHero(id)
    //   .subscribe(data => this.hero = data);
  }

  ngOnDestroy() {
    console.log("HeroDetailComponent Destroy");
  }

}
