import { Pipe, PipeTransform } from '@angular/core';


@Pipe({

  name:'mayus'
})

export class MayusculasPipe implements PipeTransform {

    transform(value :string, enMayusculas :boolean=true): string{

     /* if(enMayusculas){

        console.log(value)
        return value.toLocaleUpperCase();

      }else{
        return value.toLocaleLowerCase();
      }

    }*/

    /*Metodo Ternario*/
    return (enMayusculas) ?  value.toLocaleUpperCase() : value.toLocaleLowerCase();
  }
}
