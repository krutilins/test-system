import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestHistoryListComponent } from './test-history-list.component';
import { TestHistoryComponent } from './test-history/test-history.component';

const routes: Routes = [
  {
    path: 'test-history-list', component: TestHistoryListComponent
  },
  {
    path: 'test-history/:id', component: TestHistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestHistoryRoutingModule { }
