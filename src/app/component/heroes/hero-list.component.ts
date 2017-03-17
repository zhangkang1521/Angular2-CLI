import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero";
import {ActivatedRoute, Router, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap'
import {HeroService} from "./hero.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {

  heroes: Observable<Hero[]>;
  selectedId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService) { }

  ngOnInit() {
    // 获取url中 ?limit=5
    // this.route.queryParams.subscribe(params => {
    //   console.log(params['limit']);
    // });
    this.heroes = this.route.params
      .switchMap((params: Params) => {
        this.selectedId = +params['id']; // 获取回传的url参数
        return this.heroService.getHeroList(null);
      });
  }

  onSelect(hero) {
    this.router.navigate(['/hero', hero.id]);
  }

}
