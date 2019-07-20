import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limiteCaracteres'
})
export class LimiteCaracteresPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let result = value.substring(0, 70);
    return result;
  }

}
