import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ConfiguraPerfilComponent } from './perfil/configura-perfil.component';
import { PAGES_ROUTES } from './pages.route';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { PagosComponent } from './pagos/pagos.component';
import { RecogerComponent } from './recoger/recoger.component';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  declarations: [

    ContactanosComponent,
    HomeComponent,
    PagosComponent,
    PedidoComponent,
    ConfiguraPerfilComponent,
    RecogerComponent

  ],
  imports: [
    CommonModule,
    PAGES_ROUTES

  ]
})
export class PagesModule { }
