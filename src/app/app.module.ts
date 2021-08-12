import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { RouterAppModule } from './router-app.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//CAMBIAR IDIOMA
import localES from '@angular/common/locales/es-AR'
import localFR from '@angular/common/locales/fr'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localES);
registerLocaleData(localFR);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    RouterAppModule,
    VentasModule,
    BrowserAnimationsModule

  ],
  providers: [
    {provide: LOCALE_ID, useValue:'es-AR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
