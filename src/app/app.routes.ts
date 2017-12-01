import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { DetailComponent } from './products/detail/detail.component';
import { FormComponent } from './products/form/form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'contato', component: ContactComponent },
    { path: 'produtos', component: ProductsComponent },
    { 
        path: 'produtos/novo', 
        component: FormComponent, 
        canActivate: [AuthGuard] 
    },
    { path: 'produtos/:id', component: DetailComponent },
    { path: '**', redirectTo: 'inicio'} //Quando não encontra, redirecina para home -> redirectTo: 'pagina-nao-encontrada'
]