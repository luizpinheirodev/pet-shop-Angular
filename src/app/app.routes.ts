import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { DetailComponent } from './products/detail/detail.component';

export const ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'contato', component: ContactComponent },
    { path: 'produtos', component: ProductsComponent },
    { path: 'produtos/:id', component: DetailComponent },
    { path: '**', redirectTo: 'inicio'} //Quando não encontra, redirecina para home -> redirectTo: 'pagina-nao-encontrada'
]