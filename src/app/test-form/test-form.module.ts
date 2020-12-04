import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { DropdownChoiceComponent } from './dropdown-choice/dropdown-choice.component';
import { LongAnswerComponent } from './long-answer/long-answer.component';
import { MultipleChoiceComponent } from './multiple-choice/multiple-choice.component';
import { ShortAnswerComponent } from './short-answer/short-answer.component';
import { SingleChoiceComponent } from './single-choice/single-choice.component';
import { TestFormRoutingModule } from './test-form-routing.module';
import { TestFormComponent } from './test-form.component';

@NgModule({
  declarations: [
    DropdownChoiceComponent,
    LongAnswerComponent,
    MultipleChoiceComponent,
    ShortAnswerComponent,
    SingleChoiceComponent,
    TestFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TestFormRoutingModule
  ],
  providers: [],
  exports: [],
})
export class TestFormModule {

}
