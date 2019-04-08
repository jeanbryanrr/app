import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuzonSugerenciaComponent } from './buzon/buzon-sugerencia.component';
import { RecomendarComponent } from './recomendar/recomendar.component';
import { CONTACTANOS_ROUTES } from './contactanos.route';
import { InicioComponent } from './inicio.component';

@NgModule({
  declarations: [
     BuzonSugerenciaComponent,
     RecomendarComponent,
     InicioComponent
    ],
  imports: [
    CommonModule,
    CONTACTANOS_ROUTES
  ]
})
export class ContactanosModule { }
