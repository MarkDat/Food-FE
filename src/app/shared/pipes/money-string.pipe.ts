import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyString'
})
export class MoneyStringPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): string {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
