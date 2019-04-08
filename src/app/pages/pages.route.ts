import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagosComponent } from './pagos/pagos.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { ConfiguraPerfilComponent } from './perfil/configura-perfil.component';
import { PedidoComponent } from './pedido/pedido.component';
import { RecogerComponent } from './recoger/recoger.component';




const pagesRoutes: Routes = [

            { path: 'home', component: HomeComponent, data: { titulo: 'Home', clase: 'header_color_home' } },
            { path: 'contactanos', component: ContactanosComponent, loadChildren: './contactanos/contactanos.module#ContactanosModule'},
            { path: 'perfil', component: ConfiguraPerfilComponent, data: { titulo: 'Perfil' } },
            { path: 'pagos', component: PagosComponent, loadChildren: './pagos/pagos.module#PagosModule'},
            { path: 'pedido', component: PedidoComponent, loadChildren: './pedido/pedido.module#PedidoModule'},
            { path: 'recoger', component: RecogerComponent, loadChildren: './recoger/recoger.module#RecogerModule'},

            { path: '', redirectTo: '/home', pathMatch: 'full' }

];


export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
