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

@NgModule({
  declarations: [ AppComponent, NavbarComponent, MainpageComponent, FormComponent, ListageneralComponent, AutodetailComponent, CalificacionComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    CalificacionComponent
  ]
})
export class AppModule { }
