import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    let url = state.url;
    console.log(url);
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
      if(this.authService.isLoggedIn) {
        console.log('已经登录，放行！')
        return true;
      }
      let loginUrl = '/login';
      console.log(`未登录，拦截到${loginUrl}`);
      this.authService.redirectUrl = url;
      this.router.navigate([loginUrl]);
      return false;
  }
}
