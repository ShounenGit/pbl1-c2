import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numbers'
})
export class NumbersPipe implements PipeTransform {
  transform(value: number): number[] {
    return Array(value).fill(0).map((x,i)=>i);
  }
}
