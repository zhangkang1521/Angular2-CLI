import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import {Hero} from "./hero";
import {Injectable} from "@angular/core";

@Injectable()
export class HeroService {

  HERO_URL = 'http://localhost:8080/hero';

  constructor(private http: Http) {

  }

  // getHeroes(): Observable<Hero[]> {
  //   // map Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
  //   return this.http.get(this.HERO_URL).map(res => {
  //     return res.json();
  //   });
  // }

  getHeroes(): Promise<Hero[]> {
    // map Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
    return this.http.get(this.HERO_URL).toPromise().then(res => {
      return res.json();
    });
  }

  addHero(params): Observable<any> {
    return this.http.post(this.HERO_URL, params).map(res => {
      return res.json();
    });
  }

}
