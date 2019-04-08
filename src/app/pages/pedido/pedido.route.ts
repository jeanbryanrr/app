import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pedido.component';
import { SeleccioneAdicionalComponent } from './seleccione-adicional.component';






const pedidoRoutes: Routes = [

         { path: 'seleccioneadicional', component: SeleccioneAdicionalComponent, data: { titulo: 'Adicional' } },
         { path: '', redirectTo: '/home', pathMatch: 'full' }

];


export const PEDIDO_ROUTES = RouterModule.forChild( pedidoRoutes );
