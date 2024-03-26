import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule, formatCurrency } from '@angular/common';
import { FormComponent } from './mainpage/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { ListageneralComponent } from './listageneral/listageneral.component';
import { AutodetailComponent } from './autodetail/autodetail/autodetail.component';
import { CalificacionComponent } from './utilitarios/calificacion/calificacion.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { EditarComponent } from './autodetail/autodetail/editarauto/editar/editar.component';
import { UserInterceptorService } from './interceptores/userInterceptor.service';

@NgModule({
  declarations: [ AppComponent, NavbarComponent, MainpageComponent, FormComponent, 
    ListageneralComponent, AutodetailComponent, CalificacionComponent, EditarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent],
  exports:[
    CalificacionComponent,
    FormComponent,
   
  ]
})
export class AppModule { }
