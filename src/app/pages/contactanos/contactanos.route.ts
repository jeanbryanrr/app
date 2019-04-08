import { RouterModule, Routes } from '@angular/router';
import { BuzonSugerenciaComponent } from './buzon/buzon-sugerencia.component';
import { RecomendarComponent } from './recomendar/recomendar.component';
import { InicioComponent } from './inicio.component';


const contactanosRoutes: Routes = [

            { path: 'buzon', component: BuzonSugerenciaComponent, data: { titulo: 'Buzon' } },
            { path: 'recomendar', component: RecomendarComponent, data: { titulo: 'Recomendar' } },
            { path: 'inicio', component: InicioComponent, data: { titulo: 'Contáctanos', clase: 'header_color_contactanos' } },
            { path: '', redirectTo: '/home', pathMatch: 'full' }

];


export const CONTACTANOS_ROUTES = RouterModule.forChild( contactanosRoutes );
