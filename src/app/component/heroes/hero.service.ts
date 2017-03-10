import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Injectable()
export class HeroService {

  private HERO_URL = "http://localhost:8081/hero";

  constructor(private http:Http) {

  }

  getHero(id: number) {
    return this.http.get(this.HERO_URL + '?id=' + id).map(res => res.json());
  }
}

