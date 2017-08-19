import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
/**
 * Created by zhangkang on 2017/8/19.
 */
@Injectable()
export class CalendarDemoService {

  constructor(private http:Http){}

  search(param):Observable<any> {
    return this.http.post('http://localhost:9999/primeng/calendar', param);
  }

}
