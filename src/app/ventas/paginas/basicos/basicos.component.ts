import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLowwer :string= 'fernando'
  nombreUpper :string="FERNANDO"
  nombreCompleto :string= "FernaNdo GOmez"

  fecha :Date = new Date(); //el dia de hoy

}
