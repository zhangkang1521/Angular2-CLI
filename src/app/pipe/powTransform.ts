import {Pipe, PipeTransform} from "@angular/core";
@Pipe({
  name: 'pow'
})

export class PowTransform implements PipeTransform {

  transform(value: number, exponent :number): any {
    console.log(value);
    console.log(exponent);
    return Math.pow(value, exponent);
  }

}

