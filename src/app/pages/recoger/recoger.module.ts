import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaPedidoPagadosComponent } from './lista-pedido-pagados.component';
import { ResumenPedidoComponent } from './resumen-pedido.component';
import { ConfirmarComponent } from './confirmar.component';
import { RECOGER_ROUTES } from './recoger.route';

@NgModule({
  declarations: [
    ListaPedidoPagadosComponent,
    ResumenPedidoComponent,
    ConfirmarComponent],
  imports: [
    CommonModule,
    RECOGER_ROUTES
  ]
})
export class RecogerModule { }
