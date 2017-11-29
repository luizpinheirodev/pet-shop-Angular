import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    ProductsComponent,
    ProductComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),  //inserido
    HttpClientModule //inserido ->permissão para Request
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
