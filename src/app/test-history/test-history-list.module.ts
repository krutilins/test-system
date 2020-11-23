import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TestHistoryCardComponent } from './test-history-card/test-history-card.component';
import { TestHistoryRoutingModule } from './test-history-list-routing.module';

import { TestHistoryListComponent } from './test-history-list.component';
import { TestHistoryComponent } from './test-history/test-history.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    TestHistoryRoutingModule,
  ],
  exports: [

  ],
  declarations: [
    TestHistoryComponent,
    TestHistoryListComponent,
    TestHistoryCardComponent,
  ],
  providers: [],
})
export class TestHistoryModule { }

