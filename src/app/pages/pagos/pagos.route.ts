import { RouterModule, Routes } from '@angular/router';
import { PagosComponent } from './pagos.component';
import { LeerQRComponent } from './leer-qr.component';


const pagoRoutes: Routes = [

             { path: 'qr', component: LeerQRComponent, data: { titulo: 'QR' } },
             { path: '', redirectTo: '/home', pathMatch: 'full' }

];


export const PAGOS_ROUTES = RouterModule.forChild( pagoRoutes );
