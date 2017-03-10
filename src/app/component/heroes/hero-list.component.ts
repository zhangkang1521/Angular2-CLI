import { Component, OnInit } from '@angular/core';
import {Hero} from "./hero";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];

  constructor(private router: Router) { }

  ngOnInit() {
    this.heroes = [];
    for(let i=0; i< 5; i++) {
      let hero = new Hero();
      hero.id = 100 + i;
      hero.name = "zk" + i;
      this.heroes.push(hero);
    }
  }

  onSelect(hero) {
    this.router.navigate(['/hero', hero.id]);
  }

}
