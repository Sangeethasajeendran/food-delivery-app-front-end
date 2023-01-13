import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(restuarants: [], searchKey: string, propName: string):any[]  {
    const result: any = [];
    if (!restuarants || searchKey === '' || propName === '') {
      return restuarants;
    }

   restuarants.forEach((a: any) => {
      if (a[propName].trim().toLowerCase().includes(searchKey.toLowerCase())) {
        result.push(a);
      }
    });
    return result;
  }

}
