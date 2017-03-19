import {CanLoad, Route} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

/**
 * 是否允许加载模块
 */
@Injectable()
export class CanLoadGuard implements CanLoad {
  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    console.log(route.path);
    return false;
  }

}
