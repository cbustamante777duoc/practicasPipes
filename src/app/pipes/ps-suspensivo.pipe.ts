import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'psSuspensivo'
})
export class PsSuspensivoPipe implements PipeTransform {

  transform(value: string): string {
    if (value.toString().length > 6) {
      value = value.substr(0,6);
      value += '...';
    }
    return value;
  }

}
