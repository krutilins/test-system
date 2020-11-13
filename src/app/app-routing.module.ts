import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { TestHistoryComponent } from './components/test-history/test-history.component';
import { TestListComponent } from './components/test-list/test-list.component';

const routes: Routes = [
  {
    path: '', component: TestListComponent
  },
  {
    path: 'constructor', component: ConstructorComponent
  },
  {
    path: 'tests-history', component: TestHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
