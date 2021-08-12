import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Martin'
  genero: string= "Masculino"

  //i18nSelect Pipe

  invitacionSegunGenero={
    'Masculino': 'invitarte',
    'Femenino': 'invitarla'
  }

  //in18nPlural Pipe

  clientes: string []=['Maria', 'Pipo', 'micho', 'tito', 'gordo', 'cabezon']

  clientesMapa={
    '=0':'No tenemos ningun cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){

    this.nombre="melisa",
    this.genero="Femenino"


}


eliminarCLientes(){

    this.clientes.pop()
}


//KeyValue Pipe

personas={

  nombre:'Fernando',
  edad:35,
  direccion:'ottawa, Canada'
}

//array object

heroes=[

  {
    nombre : 'superman',
    vuela:'true'
  },
  {
    nombre : 'robin',
    vuela:'false'
  },
  {
    nombre:'Aquaman',
    vuela:'false'
  }
]

//Async Pipe

miObservable= interval(2000);

valorDelaPromesa= new Promise((resolve, reject)=>{

  setTimeout(()=>{
    resolve('tenemos data promesa')
  }, 3500)

});



}
