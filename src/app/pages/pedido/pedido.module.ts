import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeleccioneRitaComponent } from './seleccione-rita.component';
import { SeleccioneFrutaComponent } from './seleccione-fruta.component';
import { SeleccioneToppingsComponent } from './seleccione-toppings.component';
import { SeleccioneAdicionalComponent } from './seleccione-adicional.component';
import { BuscarDireccionComponent } from './buscar-direccion.component';
import { ResumenPedidoConfirmarComponent } from './resumen-pedido-confirmar.component';
import { RegistroDatosBancariosComponent } from './registro-datos-bancarios.component';
import { MensajeConfirmarPagoComponent } from './mensaje-confirmar-pago.component';
import { MensajeRechazarPagoComponent } from './mensaje-rechazar-pago.component';
import { RecogerPedidoComponent } from './recoger-pedido.component';
import { PEDIDO_ROUTES } from './pedido.route';

@NgModule({
  declarations: [
     SeleccioneRitaComponent,
     SeleccioneFrutaComponent,
     SeleccioneToppingsComponent,
     SeleccioneAdicionalComponent,
     BuscarDireccionComponent,
     ResumenPedidoConfirmarComponent,
     RegistroDatosBancariosComponent,
     MensajeConfirmarPagoComponent,
     MensajeRechazarPagoComponent,
     RecogerPedidoComponent
     ],
  imports: [
    CommonModule,
    PEDIDO_ROUTES
  ]
})
export class PedidoModule { }
