import {Routes, RouterModule} from "@angular/router";
import {CrisisListComponent} from "./component/crisis-list/crisis-list.component";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
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
