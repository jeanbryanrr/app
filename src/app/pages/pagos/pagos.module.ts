import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeerQRComponent } from './leer-qr.component';
import { ResumenPedidoPagoConfirmarComponent } from './resumen-pedido-pago-confirmar.component';
import { RegistroDatosBancariosPagoComponent } from './registro-datos-bancarios-pago.component';
import { MensajeConfirmarPagoComponent } from './mensaje-confirmar-pago.component';
import { MensajeRechazarPagoComponent } from './mensaje-rechazar-pago.component';
import { RecogerPedidoComponent } from './recoger-pedido.component';
import { PAGOS_ROUTES } from './pagos.route';

@NgModule({
  declarations: [
    LeerQRComponent,
    ResumenPedidoPagoConfirmarComponent,
    RegistroDatosBancariosPagoComponent,
    MensajeConfirmarPagoComponent,
    MensajeRechazarPagoComponent,
    RecogerPedidoComponent],
  imports: [
    CommonModule,
    PAGOS_ROUTES
  ]
})
export class PagosModule { }
