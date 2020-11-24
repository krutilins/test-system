import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormConstructorComponent } from './form-constructor.component';

const routes: Routes = [
  {
    path: 'constructor', component: FormConstructorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormConstructorRoutingModule { }
