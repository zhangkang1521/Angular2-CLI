import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class DemoService {

  constructor(private http: Http) {

  }

  public getRecommand(param) {
    // return new Observable(obs => {
    //   console.log(param);
    //   obs.next(param+'---');
    //   obs.complete();
    // })
    return this.http.get(`http://localhost:8081/switchMap?value=${param}`);
  }
}
