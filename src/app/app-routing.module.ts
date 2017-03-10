import {Routes, RouterModule} from "@angular/router";
import {CrisisListComponent} from "./component/crisis-list/crisis-list.component";
import {HeroDetailComponent} from "./component/hero-detail/hero-detail.component";
import {HeroListComponent} from "./component/hero-list/hero-list.component";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found.component";
import {NgModule} from "@angular/core";

const appRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
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
