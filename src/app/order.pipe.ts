import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order',
  pure: false
})
export class OrderPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let order = (a, b) => {
    
      if(args === 'down') {
        return a.price - b.price;
      }
      if(args === 'up') {
        return b.price - a.price;
      }
    }
    return value.sort(order);
  }

}