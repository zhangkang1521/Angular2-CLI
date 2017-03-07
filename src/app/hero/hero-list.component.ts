import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html'
})

export class HeroListComponent implements OnInit{

  heroList: Hero[];

  constructor(private heroService:HeroService){

  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(data => {
      this.heroList = data;
    });
  }

}
