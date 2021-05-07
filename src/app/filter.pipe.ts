import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value: Array<object>, filterString:string, propName:string): any[]{
    const resultArray =[];
     
    if( filterString === '' || propName === ''){
      return value;
    }
    for (const item of value) {
         if (item[propName].includes(filterString)){
         resultArray.push(item);
       }
  
    }
    return resultArray;
  }

}
