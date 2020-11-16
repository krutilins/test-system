import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TestFromComponent } from './components/test-form/test-form.component';
import { TestListComponent } from './components/test-list/test-list.component';
import { TestCardComponent } from './components/test-card/test-card.component';
import { LongAnswerComponent } from './components/long-answer/long-answer.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { TestHistoryComponent } from './components/test-history/test-history.component';
import { ShortAnswerComponent } from './components/short-answer/short-answer.component';
import { SingleChoiceComponent } from './components/single-choice/single-choice.component';
import { MultipleChoiceComponent } from './components/multiple-choice/multiple-choice.component';
import { DropdownChoiceComponent } from './components/dropdown-choice/dropdown-choice.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    TestListComponent,
    TestCardComponent,
    TestFromComponent,
    LongAnswerComponent,
    ConstructorComponent,
    TestHistoryComponent,
    ShortAnswerComponent,
    SingleChoiceComponent,
    MultipleChoiceComponent,
    DropdownChoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
