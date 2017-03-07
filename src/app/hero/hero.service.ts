import {Http} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import {Hero} from "./hero";
import {Injectable} from "@angular/core";

@Injectable()
export class HeroService {
  constructor(private http: Http) {

  }

  getHeroes(): Observable<Hero[]> {
    // map Applies a given project function to each value emitted by the source Observable, and emits the resulting values as an Observable.
    return this.http.get('http://localhost:8080/hero').map(res => {
      console.log(res);
      console.log(res.json())
      return res.json();
    });
  }
}
