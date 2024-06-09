import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyint'
})
export class currencyintyPipe implements PipeTransform {

  transform(value: number): string {
    // Convert the number to an integer
    const integerValue = Math.floor(value);
    // Ensure it has at least two digits
    const formattedValue = integerValue.toString().padStart(2);
    // Add a dollar sign prefix to the integer and return it as a string
    return `$${formattedValue}`;
  }


}
