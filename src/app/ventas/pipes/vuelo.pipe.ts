import { Pipe, PipeTransform } from '@angular/core';


@Pipe({

  name:'fly'
})

export class FlyPipe implements PipeTransform {

  transform( enVuelo :boolean=true) :string{

    return(enVuelo) ? 'Vuela' : 'No vuela'
  }

}
