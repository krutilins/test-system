import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { FormConstructorRoutingModule } from './form-constructor-routing.module';

import { DropdownCreatorComponent } from './dropdown-creator/dropdown-creator.component';
import { FormConstructorComponent } from './form-constructor.component';
import { LongAnswerCreatorComponent } from './long-answer-creator/long-answer-creator.component';
import { ShortAnswerCreatorComponent } from './short-answer-creator/short-answer-creator.component';
import { SingleChoiceCreatorComponent } from './single-choice-creator/single-choice-creator.component';
import { MultipleChoiceCreatorComponent } from './multiple-choice-creator/multiple-choice-creator.component';

@NgModule({
  declarations: [
    FormConstructorComponent,
    DropdownCreatorComponent,
    LongAnswerCreatorComponent,
    ShortAnswerCreatorComponent,
    SingleChoiceCreatorComponent,
    MultipleChoiceCreatorComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    FormConstructorRoutingModule
  ],
  exports: [],
  providers: [],
})
export class FormConstructorModule {}
