import {Routes, RouterModule} from "@angular/router";
import {HeroListComponent} from "./hero-list.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {NgModule} from "@angular/core";

const heroesRoutes: Routes = [
  {path: 'heroes', component: HeroListComponent},
  {path: 'hero/:id', component: HeroDetailComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class HeroRoutingModule{}
