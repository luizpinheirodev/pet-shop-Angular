import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';  

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './products/detail/detail.component';
import { ProductsService } from './products/products.service';
import { FormComponent } from './products/form/form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    DetailComponent,
    FormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),  //inserido
    FormsModule, //inserido - para inserir o two-way databind
    HttpClientModule //inserido ->permissão para Request
  ],
  providers: [
    ProductsService, //inserido
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
