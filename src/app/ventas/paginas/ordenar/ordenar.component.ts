import { Color, Heroe } from './../../interfaces/ventas.interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

  ordenarPor :string ='';
  enMayusculas :boolean =true;

  heroe: Heroe[]=[
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Lintern Verde',
      vuela: true,
      color: Color.verde
    }
  ]



  CambiarToogle(){

    this.enMayusculas= !this.enMayusculas

  }

  Buscarpor(value :string){

    this.ordenarPor=value;

    //console.log(value);

  }

}
