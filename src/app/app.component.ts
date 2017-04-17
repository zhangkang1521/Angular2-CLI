import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`.active { color: blue}`]
})
export class AppComponent implements OnInit{

  title = 'app works!';
  isDisabled = false;
  isActive = true;
  currentHero: Hero;
  factor: number;
  heroes: Hero[] = [];

  value = 100;

  ngOnInit(): void {
    for(let i = 0; i < 10; i++) {
      let hero = new Hero();
      hero.id = i;
      hero.fullName = 'zk'+i;
      hero.birthday = new Date(1991, 1, 1);
      hero.canFly = ((i&1) == 1 ? true: false);
      this.heroes.push(hero);
    }
    console.log(this.heroes);
    this.factor = 1;
  }


  hh() {
    let hero = new Hero();
    hero.id = 100;
    hero.fullName = 'zk100';
    hero.birthday = new Date(1991, 1, 1);
    hero.canFly = true;
    // let heroesCopy = Array.from(this.heroes);
    // heroesCopy.push(hero);
    // this.heroes = heroesCopy;
    this.heroes.push(hero);
    console.log(this.heroes);
  }

  deleteHero($event) {
    console.log($event);
    console.log('ss');
  }
}
