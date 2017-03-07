/**
 * filter heroes can fly
 * Created by zhangkang on 2017/3/6.
 */
import {Pipe, PipeTransform} from "@angular/core";
import {Hero} from "../hero";
@Pipe({
  name: 'flyHeroes',
  pure: false
})

export class FlyHeroPipe implements PipeTransform{

  transform(heroes: Hero[]): any {
    return heroes.filter(hero => hero.canFly);
  }

}
