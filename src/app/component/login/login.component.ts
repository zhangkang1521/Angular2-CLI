import {Component, OnInit} from "@angular/core";
import {AuthService} from "../admin/auth.service";
import {Router} from "@angular/router";

@Component({
  template: `<h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()"  *ngIf="!authService.isLoggedIn">Login</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>`
})

export class LoginComponent implements OnInit{

  message: string;

  constructor(
    public authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    if(this.authService.isLoggedIn) {
      this.message = "欢迎您，已登录";
    } else {
      this.message = "请登录";
    }
  }

  login() {
    this.message = '正在登录，请稍后...'
    this.authService.login().subscribe(() => {
      let redirectUrl = this.authService.redirectUrl ? this.authService.redirectUrl : '/heroes';
      this.router.navigate([redirectUrl]);
    });
  }

  logout() {
    this.authService.logout();
    this.message = '已退出';
  }

}
