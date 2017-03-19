import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {ComposeMessageComponent} from "./compose-message.component";

export class CanDeactiveGuard implements CanDeactivate<ComposeMessageComponent> {
  canDeactivate(component: ComposeMessageComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    console.log(component);
    // return false;
    console.log(component.isModified());
    // 数据被修改且未保存 -> 不允许离开页面
    if(component.isModified()) {
      return false
    } else {
      return true;
    }
  }

}
