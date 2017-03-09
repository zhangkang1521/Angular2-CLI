import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'
import {Hero} from "./hero";
import {Injectable} from "@angular/core";

@Injectable()
export class HeroService {

  //HERO_URL = 'http://localhost:8081/hero';
  HERO_URL = '/app/heroes';

  constructor(private http: Http) {

  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get(this.HERO_URL).map(res => {
      return res.json().data;
    });
  }

 /* getHeroes(): Promise<Hero[]> {
    return this.http.get(this.HERO_URL).toPromise().then(res => {
      return res.json();
    });
  }*/

  addHero(params): Observable<any> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.HERO_URL, params, options).map(res => {
      return res.json();
    });
  }

  getHero(id: number): Observable<Hero> {
    return this.http.get(this.HERO_URL + "/" + id).map(res => {
      return res.json().data;
    });
  }

}
