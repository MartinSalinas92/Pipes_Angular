import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FieldsetModule} from 'primeng/fieldset'

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table'


@NgModule({

  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    ToolbarModule,
    TableModule



 ],

  imports: [

  ]
})
export class PrimeNgModule { }
