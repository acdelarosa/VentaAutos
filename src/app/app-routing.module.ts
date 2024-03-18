import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { AutodetailComponent } from './autodetail/autodetail/autodetail.component';
import { ErrorComponent } from './404/error/error.component';
import { FormComponent } from './mainpage/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: MainpageComponent,
  },
  {
    path: 'auto/:id',
    component: AutodetailComponent ,
  },
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
