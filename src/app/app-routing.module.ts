import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { AutodetailComponent } from './autodetail/autodetail/autodetail.component';
import { ErrorComponent } from './404/error/error.component';
import { FormComponent } from './mainpage/form/form.component';
import { EditarComponent } from './autodetail/autodetail/editarauto/editar/editar.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'auto/:codigo',
    component: AutodetailComponent ,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'editarVehiculo/:codigo',
    component: EditarComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
