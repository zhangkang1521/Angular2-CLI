import {Routes, RouterModule} from "@angular/router";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";
import {ComposeMessageComponent} from "./component/compose-message/compose-message.component";
import {CanDeactiveGuard} from "./component/compose-message/can-deactive-guard";

const appRoutes: Routes = [
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popup',
    canDeactivate: [CanDeactiveGuard]
  },
  { path: '',
    redirectTo: '/crisis-center',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    loadChildren: 'app/component/heroes/heroes.module.ts#HeroModule'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}
