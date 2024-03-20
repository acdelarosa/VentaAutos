import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListamoduleComponent } from './listamodule.component';
import { FormComponent } from '../../mainpage/form/form.component';
import { MainpageComponent } from '../../mainpage/mainpage/mainpage.component';
import { AutodetailComponent } from '../../autodetail/autodetail/autodetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListageneralComponent } from '../../listageneral/listageneral.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule, RouterModule, ReactiveFormsModule, FormsModule],

  declarations: [
    ListamoduleComponent,]

})
export class ListamoduleModule { }
