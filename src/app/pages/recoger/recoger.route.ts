import { RouterModule, Routes } from '@angular/router';
import { RecogerComponent } from './recoger.component';
import { ListaPedidoPagadosComponent } from './lista-pedido-pagados.component';





const recogerRoutes: Routes = [

             { path: 'listapedido', component: ListaPedidoPagadosComponent, data: { titulo: 'ListaPedido' } },
             { path: '', redirectTo: '/home', pathMatch: 'full' }

];


export const RECOGER_ROUTES = RouterModule.forChild( recogerRoutes );
