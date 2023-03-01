import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeLetToNum'
})
export class ChangeLetToNumPipe implements PipeTransform {

  returnString = '';

  transform(value: string): unknown {
    
    this.returnString = value.replace(/e/gi, "3");// gi = Indica que sea global, para todas las "e" del estring y que no discrimine en mayuscula y miniscula
    this.returnString = this.returnString.replace(/a | A/gi,"4"); // | funcion como or

   
    return this.returnString;
  }

}
