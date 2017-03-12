
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthService} from "../admin/auth.service";
import {AuthGuard} from "../admin/auth-guard.service";
import {LoginComponent} from "./login.component";

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})

export class LoginRoutingModule {}
